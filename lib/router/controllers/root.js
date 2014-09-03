RootController = RouteController.extend({
  action: function() { return this.render('slideshow') },
  waitOn: function() { return Meteor.subscribe('slides') },
  data:   function() {
    return { slide: Slides.findOne({ current: true }) }
  }
})
