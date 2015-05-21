Template.images.events({
  'click [data-delete]': function (event, template) {
    event.preventDefault()

    if (confirm(TAPi18n.__('confirm')))
      Meteor.call('removeImage', this._id)
  }
})
