import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import testimonial from './schema/documents/testimonial';
import caseStudy from './schema/documents/caseStudy';
import blogPost from './schema/documents/blogPost';
import teamMember from './schema/documents/teamMember';
import siteSettings from './schema/documents/siteSettings';
import seoFields from './schema/objects/seoFields';
import ctaBlock from './schema/objects/ctaBlock';
import faqItem from './schema/objects/faqItem';

export const schemaTypes = [
  // Documents
  testimonial,
  caseStudy,
  blogPost,
  teamMember,
  siteSettings,
  // Objects
  seoFields,
  ctaBlock,
  faqItem,
];

export default defineConfig({
  name: 'net-trackers',
  title: 'NetTrackers CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings'].includes(listItem.getId()!)
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
