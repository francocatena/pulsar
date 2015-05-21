SlidesController = RouteController.extend({
  data: function () {
    return { slides: Slides.find() }
  }
})

SlideController = RouteController.extend({
  data: function () {
    return Slides.findOne(this.params._id)
  },

  onAfterAction: function () {
    Meteor.setTimeout(Prism.highlightAll)
  }
})

SlideNewController = RouteController.extend({
  data: function () {
    return {
      lastSlide: Slides.findOne({}, { sort: { number: -1 } })
    }
  }
})
