export default {
  name: 'maker',
  title: 'Maker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
