Slides = new Mongo.Collection('slides')

Slides.attachSchema(Schemas.Slide)

Meteor.methods({
  createSlide: function (doc) {
    if (! this.userId) throw 'Not authorized'

    Slides.insert(_.extend(doc, { userId: this.userId }))
  },

  updateSlide: function (modifier, documentId) {
    if (! this.userId) throw 'Not authorized'

    Slides.update(documentId, modifier)
  },

  publishAllSlides: function () {
    if (! this.userId) throw 'Not authorized'

    Slides.update({ publish: { $ne: true } }, { $set: { publish: true } }, { multi: true })
  }
})
