// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

const rateLimit = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
    const ip = (await headers()).get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 30 * 60 * 1000;
    const maxRequests = 2;

    const userLimit = rateLimit.get(ip);
    if (userLimit && now - userLimit.timestamp > windowMs) {
        rateLimit.delete(ip);
    }

    if (userLimit && userLimit.count >= maxRequests) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again...' },
            { status: 429 }
        );
    }

    rateLimit.set(ip, {
        count: (userLimit?.count || 0) + 1,
        timestamp: now
    });

    try {
        const body = await request.json();
        const { name, email, message, recaptchaToken } = body;

        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });

        const recaptchaData = await recaptchaResponse.json();
        if (!recaptchaData.success) {
            return NextResponse.json({ error: 'Invalid reCAPTCHA' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: {
                name: 'Yoga Website',
                address: process.env.SMTP_USER ?? ''
            },
            replyTo: `"${name}" <${email}>`,
            to: process.env.SMTP_USER,
            subject: `New Contact Message from ${name}`,
            html: `
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}