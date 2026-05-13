import { Resend } from 'resend'

let resendInstance: Resend | null = null

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  if (!resendInstance) {
    resendInstance = new Resend(apiKey)
  }
  return resendInstance
}

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
  const resend = getResend()
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const adminEmail = process.env.ADMIN_EMAIL

  if (!resend || !fromEmail || !adminEmail) {
    console.warn('⚠️ Email not sent. Missing email configuration. Lead saved in DB.')
    return
  }

  const interests = parseInterests(lead.interests)

  try {
    const response = await resend.emails.send({
      from: `Kashi Journeys <${fromEmail}>`,
      to: adminEmail,
      subject: `🔔 New Lead: ${lead.fullName} — ${lead.travelMonth}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>New Trip Enquiry 🙏</h2>
          <p><strong>Name:</strong> ${lead.fullName}</p>
          <p><strong>WhatsApp:</strong> +91 ${lead.whatsapp}</p>
          <p><strong>Travel Month:</strong> ${lead.travelMonth}</p>
          <p><strong>Pax:</strong> ${lead.numberOfPax}</p>
          <p><strong>Budget:</strong> ${lead.budgetRange}</p>
          <p><strong>Interests:</strong> ${interests.length ? interests.join(', ') : 'None'}</p>
          <p><strong>Special Requests:</strong> ${lead.specialRequests || 'None'}</p>
          <a href="${process.env.NEXTAUTH_URL}/admin/leads/${lead.id}">View in Dashboard →</a>
        </div>
      `,
    })
    
    if (response.error) {
      console.error('Resend API error:', response.error)
      return
    }
    
    console.log(`✅ Lead notification sent to ${adminEmail}`)
    return response
  } catch (error) {
    console.error('Failed to send lead notification email:', error)
  }
}

export async function sendLeadConfirmationEmail(lead: any) {
  const resend = getResend()
  const fromEmail = process.env.RESEND_FROM_EMAIL

  if (!resend || !fromEmail || !lead.email) {
    console.warn('⚠️ Confirmation email not sent. Missing configuration or customer email.')
    return
  }

  try {
    const response = await resend.emails.send({
      from: `Kashi Journeys <${fromEmail}>`,
      to: lead.email,
      subject: 'Your Varanasi trip enquiry is received! 🙏',
      html: `<p>Namaste ${lead.fullName},</p><p>We've received your request. A Varanasi expert will call you within 2 hours.</p>`,
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