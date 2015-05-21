AutoForm.addHooks('newImageForm', {
  before: {
    method: function (doc, template) {
      return _.extend(doc, { _id: Random.id() })
    }
  }
})

AutoForm.addHooks('newImageForm', {
  before: {
    method: CfsAutoForm.Hooks.beforeInsert
  },

  after: {
    method: CfsAutoForm.Hooks.afterInsert
  }
})
