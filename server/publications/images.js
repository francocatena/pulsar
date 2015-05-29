Meteor.publish('images', function () {
  return this.userId ? Images.find() : this.ready()
})
