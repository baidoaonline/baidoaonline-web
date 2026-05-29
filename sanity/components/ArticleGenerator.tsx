import {useCallback, useState} from 'react'
import {Button, Stack, Text, Card, TextArea, Box} from '@sanity/ui'
import {set, useClient} from 'sanity'

export function ArticleGenerator() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [topic, setTopic] = useState('')
  const client = useClient({apiVersion: '2024-01-01'})

  const generate = useCallback(async () => {
    if (!topic.trim()) { setError('Please enter a headline or key facts first'); return }
    setLoading(true); setError(''); setSuccess('')
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [{ role: 'user', content: `You are a professional journalist for Baidoa Online, a Somali news website. Write a complete news article based on these facts/headline:

${topic}

Rules:
- Start with: "[Day], [Date] (Baidoa Online) -"
- Write 3-4 solid paragraphs
- Professional news style
- Original content, not copied
- Return ONLY a JSON object with two fields: "english" and "somali"
- The "somali" field should be a full Somali translation of the article
- No markdown, no backticks, just raw JSON` }]
        })
      })
      const data = await response.json()
      const text = data.content[0].text.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(text)

      // Get current document ID from URL
      const pathParts = window.location.pathname.split('/')
      const docId = pathParts[pathParts.length - 1]

      await client.patch(docId).set({
        bodyEn: [{
          _type: 'block',
          _key: Math.random().toString(36).slice(2),
          style: 'normal',
          children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: parsed.english }]
        }],
        body: [{
          _type: 'block',
          _key: Math.random().toString(36).slice(2),
          style: 'normal',
          children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: parsed.somali }]
        }]
      }).commit()

      setSuccess('✅ Article generated! Scroll down to see Body fields. Click Publish when ready.')
    } catch (e) {
      setError('Generation failed. Please try again.')
    }
    setLoading(false)
  }, [topic, client])

  return (
    <Stack space={3}>
      <Card padding={3} tone="primary" border>
        <Stack space={3}>
          <Text size={2} weight="bold">🤖 AI Article Generator</Text>
          <Text size={1} muted>Enter headline + key facts, AI writes full article in English & Somali</Text>
          <TextArea
            value={topic}
            onChange={e => setTopic(e.currentTarget.value)}
            placeholder="e.g. Somali parliament votes to extend president's term by 2 years. Opposition walks out. Vote was 150-42."
            rows={4}
          />
          <Button
            onClick={generate}
            disabled={loading}
            tone="positive"
            text={loading ? '✍️ Writing article...' : '🚀 Generate Full Article'}
          />
        </Stack>
      </Card>
      {error && <Card padding={2} tone="critical"><Text size={1}>{error}</Text></Card>}
      {success && <Card padding={2} tone="positive"><Text size={1}>{success}</Text></Card>}
    </Stack>
  )
}
