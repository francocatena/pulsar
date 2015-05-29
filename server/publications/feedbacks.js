Meteor.publish('feedbacks', function () {
  return this.userId ? Feedbacks.find() : this.ready()
})
