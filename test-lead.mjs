import 'dotenv/config';
import { prisma } from './lib/prisma.js';

async function testLeadCreation() {
  try {
    console.log('Testing lead creation...');

    const lead = await prisma.lead.create({
      data: {
        fullName: 'Test User',
        whatsapp: '+919876543210',
        email: 'test@example.com',
        travelMonth: 'June 2026',
        numberOfPax: 2,
        budgetRange: '₹50,000 - ₹1,00,000',
        interests: JSON.stringify(['Culture']),
        specialRequests: 'Test request',
        source: 'website',
        pageUrl: 'http://localhost:3000/contact'
      }
    });

    console.log('✓ Lead created successfully:', lead.id);
    console.log('✓ Status:', lead.status);

    // Clean up test data
    await prisma.lead.delete({ where: { id: lead.id } });
    console.log('✓ Test lead cleaned up');

  } catch (error) {
    console.error('✗ Test failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testLeadCreation();
