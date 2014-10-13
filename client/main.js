Meteor.startup(function () {
  Session.set('languageLoaded', false)

  TAPi18n.setLanguage('es').done(function () {
    Session.set('languageLoaded', true)
    loadSimpleSchemaMessages()
  })

  accountsUIBootstrap3.setLanguage('es')
})

Template.registerHelper('setDocumentTitle', function (title) {
  document.title = TAPi18n.__('app_name') + ' | ' + title
})
