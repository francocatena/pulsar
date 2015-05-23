Meteor.publish('feedbacks', function () {
  return this.userId ? Feedbacks.find() : Feedbacks.find({ false: false })
})
