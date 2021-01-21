export default {
  title: 'Variant Main Content',
  name: 'variantMainContent',
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
