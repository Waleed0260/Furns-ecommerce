import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        maxLength: 40,
      },
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      options: {
        maxLength: 15,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      options: {
        maxLength: 100,
      },
    }),
    defineField({
      name: 'method',
      title: 'Method',
      type: 'number',
    }),
    defineField({
      name: 'total',
      title: 'Total',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'number',
    }),
  ],
})
