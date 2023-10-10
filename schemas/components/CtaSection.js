import { removeMarkdown } from "../../utils/functions"

export default {
  name: "CtaSection",
  title: "Sekcja CTA",
  type: "object",
  fields: [
    {
      name: 'isReversed',
      type: 'boolean',
      title: 'Odwrócona sekcja? (zdjęcie po lewej)',
      initialValue: false,
    },
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
        title: `[Sekcja CTA] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media,
      }
    }
  }
}