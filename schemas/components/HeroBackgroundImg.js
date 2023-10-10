import { removeMarkdown } from "../../utils/functions"

export default {
  name: "HeroBackgroundImg",
  title: "Hero ze Zdjęciem w Tle",
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
      name: 'cta',
      type: 'cta',
      title: 'CTA',
    },
    {
      name: 'cta_Annotation',
      type: 'markdown',
      title: 'CTA Annotation',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
      media: 'img',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `[Hero ze Zdjęciem w Tle] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media,
      }
    }
  }
}