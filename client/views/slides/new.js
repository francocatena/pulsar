Template.slideNew.helpers({
  nextNumber: function () {
    return ++Slides.findOne({}, { sort: { number: -1 } }).number
  }
})

AutoForm.addHooks('newSlideForm', {
  before: {
    method: function (doc, template) {
      return _.extend(doc, { _id: Random.id() })
    }
  }
})
