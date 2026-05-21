import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {TranslateTitleButton} from '../components/TranslateButton'

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
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title (Somali) — Auto translated from English',
      type: 'string',
      components: { input: TranslateTitleButton }
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'titleEn' },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: '🖼️ Main Image (Hero - shows at top)',
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
      name: 'videoUrl',
      title: '🎬 Video URL (YouTube or other video link)',
      type: 'url',
      description: 'Paste YouTube video URL here — it will embed in the article',
    }),
    defineField({
      name: 'gallery',
      title: '📸 Photo Gallery (extra photos shown below article)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Caption / Description',
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'attachments',
      title: '📎 Attachments (PDF documents, press releases)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'file',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Document Title (e.g. AU Press Release)',
            })
          ]
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
      name: 'bodyEn',
      title: 'Body (English)',
      type: 'blockContent',
    }),
    defineField({
      name: 'body',
      title: 'Body (Somali)',
      type: 'blockContent',
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
