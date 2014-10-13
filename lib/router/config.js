var languageLoaded = {
  ready: function () { return Session.get('languageLoaded') }
}

Router.configure({
  layoutTemplate:  'layout',
  loadingTemplate: 'loading',
  waitOn:          languageLoaded
})
