Template.slideNew.helpers({
  nextNumber: function () {
    return this.lastSlide ? ++this.lastSlide.number : 1
  }
})

AutoForm.addHooks('newSlideForm', {
  before: {
    method: function (doc, template) {
      return _.extend(doc, { _id: Random.id() })
    }
  }
})
