import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { topic } = await req.json();
  const content = `محتوى مولّد عن: ${topic}`;
  return NextResponse.json({ content, success: true });
}
