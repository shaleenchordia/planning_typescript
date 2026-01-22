import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../src/generated/client/client.ts';
import Database from 'better-sqlite3';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Database('dev.db');
const adapter = new PrismaBetterSqlite3(connection as any);

const app = express();
const prisma = new PrismaClient({ adapter });
const port = 3001; // Running on 3001 to avoid conflict with Vite

app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/leads', async (req, res) => {
    try {
        const { name, email, destination, budget } = req.body;

        // Validate input
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                destination,
                budget,
            },
        });

        res.status(201).json(lead);
    } catch (error: any) {
        console.error('Error creating lead:', error);
        // Handle unique constraint violation for email
        if (error.code === 'P2002') {
            return res.status(409).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: 'Failed to save responses' });
    }
});

app.get('/api/leads', async (req, res) => {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
