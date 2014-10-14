RootController = RouteController.extend({
  action: function () {
    if (Meteor.user()) return this.redirect('slides')

    var slide = Slides.findOne()

    console.log(slide)

    if (slide) return this.redirect('slide', slide)

    return this.render('home')
  }
})
