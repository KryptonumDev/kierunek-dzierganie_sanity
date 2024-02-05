import { removeMarkdown } from "../../utils/functions"

export default {
  name: "Introduction",
  title: "Przedstawienie osoby",
  type: "object",
  fields: [
    {
      name: 'isReversed',
      type: 'boolean',
      title: 'Czy sekcja ma zostać odwrócona?',
      initialValue: false,
      description: 'Jeśli zaznaczone, zdjęcie będzie po lewej stronie, a tekst po prawej. Domyślnie zdjęcie jest po prawej wysunięte do góry, a tekst po lewej.',
      validation: Rule => Rule.required(),
    },
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
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalnie)',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
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
        title: `[Przedstawienie osoby] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}