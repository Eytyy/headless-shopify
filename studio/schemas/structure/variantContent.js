export default {
  title: 'Variant Content',
  name: 'variantContent',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'variantDescription',
      title: 'Variant Description',
      type: 'blockContent',
    },
  ],
};
