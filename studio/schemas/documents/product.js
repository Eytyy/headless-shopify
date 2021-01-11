export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [
    {
      name: 'main',
      title: 'Main Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'shopify',
      title: 'Shopify Content',
      description: 'Read only',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'main',
      type: 'productContent',
      fieldset: 'main',
    },
    {
      name: 'shopify',
      type: 'productDefaultContent',
      fieldset: 'shopify',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
};
