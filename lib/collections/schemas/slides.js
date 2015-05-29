Schemas.Slide = new SimpleSchema([Schemas.Base, {
  title: {
    type: String,
    max: 255,
    autoform: {
      autofocus: true
    }
  },

  content: {
    type: String,
    autoform: {
      rows: 10
    }
  },

  number: {
    type: Number
  },

  publish: {
    type: Boolean,
    optional: true
  }
}])

if (Meteor.isClient) {
  Schemas.Slide.labels({
    title:     function () { return TAPi18n.__('slide_title') },
    number:    function () { return TAPi18n.__('slide_number') },
    content:   function () { return TAPi18n.__('slide_content') },
    createdAt: function () { return TAPi18n.__('created_at') },
    updatedAt: function () { return TAPi18n.__('updated_at') }
  })
}
