import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  // In development without proper credentials, use test account
  if (!isProduction && (!emailPassword || emailPassword.includes('your_'))) {
    console.warn('⚠️ Email credentials not configured. Using test mode.');
    return null; // Will use test mode
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message, formType } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const adminEmail = 'info@lsrbuilding.be';

    // Email templates
    const adminMailOptions = {
      from: process.env.EMAIL_USER || adminEmail,
      to: adminEmail,
      subject: formType === 'offerte' 
        ? `🔴 Nieuwe Offerteverzoek van ${name}`
        : `🔴 Nieuw Contactbericht van ${name}`,
      html: `
        <h2>${formType === 'offerte' ? 'OFFERTEVERZOEK' : 'CONTACTBERICHT'}</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
        ${project ? `<p><strong>Type Project:</strong> ${project}</p>` : ''}
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Dit bericht is verzonden via de LSR Building website op ${new Date().toLocaleString('nl-NL')}</em></p>
      `,
    };

    const customerMailOptions = {
      from: process.env.EMAIL_USER || adminEmail,
      to: email,
      subject: 'LSR Building - Wij hebben uw bericht ontvangen',
      html: `
        <p>Hallo ${name},</p>
        <p>Dank u wel voor het contacteren van LSR Building. Wij hebben uw ${formType === 'offerte' ? 'offerteverzoek' : 'bericht'} ontvangen.</p>
        <p>Wij zullen u binnen 24 uur beantwoorden.</p>
        <hr>
        <p><strong>Uw gegevens:</strong></p>
        <p>Naam: ${name}<br>
        E-mail: ${email}<br>
        Telefoon: ${phone || 'Niet opgegeven'}<br>
        ${project ? `Type Project: ${project}<br>` : ''}
        Bericht: ${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Met vriendelijke groet,<br>
        <strong>LSR Building</strong><br>
        Projectcoördinatie & Bouwregie</p>
      `,
    };

    // Try to send emails
    if (transporter) {
      try {
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(customerMailOptions),
        ]);
        console.log('✅ Emails sent successfully');
      } catch (emailError) {
        console.error('📧 Email send error:', emailError);
        // Continue anyway - don't fail the request
      }
    } else {
      // Development mode without credentials
      console.log('📧 [TEST MODE] Would send admin email:', {
        to: adminEmail,
        subject: adminMailOptions.subject,
      });
      console.log('📧 [TEST MODE] Would send customer email:', {
        to: email,
        subject: customerMailOptions.subject,
      });
    }

    return NextResponse.json(
      { 
        message: 'Bericht succesvol ontvangen! Wij nemen spoedig contact met u op.',
        mode: transporter ? 'production' : 'test'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verwerken van uw verzoek' },
      { status: 500 }
    );
  }
}

