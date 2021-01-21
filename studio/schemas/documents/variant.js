export default {
  name: 'variant',
  title: 'Variant',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'content',
      type: 'variantContent',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      media: 'content.main.mainImage',
    },
  },
};
