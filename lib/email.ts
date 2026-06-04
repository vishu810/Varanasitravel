import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resendFromEmail = process.env.RESEND_FROM_EMAIL
const adminEmail = process.env.ADMIN_EMAIL

let resend: Resend | null = null
if (resendApiKey) {
  resend = new Resend(resendApiKey)
}

export async function sendLeadNotificationEmail(lead: any) {
  if (!resend || !resendFromEmail || !adminEmail) {
    console.warn(`⚠️ Email not sent. Missing config: ${!resend ? 'RESEND_API_KEY ' : ''}${!resendFromEmail ? 'RESEND_FROM_EMAIL ' : ''}${!adminEmail ? 'ADMIN_EMAIL' : ''}`)
    return null
  }

  try {
    const travelDateFromStr = lead.travelDateFrom ? new Date(lead.travelDateFrom).toLocaleDateString() : 'Not specified'
    const travelDateToStr = lead.travelDateTo ? new Date(lead.travelDateTo).toLocaleDateString() : 'Not specified'
    
    console.log(`[Email] Sending notification to ${adminEmail}...`)
    const response = await resend!.emails.send({
      from: `Varunaassi <${resendFromEmail}>`,
      to: adminEmail,
      subject: `🔔 New Lead: ${lead.fullName} — ${travelDateFromStr} to ${travelDateToStr}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>New Trip Enquiry 🙏</h2>
          <p><strong>Name:</strong> ${lead.fullName}</p>
          <p><strong>WhatsApp:</strong> +91 ${lead.whatsapp}</p>
          <p><strong>Travel Dates:</strong> ${travelDateFromStr} to ${travelDateToStr}</p>
          <p><strong>Pax:</strong> ${lead.numberOfPax}</p>
          <p><strong>Special Requests:</strong> ${lead.specialRequests || 'None'}</p>
          <a href="${process.env.NEXTAUTH_URL}/admin/leads/${lead.id}">View in Dashboard →</a>
        </div>
      `,
    })
    
    if (response.error) {
      console.error('[Email Error]', response.error)
      return null
    }
    
    console.log(`[Email] ✅ Notification sent to ${adminEmail}`)
    return response
  } catch (error: any) {
    console.error('[Email Error]', error.message || error)
    return null
  }
}

export async function sendLeadConfirmationEmail(lead: any) {
  if (!lead.email || !resend || !resendFromEmail) {
    console.warn('⚠️ Confirmation email not sent. Missing email, API key, or from email.')
    return
  }

  try {
    const response = await resend!.emails.send({
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
