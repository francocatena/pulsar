Feedbacks = new Mongo.Collection('feedbacks')

Feedbacks.attachSchema(Schemas.Feedback)

Meteor.methods({
  createFeedback: function (doc) {
    Feedbacks.insert(doc)
  }
})
