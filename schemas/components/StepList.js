import { removeMarkdown } from "../../utils/functions"

export default {
  name: "StepList",
  title: "Sekcja z listą elementów",
  type: "object",
  icon: () => '✅',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{
        type: 'StepList_Item'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
      list: 'list',
    },
    prepare({ title, subtitle, list }) {
      return {
        title: `[Sekcja z listą elementów] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media: () => list?.length || '',
      }
    }
  }
}

export const StepList_Item = {
  name: "StepList_Item",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}