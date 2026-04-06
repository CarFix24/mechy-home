import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formspreeUrl = process.env.FORMSPREE_URL;

  if (!formspreeUrl) {
    console.error('FORMSPREE_URL environment variable is not set');
    return NextResponse.redirect(new URL('/?waitlist=error', request.url));
  }

  try {
    const formData = await request.formData();
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      body: body.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.redirect(new URL('/?waitlist=success', request.url));
    } else {
      const text = await response.text();
      console.error('Formspree error:', response.status, text);
      return NextResponse.redirect(new URL('/?waitlist=error', request.url));
    }
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.redirect(new URL('/?waitlist=error', request.url));
  }
}
