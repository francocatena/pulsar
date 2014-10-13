Slides = new Mongo.Collection('slides')

Slides.attachSchema(Schemas.Slide)

Slides.allow({
  remove: ownsDocument
})

Meteor.methods({
  createSlide: function (doc) {
    doc._id = Random.id()
    doc.userId = this.userId

    Slides.insert(doc)

    if (this.isSimulation) Router.go('slide', doc)
  },

  updateSlide: function (insertDoc, updateDoc, currentDoc) {
    Slides.update(currentDoc, updateDoc)

    if (this.isSimulation) Router.go('slide', { _id: currentDoc })
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
