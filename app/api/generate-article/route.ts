import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { topic } = await req.json()
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content: `You are a professional journalist for Baidoa Online, a Somali news website. Write a complete news article based on these facts/headline:\n\n${topic}\n\nRules:\n- Start with: "[Day], [Date] (Baidoa Online) -"\n- Write 3-4 solid paragraphs\n- Professional news style\n- Original content, not copied\n- Return ONLY a JSON object with two fields: "english" and "somali"\n- The "somali" field should be a full Somali translation of the article\n- No markdown, no backticks, just raw JSON` }]
    })
  })
  
  const data = await response.json()
  return NextResponse.json(data)
}
