import { removeMarkdown } from "../../utils/functions"

export default {
  name: "Faq",
  title: "FAQ",
  type: "object",
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
      title: 'Paragraf (opcjonalnie)',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{
            type: 'FaqCollection'
          }],
        },
      ],
      title: 'Lista',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list',
    },
    prepare({ title, list }){
      return {
        title: `[FAQ] ${removeMarkdown(title)}`,
        subtitle: `${list.length} przypiętych elementów FAQ`,
      }
    }
  }
}