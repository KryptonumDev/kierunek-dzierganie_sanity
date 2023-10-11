import { removeMarkdown } from "../../utils/functions"

export default {
  name: "CourseModules",
  title: "Moduły kursu",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
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
      subtitle: 'paragraph',
      img: 'list[0].img',
    },
    prepare({ title, subtitle, img }) {
      return {
        title: `[Moduły kursu] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media: img,
      }
    }
  }
}