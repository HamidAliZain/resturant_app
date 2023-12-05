import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const result =
        await sql`SELECT * FROM items`;
    return NextResponse.json({ result });

}