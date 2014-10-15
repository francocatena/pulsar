Template.slide.helpers({
  content: function () {
    // TODO: remove this dirty hack... Damn
    Meteor.setTimeout(Prism.highlightAll)

    return this.content
  }
})
