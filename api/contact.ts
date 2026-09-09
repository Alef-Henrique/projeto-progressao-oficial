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
    } = req.body || {};

    // Validação do nome
    if (
      typeof name !== 'string' ||
      name.trim().length < 2 ||
      name.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: 'Nome inválido.',
      });
    }

    // Validação do e-mail
    if (
      typeof email !== 'string' ||
      email.length > 150 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        success: false,
        message: 'E-mail inválido.',
      });
    }

    // Validação do telefone
    if (
      typeof phone !== 'string' ||
      phone.trim().length < 10 ||
      phone.length > 30
    ) {
      return res.status(400).json({
        success: false,
        message: 'Telefone inválido.',
      });
    }

    // Validação da área de interesse
    if (
      typeof interest !== 'string' ||
      interest.trim().length < 1 ||
      interest.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: 'Área de interesse inválida.',
      });
    }

    // Validação da mensagem
    if (
      message !== undefined &&
      message !== null &&
      (typeof message !== 'string' || message.length > 2000)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Mensagem muito longa.',
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Novo contato - ${name.trim()}`,
      text: `
Novo contato pelo site

Nome: ${name.trim()}
E-mail: ${email.trim()}
Telefone: ${phone.trim()}
Área de interesse: ${interest.trim()}

Mensagem:
${message?.trim() || 'Não informada'}
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