export default {
  name: 'newFoodItem',
  title: 'Our New Favorites',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.max(30).error('Title cannot exceed 30 characters'),
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
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.max(160).error('Description cannot exceed 160 characters'),
    },
  ]
}