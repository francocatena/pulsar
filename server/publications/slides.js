Meteor.publish('slides', function () {
  return Slides.find({}, { sort: { number: 1 } })
})
