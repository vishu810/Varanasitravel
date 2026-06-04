import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { leadSchema } from '@/lib/validations'
import { sendLeadNotificationEmail, sendLeadConfirmationEmail } from '@/lib/email'

// v2: Fixed Prisma client to use NEON_DATABASE_URL and NEON_DATABASE_URL_UNPOOLED
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log('[Leads API] Received request body')
    
    // Convert date strings to Date objects if needed
    const processedBody = {
      ...body,
      travelDateFrom: body.travelDateFrom ? new Date(body.travelDateFrom) : undefined,
      travelDateTo: body.travelDateTo ? new Date(body.travelDateTo) : undefined,
    }
    
    console.log('[Leads API] Validating schema...')
    const validated = leadSchema.parse(processedBody)
    console.log('[Leads API] Schema validation passed')

    console.log('[Leads API] Creating lead in database...')
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
    console.log(`[Leads API] Lead created successfully with ID: ${lead.id}`)

    console.log('[Leads API] Sending notification emails...')
    await sendLeadNotificationEmail(lead)
    await sendLeadConfirmationEmail(lead)
    console.log('[Leads API] Emails sent')

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 })
  } catch (error: any) {
    console.error('[Leads API Error]', {
      message: error?.message || 'Unknown error',
      code: error?.code,
      meta: error?.meta,
      clientVersion: error?.clientVersion,
    })
    
    // Return user-friendly error message
    let errorMessage = 'Failed to submit form. Please try again.'
    if (error?.code === 'P1000') {
      errorMessage = 'Database connection failed. Please try again in a moment.'
    } else if (error?.code === 'P2002') {
      errorMessage = 'This record already exists.'
    } else if (error?.code?.startsWith('P')) {
      errorMessage = 'Database error. Please try again.'
    }
    
    return NextResponse.json({ error: errorMessage }, { status: 400 })
  }
}
