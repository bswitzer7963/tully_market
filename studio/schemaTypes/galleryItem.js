export default {
  name: 'galleryItem',
  title: 'Gallery: Our Proud Suppliers',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.max(30).error('Title cannot exceed 160 characters'),
    },
    {
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'group',
        title: 'Section',
        type: 'string',
        options: {
            list: ['Produce/Dairy/Honey', 'Snack Related', 'Convenient/Frozen/Drinks', 'Misc'],
            layout: 'radio'
        }
    },
  ]
}