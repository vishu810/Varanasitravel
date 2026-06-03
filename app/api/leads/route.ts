import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { leadSchema } from '@/lib/validations'
import { sendLeadNotificationEmail, sendLeadConfirmationEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Convert date strings to Date objects if needed
    const processedBody = {
      ...body,
      travelDateFrom: body.travelDateFrom ? new Date(body.travelDateFrom) : undefined,
      travelDateTo: body.travelDateTo ? new Date(body.travelDateTo) : undefined,
    }
    
    const validated = leadSchema.parse(processedBody)

    const lead = await prisma.lead.create({
      data: {
        fullName: validated.fullName,
        whatsapp: validated.whatsapp,
        email: validated.email || null,
        travelDateFrom: validated.travelDateFrom || null,
        travelDateTo: validated.travelDateTo || null,
        numberOfPax: validated.numberOfPax,
        specialRequests: validated.specialRequests,
        source: validated.source,
        pageUrl: validated.pageUrl,
      },
    })

    await sendLeadNotificationEmail(lead)
    await sendLeadConfirmationEmail(lead)

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 })
  } catch (error: any) {
    console.error('[API Error]', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
