import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-10-29.clover',
});

export async function POST(request: NextRequest) {
    try {
        const { amount, eventName, email, name } = await request.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: eventName,
                            description: `Booking for ${eventName}`,
                        },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.headers.get('origin')}/cancel`,
            metadata: {
                eventName: eventName,
                customerName: name,
            },
        });

        console.log('Session created:', session.id, 'URL:', session.url);

        if (!session.url) {
            return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
        }

        return NextResponse.json({ url: session.url });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        console.error('Stripe error:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}