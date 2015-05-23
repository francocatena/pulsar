Feedbacks = new Mongo.Collection('feedbacks')

Feedbacks.attachSchema(Schemas.Feedback)

Meteor.methods({
  createFeedback: function (doc) {
    Feedbacks.insert(doc)
  },

  removeFeedback: function (documentId) {
    if (this.userId)
      Feedbacks.remove(documentId)
  }
})
