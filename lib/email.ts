import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resendFromEmail = process.env.RESEND_FROM_EMAIL
const adminEmail = process.env.ADMIN_EMAIL
const resend = new Resend(resendApiKey || '')

function parseInterests(interests: any) {
  if (Array.isArray(interests)) return interests
  if (typeof interests === 'string' && interests.length > 0) {
    try {
      return JSON.parse(interests)
    } catch {
      return interests.split(',').map((item: string) => item.trim())
    }
  }
  return []
}

export async function sendLeadNotificationEmail(lead: any) {
  if (!resendApiKey || !resendFromEmail || !adminEmail) {
    const error = `⚠️ Email not sent. Missing: ${!resendApiKey ? 'RESEND_API_KEY' : ''} ${!resendFromEmail ? 'RESEND_FROM_EMAIL' : ''} ${!adminEmail ? 'ADMIN_EMAIL' : ''}`
    console.error(error)
    throw new Error(error)
  }

  const interests = parseInterests(lead.interests)

  try {
    const response = await resend.emails.send({
      from: `Varunaassi <${resendFromEmail}>`,
      to: adminEmail,
      subject: `🔔 New Lead: ${lead.fullName} — ${lead.travelMonth}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>New Trip Enquiry 🙏</h2>
          <p><strong>Name:</strong> ${lead.fullName}</p>
          <p><strong>WhatsApp:</strong> +91 ${lead.whatsapp}</p>
          <p><strong>Travel Month:</strong> ${lead.travelMonth}</p>
          <p><strong>Pax:</strong> ${lead.numberOfPax}</p>
          <p><strong>Interests:</strong> ${interests.length ? interests.join(', ') : 'None'}</p>
          <p><strong>Special Requests:</strong> ${lead.specialRequests || 'None'}</p>
          <a href="${process.env.NEXTAUTH_URL}/admin/leads/${lead.id}">View in Dashboard →</a>
        </div>
      `,
    })
    
    if (response.error) {
      console.error('Resend API error:', response.error)
      throw new Error(`Email failed: ${response.error.message}`)
    }
    
    console.log(`✅ Lead notification sent to ${adminEmail}`, response)
    return response
  } catch (error) {
    console.error('Failed to send lead notification email:', error)
    throw error
  }
}

export async function sendLeadConfirmationEmail(lead: any) {
  if (!lead.email || !resendApiKey || !resendFromEmail) {
    console.warn('⚠️ Confirmation email not sent. Missing email, API key, or from email.')
    return
  }

  try {
    const response = await resend.emails.send({
      from: `Varunaassi <${resendFromEmail}>`,
      to: lead.email,
      subject: 'Your Varanasi trip enquiry is received! 🙏',
      html: `<p>Namaste ${lead.fullName},</p><p>We've received your request. We will get back to you.</p>`,
    })
    
    if (response.error) {
      console.error('Confirmation email failed:', response.error)
      return
    }
    
    console.log(`✅ Confirmation email sent to ${lead.email}`)
    return response
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
  }
}