import {useCallback, useState} from 'react'
import {Button, Stack, Text, Card, TextArea} from '@sanity/ui'
import {useClient} from 'sanity'

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
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      })
      if (!response.ok) {
        const errText = await response.text()
        setError(`API error ${response.status}: ${errText}`)
        setLoading(false)
        return
      }
      const data = await response.json()
      if (!data.content || !data.content[0]) {
        setError(`Bad response: ${JSON.stringify(data)}`)
        setLoading(false)
        return
      }
      const text = data.content[0].text.replace(/```json|```/g, '').trim()
      let parsed
      try {
        parsed = JSON.parse(text)
      } catch(e) {
        setError(`JSON parse failed. Raw: ${text.slice(0, 200)}`)
        setLoading(false)
        return
      }

      const pathParts = window.location.pathname.split('/')
      const rawId = decodeURIComponent(pathParts[pathParts.length - 1])
      const cleanId = rawId.includes(';') ? rawId.split(';')[1].split(',')[0] : rawId
      const docId = 'drafts.' + cleanId

      await client.patch(docId).set({
        bodyEn: [{_type:'block',_key:Math.random().toString(36).slice(2),style:'normal',children:[{_type:'span',_key:Math.random().toString(36).slice(2),text:parsed.english}]}],
        body: [{_type:'block',_key:Math.random().toString(36).slice(2),style:'normal',children:[{_type:'span',_key:Math.random().toString(36).slice(2),text:parsed.somali}]}]
      }).commit()

      setSuccess('✅ Article generated! Scroll down to see Body fields. Click Publish when ready.')
    } catch (e: any) {
      setError(`Error: ${e?.message || String(e)}`)
    }
    setLoading(false)
  }, [topic, client])

  return (
    <Stack space={3}>
      <Card padding={3} tone="primary" border>
        <Stack space={3}>
          <Text size={2} weight="bold">�� AI Article Generator</Text>
          <Text size={1} muted>Enter headline + key facts, AI writes full article in English & Somali</Text>
          <TextArea value={topic} onChange={e => setTopic(e.currentTarget.value)} placeholder="e.g. Somali parliament votes to extend president's term by 2 years. Opposition walks out. Vote was 150-42." rows={4} />
          <Button onClick={generate} disabled={loading} tone="positive" text={loading ? '✍️ Writing article...' : '🚀 Generate Full Article'} />
        </Stack>
      </Card>
      {error && <Card padding={2} tone="critical"><Text size={1}>{error}</Text></Card>}
      {success && <Card padding={2} tone="positive"><Text size={1}>{success}</Text></Card>}
    </Stack>
  )
}
