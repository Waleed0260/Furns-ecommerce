import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: "true",
      },
    }),
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: "name",
        maxLength: 90,
      },
    }),
    defineField({
      name: 'price',
      title: 'price',
      type: 'array',
      of : [{type: 'number'}]
    }),
    defineField({
      name: 'detail',
      title: 'detail',
      type: 'string',
    }),
  ],
})
