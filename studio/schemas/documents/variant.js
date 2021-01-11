export default {
  name: 'variant',
  title: 'Variant',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'shopify', title: 'Shopify'},
  ],
  fields: [
    {
      type: 'variantContent',
      name: 'variantContent',
      fieldset: 'main',
    },
    {
      type: 'defaultVariantContent',
      name: 'defaultVariant',
      fieldset: 'shopify',
    },
  ],
  preview: {
    select: {
      title: 'content.main.title',
      media: 'mainImage',
    },
  },
};
