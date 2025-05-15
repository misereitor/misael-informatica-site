import { sendEmail } from "@/app/lib/send-email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await sendEmail({
      subject: body.subject,
      text: body.text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
