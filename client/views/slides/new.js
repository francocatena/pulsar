Template.slideNew.helpers({
  nextNumber: function () {
    return ++Slides.findOne({}, { sort: { number: -1 } }).number
  }
})

AutoForm.addHooks('newSlideForm', {
  before: {
    createSlide: function (doc, template) {
      doc._id = Random.id()

      return doc
    }
  }
})
