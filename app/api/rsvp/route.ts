import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Handler untuk GET request
export async function GET() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(rsvps);
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Handler untuk POST request
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message, attendance } = body;

    // Validasi sederhana
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const newRsvp = await prisma.rsvp.create({
      data: {
        name,
        message,
        attendance,
      },
    });

    return NextResponse.json(newRsvp, { status: 201 });
  } catch (error) {
    console.error('Error creating RSVP:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
