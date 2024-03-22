import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ImageAndText",
  title: "Obrazek i Opis",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      hidden: ({ parent }) => !parent?.isImg
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img',
    }
  },
  prepare({ title, subtitle, media }) {
    return {
      title: removeMarkdown(title),
      subtitle: removeMarkdown(subtitle),
      media,
    }
  }
}