Template.feedbackNew.helpers({
  showThanks: function () {
    return Session.get('feedbackSent')
  }
})

AutoForm.addHooks('newFeedbackForm', {
  before: {
    method: function (doc, template) {
      if (AutoForm.validateForm('newFeedbackForm'))
        Session.set('feedbackSent', true)

      return _.extend(doc, { _id: Random.id() })
    }
  }
})
