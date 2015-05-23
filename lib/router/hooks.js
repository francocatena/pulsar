mustBeSignedIn = function () {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render('loading')
    else
      this.render('home')
  } else {
    this.next()
  }
}

Router.onBeforeAction('loading')
Router.onBeforeAction(mustBeSignedIn, {
  except: [
    'login',
    'root',
    'slide'
  ]
})
