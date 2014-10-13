languageLoaded = new ReactiveVar(false)

var language = {
  ready: function () { return languageLoaded.get() }
}

Router.configure({
  layoutTemplate:  'layout',
  loadingTemplate: 'loading',
  waitOn:          language
})
