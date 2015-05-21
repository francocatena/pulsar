ImagesController = RouteController.extend({
  data: function () {
    return { images: Images.find({}, { sort: { name: 1 } }) }
  }
})

ImageController = RouteController.extend({
  data: function () {
    var image   = Images.findOne(this.params._id)

    if (image)
      image.image = ImageFiles.findOne(image.imageId)

    return image
  }
})
