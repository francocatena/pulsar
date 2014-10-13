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

Template.menu.events({
  'click a': function () {
    $('.navbar-fixed-top .navbar-collapse.in').collapse('hide')
  },

  'click [data-logout]': function (event, template) {
    event.preventDefault()

    Meteor.logout(function () {
      Router.go('root')
    })
  }
})
