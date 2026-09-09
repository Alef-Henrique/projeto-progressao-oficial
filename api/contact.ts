import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.',
    });
  }

  try {
    const {
      name,
      email,
      phone,
      interest,
      message,
    } = req.body;

    if (!name || !email || !phone || !interest) {
      return res.status(400).json({
        success: false,
        message: 'Preencha todos os campos obrigatórios.',
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Novo contato - ${name}`,
      html: `
        <h2>Novo contato pelo site</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Área de interesse:</strong> ${interest}</p>
        <p><strong>Mensagem:</strong> ${message || 'Não informada'}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);

    return res.status(500).json({
      success: false,
      message: 'Erro ao enviar mensagem.',
    });
  }
}
