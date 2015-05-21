Schemas.Image = new SimpleSchema([Schemas.Base, {
  name: {
    type: String,
    index: true,
    autoform: {
      autofocus: true
    }
  },

  imageId: {
    type: String,
    index: true,
    autoform: {
      type:       'cfs-file',
      collection: 'images'
    }
  }
}])

if (Meteor.isClient) {
  Schemas.Image.labels({
    name:      function () { return TAPi18n.__('image_name') },
    imageId:   function () { return TAPi18n.__('image_image') },
    createdAt: function () { return TAPi18n.__('created_at') },
    updatedAt: function () { return TAPi18n.__('updated_at') }
  })
}
