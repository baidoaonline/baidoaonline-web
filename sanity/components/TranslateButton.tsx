import {useCallback, useState} from 'react'
import {Button, Stack, Text, Card} from '@sanity/ui'
import {set, StringInputProps, useFormValue} from 'sanity'

export function TranslateTitleButton(props: StringInputProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sourceValue = useFormValue(['title']) as string

  const translate = useCallback(async () => {
    if (!sourceValue) { setError('Please fill in Title (Somali) first'); return }
    setLoading(true); setError('')
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 500,
          messages: [{ role: 'user', content: `Translate this Somali news headline to English. Return only the translation:\n\n${sourceValue}` }]
        })
      })
      const data = await response.json()
      props.onChange(set(data.content[0].text))
    } catch { setError('Translation failed. Please try again.') }
    setLoading(false)
  }, [sourceValue, props])

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Button
        onClick={translate}
        disabled={loading}
        tone="primary"
        text={loading ? '🔄 Translating...' : '🤖 Auto Translate from Somali'}
      />
      {error && <Card padding={2} tone="critical"><Text size={1}>{error}</Text></Card>}
    </Stack>
  )
}
