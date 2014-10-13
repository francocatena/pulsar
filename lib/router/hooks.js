mustBeSignedIn = function (pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render('loading')
    else
      this.render('home')

    pause()
  }
}

Router.onBeforeAction('loading')
Router.onBeforeAction(mustBeSignedIn, { except: 'login' })
