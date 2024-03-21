import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'Privacy_Policy_Page_Content',
  title: 'Zawartość',
  type: 'object',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
  prepare({title, subtitle}) {
    return {
      title: removeMarkdown(title),
      subtitle: removeMarkdown(subtitle),
    }
  },
}
