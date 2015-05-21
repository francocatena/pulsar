Meteor.publish('imageFiles', function () {
  return ImageFiles.find()
})
