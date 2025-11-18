import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-10-29.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Webhook error';
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        // Send confirmation email
        await sendConfirmationEmail(
            session.customer_email!,
            session.metadata!.customerName,
            session.metadata!.eventName,
            session.amount_total! / 100
        );
    }

    return NextResponse.json({ received: true });
}

async function sendConfirmationEmail(
    email: string,
    name: string,
    eventName: string,
    amount: number
) {
    console.log('Attempting to send email to:', email);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASSWORD exists:', !!process.env.SMTP_PASSWORD);
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: {
                name: 'Sound Waves Yoga',
                address: process.env.SMTP_USER ?? ''
            },
            to: email,
            subject: `Booking Confirmation - ${eventName}`,
            html: `
                <h1>Thank you for your booking, ${name}!</h1>
                <p>Your payment of £${amount} for <strong>${eventName}</strong> has been confirmed.</p>
                <p>We look forward to seeing you!</p>
                <br/>
                <p>Namaste,<br/>Sound Waves Yoga</p>
            `,
        });
        console.log('Email sent successfully to:', email);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}