import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const { email, name, message } = await request.json();

        // Check if required fields exist
        if (!email || !name || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: email, name, or message' },
                { status: 400 }
            );
        }

        // Transport configuration
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const capName = name.charAt(0).toUpperCase() + name.slice(1);
        // Mail options
        const mailOptions: Mail.Options = {
            from: 'Portfolio',
            to: process.env.MY_EMAIL,
            subject: `Message de ${name} (${email})`,

            html:
                `
                    <p class="text-center">
                       Message from <strong>${name}</strong> 
                       (<a href="mailto:${email}">${email}</a>):
                    </p>
                    <p>${message}</p>
                `,
        };

        // Send email using nodemailer
        await transport.sendMail(mailOptions);

        // Success response
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Error sending email:', error.message);

        // Error response
        return NextResponse.json(
            { error: 'Failed to send email, please try again later.' },
            { status: 500 }
        );
    }
}