languageLoaded = new ReactiveVar

var language = {
  ready: function () { return languageLoaded.get() }
}

Router.configure({
  layoutTemplate:  'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return [
      this.subscribe('slides'),
      language
    ]
  }
})
