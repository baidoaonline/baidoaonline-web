import {useCallback, useState} from 'react'
import {Button, Stack, Text, Card} from '@sanity/ui'
import {set, StringInputProps, useFormValue} from 'sanity'

export function TranslateTitleButton(props: StringInputProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sourceValue = useFormValue(['titleEn']) as string

  const translate = useCallback(async () => {
    if (!sourceValue) { setError('Please fill in Title (English) first'); return }
    setLoading(true); setError('')
    try {
      const response = await fetch('/api/translate-title', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: sourceValue })
      })
      const data = await response.json()
      props.onChange(set(data.content[0].text))
    } catch { setError('Translation failed. Please try again.') }
    setLoading(false)
  }, [sourceValue, props])

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Button onClick={translate} disabled={loading} tone="primary" text={loading ? '🔄 Translating...' : '🤖 Auto Translate to Somali'} />
      {error && <Card padding={2} tone="critical"><Text size={1}>{error}</Text></Card>}
    </Stack>
  )
}
