Meteor.startup(function () {
  languageLoaded.set(false)

  TAPi18n.setLanguage('es').done(function () {
    languageLoaded.set(true)
    loadSimpleSchemaMessages()
  })

  accountsUIBootstrap3.setLanguage('es')
})

Template.registerHelper('setDocumentTitle', function (title) {
  document.title = TAPi18n.__('app_name') + ' | ' + title
})
