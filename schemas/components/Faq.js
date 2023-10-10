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
    },
    {
      name: 'list',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
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
        subtitle: `${list.length} items`,
      }
    }
  }
}