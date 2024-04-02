import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { singleTypes, collectionTypes, schemaTypes } from './schemas';
import { media } from 'sanity-plugin-media';

import { markdownSchema } from 'sanity-plugin-markdown';
import { CustomMarkdownInput } from './components/Markdown';
import { ExternalLinks } from './components/ExternalLinks';

const createListItem = (S, typeName) => {
  const { title, name, icon } = schemaTypes.find(item => item.name === typeName);
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(S.document().schemaType(name).title(title).documentId(name));
};

const singletonTypes = new Set(singleTypes.map(type => type.name));
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const createDocumentTypeListItem = (S, name) =>
  S.documentTypeListItem(collectionTypes.find(type => type.name === name).name);

export default defineConfig({
  name: 'default',
  title: 'Kierunek Dzierganie',

  projectId: '5q82mab3',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Struktura')
          .items([
            createListItem(S, 'global'),
            S.divider(),
            S.listItem()
              .title('Strona internetowa')
              .icon(() => '📄')
              .child(
                S.list()
                  .title('Podstrony')
                  .items([
                    ...singleTypes.map(item => createListItem(S, item.name)),
                    S.divider(),
                    createDocumentTypeListItem(S, 'ReviewCollection'),
                    createDocumentTypeListItem(S, 'FaqCollection'),
                    createDocumentTypeListItem(S, 'CustomerCaseStudy_Collection'),
                    createDocumentTypeListItem(S, 'Partner_Collection'),
                    S.divider(),
                    createDocumentTypeListItem(S, 'BlogPost_Collection'),
                    createDocumentTypeListItem(S, 'BlogCategory_Collection'),
                    createDocumentTypeListItem(S, 'Author_Collection'),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Strony użytkowników')
              .icon(() => '👤')
              .child(
                S.list()
                  .title('Podstrony')
                  .items([
                    createListItem(S, 'AffiliateDashboard_Page'),
                    createListItem(S, 'Support_Page'),
                    createListItem(S, 'Logout_Page'),
                    createListItem(S, 'Delete_Page'),
                  ])
              ),
            S.divider(),
            createDocumentTypeListItem(S, 'landingPage'),
            S.divider(),
            S.listItem()
              .title('Sklep')
              .icon(() => '🛒')
              .child(
                S.list()
                  .title('Elementy')
                  .items([
                    createDocumentTypeListItem(S, 'product'),
                    S.divider(),
                    createDocumentTypeListItem(S, 'course'),
                    createDocumentTypeListItem(S, 'lesson'),
                    S.divider(),
                    createDocumentTypeListItem(S, 'productCategory'),
                    S.divider(),
                    createListItem(S, 'Cart'),
                  ])
              ),
          ]),
    }),
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    media(),
  ],

  schema: {
    types: schemaTypes,
    templates: templates => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  tools: [ExternalLinks()],
});
