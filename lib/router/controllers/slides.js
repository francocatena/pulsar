SlidesController = RouteController.extend({
  data: function () {
    return { slides: Slides.find() }
  }
})

SlideController = RouteController.extend({
  data: function () {
    var lastSlide = Slides.findOne({}, { sort: { number: -1 } })
    var slide     = Slides.findOne(this.params._id)

    if (lastSlide && slide &&  lastSlide._id === slide._id)
      slide.isLast = true

    return slide
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
