const { PrismaClient } = require('@prisma/client/edge');
const { withAccelerate } = require('@prisma/extension-accelerate');

async function testDatabase() {
    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza194OWZIWmVXYTdqYzhha1o1MHpVcTMiLCJhcGlfa2V5IjoiMDFLMzFORFFCRk5YVDRNQlNHOVIyMVdXV00iLCJ0ZW5hbnRfaWQiOiIyZjliYzNlY2UyOGJkYmJjMjI3OGQxNWIxOTY1ZTkyYmRkOTY1NDQ2YzdiZjM2ZjJlNDE3ZTFhNjQ2MGRhNTc4IiwiaW50ZXJuYWxfc2VjcmV0IjoiMTZlZTgwN2ItNWI4NS00NTllLTljZmEtMjgxZDQ1ZGQ4Yjk5In0.Gs99hiL7K0_EybWF-WwDnD_TutvaBHEz7e0KP9Egk3A"
            }
        }
    }).$extends(withAccelerate());

    try {
        console.log('Testing database connection...');
        
        // Test connection
        await prisma.$connect();
        console.log('✅ Successfully connected to database');
        
        // Try to count contacts
        const count = await prisma.contact.count();
        console.log(`✅ Contact table exists. Current count: ${count}`);
        
        // Try to find any contacts
        const contacts = await prisma.contact.findMany({ take: 1 });
        console.log(`✅ Can query Contact table. Sample record: ${JSON.stringify(contacts[0] || 'No records')}`);
        
    } catch (error) {
        console.error('❌ Database test failed:', error.message);
        console.error('Full error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabase();
