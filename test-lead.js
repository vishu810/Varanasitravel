import('dotenv').then(dotenv => {
  dotenv.config({ path: '.env.local' });

  import('./lib/prisma.js').then(({ prisma }) => {
    async function testLeadCreation() {
      try {
        console.log('Testing lead creation...');

        const testData = {
          fullName: 'Test User',
          whatsapp: '+919876543210',
          email: 'test@example.com',
          travelMonth: 'June 2026',
          numberOfPax: 2,
          budgetRange: '50,000 - 1,00,000',
          interests: ['Culture', 'Food'],
          specialRequests: 'Test request',
          source: 'website',
          pageUrl: 'http://localhost:3000/contact'
        };

        const lead = await prisma.lead.create({
          data: {
            fullName: testData.fullName,
            whatsapp: testData.whatsapp,
            email: testData.email,
            travelMonth: testData.travelMonth,
            numberOfPax: testData.numberOfPax,
            budgetRange: testData.budgetRange,
            interests: JSON.stringify(testData.interests),
            specialRequests: testData.specialRequests,
            source: testData.source,
            pageUrl: testData.pageUrl,
          },
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
  }).catch(err => console.error('Import error:', err));
}).catch(err => console.error('Dotenv error:', err));

