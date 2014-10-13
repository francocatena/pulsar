Template.menu.helpers({
  activeRouteClass: function () {
    var args = Array.prototype.slice.call(arguments)

    args.pop() // Hash added by Spacebars

    var active = _.any(args, function (name) {
      return Router.current() && Router.current().route.name === name
    })

    return active && 'active'
  },

  hide: function () {
    var inSlide = Router.current() && Router.current().route.name === 'slide'

    return Meteor.user() && inSlide
  }
})
