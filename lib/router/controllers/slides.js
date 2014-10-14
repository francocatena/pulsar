SlidesController = RouteController.extend({
  waitOn: function () { return this.subscribe('slides') },
  data:   function () { return { slides: Slides.find() } }
})

SlideController = RouteController.extend({
  waitOn: function () { return this.subscribe('slides') },
  data:   function () { return Slides.findOne(this.params._id) }
})
