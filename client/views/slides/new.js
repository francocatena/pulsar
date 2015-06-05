Template.slideNew.helpers({
  nextNumber: function () {
    return this.lastSlide ? ++this.lastSlide.number : 1
  }
})

AutoForm.addHooks('newSlideForm', {
  before: {
    method: function (doc, template) {
      _.extend(doc, { _id: Random.id() })

      if (AutoForm.validateForm('newSlideForm'))
        setTimeout(function () {
          Router.go('slide', doc)
        }, 100)

      return doc
    }
  }
})
