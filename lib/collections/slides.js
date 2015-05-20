Slides = new Mongo.Collection('slides')

Slides.attachSchema(Schemas.Slide)

Meteor.methods({
  createSlide: function (doc) {
    Slides.insert(_.extend(doc, { userId: this.userId }))

    if (this.isSimulation) Router.go('slide', doc)
  },

  updateSlide: function (modifier, documentId) {
    Slides.update(documentId, modifier)

    if (this.isSimulation) Router.go('slide', { _id: documentId })
  },

  changeSlide: function (slideId, direction) {
    var current = Slides.findOne(slideId)
    var number  = current && current.number
    var next    = direction === 'prev' ?
      Slides.findOne({ number: { $lt: number } }, { sort: { number: -1 } }) :
      Slides.findOne({ number: { $gt: number } }, { sort: { number: 1 } })

    if (next && this.isSimulation) Router.go('slide', next)
  }
})
