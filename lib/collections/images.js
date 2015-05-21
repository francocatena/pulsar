Images = new Mongo.Collection('images')

Images.attachSchema(Schemas.Image)

Meteor.methods({
  createImage: function (doc) {
    Images.insert(doc)

    if (this.isSimulation) Router.go('image', doc)
  },

  updateImage: function (modifier, documentId) {
    Images.update(documentId, modifier)

    if (this.isSimulation) Router.go('image', { _id: documentId })
  },

  removeImage: function (documentId) {
    var image = Images.findOne(documentId)

    ImageFiles.remove(image.imageId)
    Images.remove(image._id)
  }
})
