import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const {name, email, message} = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `krishnapriya.dev- Portfolio <contact@krishnapriya.dev>`,
      to: ['krishnapriyavenkatakrishnan@gmail.com'],
      subject: 'Someone reached out via the contact form',
      react: React.createElement(EmailTemplate,{ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}