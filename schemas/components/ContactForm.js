import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ContactForm",
  title: "Formularz kontaktowy",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      initialValue: 'Skontaktuj się z nami i **rozpocznij współpracę**'
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf (opcjonalnie)',
      initialValue: 'Chcesz razem z nami szerzyć pasję do rękodzieła? Odezwij się do nas – odpowiemy natychmiast!'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Formularz kontaktowy] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}