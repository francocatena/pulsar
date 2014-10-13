Meteor.publish('slides', function () {
  return Slides.find({ userId: this.userId }, { sort: { number: 1 } })
})
