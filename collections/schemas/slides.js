Schemas.Slide = new SimpleSchema([Schemas.Base, {
  title: {
    type: String,
    max: 255
  },
  content: {
    type: String
  },
  number: {
    type: Number
  }
}])

if (Meteor.isClient) {
  Schemas.Slide.labels({
    title: function () { return TAPi18n.__('slide_title') },
    number: function () { return TAPi18n.__('slide_number') },
    content: function () { return TAPi18n.__('slide_content') },
    createdAt: function () { return TAPi18n.__('created_at') },
    updatedAt: function () { return TAPi18n.__('updated_at') }
  })
}
