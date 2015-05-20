Template.menu.helpers({
  activeRouteClass: function () {
    var args =  _.chain(arguments).toArray().initial().value()

    var active = _.any(args, function (name) {
      return Router.current() && Router.current().route.getName() === name
    })

    return active && 'active'
  },

  hide: function () {
    return Router.current() && Router.current().route.getName() === 'slide'
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
