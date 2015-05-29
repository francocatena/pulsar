Meteor.publish('slides', function () {
  var options = { sort: { number: 1 } }

  if (this.userId)
    return Slides.find({}, options)
  else
    return Slides.find({ publish: true }, options)
})
