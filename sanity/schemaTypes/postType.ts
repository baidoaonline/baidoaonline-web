import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {useClient} from 'sanity'
import {useCallback, useState} from 'react'
import {Button, Stack, Text, Spinner} from '@sanity/ui'
import {set, useFormValue} from 'sanity'

function TranslateButton({onChange, fieldName, sourceField}: any) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sourceValue = useFormValue([sourceField])

  const translate = useCallback(async () => {
    if (!sourceValue) {
      setError('No source text to translate')
      return
    }
    setLoading(true)
    setError('')
    try {
      const isToEnglish = fieldName === 'titleEn' || fieldName === 'bodyEn'
      const prompt = isToEnglish
        ? `Translate this Somali text to English. Return only the translation, nothing else:\n\n${typeof sourceValue === 'string' ? sourceValue : JSON.stringify(sourceValue)}`
        : `Translate this English text to Somali. Return only the translation, nothing else:\n\n${typeof sourceValue === 'string' ? sourceValue : JSON.stringify(sourceValue)}`

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      })
      const data = await response.json()
      const translated = data.content[0].text
      onChange(set(translated))
    } catch (e) {
      setError('Translation failed. Please try again.')
    }
    setLoading(false)
  }, [sourceValue, fieldName, onChange])

  return (
    <Stack space={2}>
      <Button
        onClick={translate}
        disabled={loading}
        tone="primary"
        text={loading ? 'Translating...' : '🤖 Auto Translate'}
        icon={loading ? Spinner : undefined}
      />
      {error && <Text size={1} style={{color: 'red'}}>{error}</Text>}
    </Stack>
  )
}

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'isBreaking',
      title: '🔴 Breaking News',
      type: 'boolean',
      description: 'Check this to show BREAKING NEWS badge on this article',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      title: 'Title (Somali)',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      components: {
        field: (props: any) => (
          <Stack space={3}>
            {props.renderDefault(props)}
            <TranslateButton
              onChange={props.onChange}
              fieldName="titleEn"
              sourceField="title"
            />
          </Stack>
        )
      }
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body (Somali)',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body (English)',
      type: 'blockContent',
      components: {
        field: (props: any) => (
          <Stack space={3}>
            {props.renderDefault(props)}
            <TranslateButton
              onChange={props.onChange}
              fieldName="bodyEn"
              sourceField="body"
            />
          </Stack>
        )
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
