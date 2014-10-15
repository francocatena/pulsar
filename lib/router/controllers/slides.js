SlidesController = RouteController.extend({
  data: function () { return { slides: Slides.find() } }
})

SlideController = RouteController.extend({
  data: function () { return Slides.findOne(this.params._id) }
})
