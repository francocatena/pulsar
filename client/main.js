Meteor.startup(function () {
  languageLoaded.set(false)

  TAPi18n.setLanguage('es').done(function () {
    languageLoaded.set(true)
    loadSimpleSchemaMessages()
  })
})

Template.registerHelper('setDocumentTitle', function (title) {
  document.title = TAPi18n.__('app_name') + ' | ' + title
})
