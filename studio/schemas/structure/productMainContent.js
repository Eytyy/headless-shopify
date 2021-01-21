export default {
  name: 'productMainContent',
  title: 'Product Main Content',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Description',
      type: 'localeBlockContent',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Curation', value: 'curation'},
          {title: 'Creation', value: 'creation'},
        ],
      },
    },
    {
      name: 'maker',
      title: 'Maker',
      type: 'reference',
      to: {type: 'maker'},
    },
    {
      name: 'color',
      title: 'Color',
      type: 'reference',
      to: {type: 'color'},
    },
    {
      name: 'material',
      title: 'Material',
      type: 'reference',
      to: {type: 'material'},
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
      description: 'This has to stay in sync with Shopify',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      maker: 'maker.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
};
