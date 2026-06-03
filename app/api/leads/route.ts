import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { leadSchema } from '@/lib/validations'
import { sendLeadNotificationEmail, sendLeadConfirmationEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = leadSchema.parse(body)

    const lead = await prisma.lead.create({
      data: {
        fullName: validated.fullName,
        whatsapp: validated.whatsapp,
        email: validated.email || null,
        travelDate: validated.travelDate || null,
        numberOfPax: validated.numberOfPax,
        budgetRange: validated.budgetRange ?? 'Not specified',
        specialRequests: validated.specialRequests,
        source: validated.source,
        pageUrl: validated.pageUrl,
      },
    })

    await sendLeadNotificationEmail(lead)
    await sendLeadConfirmationEmail(lead)

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
