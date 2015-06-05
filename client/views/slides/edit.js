AutoForm.addHooks('editSlideForm', {
  before: {
    'method-update': function (doc) {
      var currentDoc = this.currentDoc

      if (AutoForm.validateForm('editSlideForm'))
        setTimeout(function () {
          Router.go('slide', currentDoc)
        }, 100)

      return doc
    }
  }
})
