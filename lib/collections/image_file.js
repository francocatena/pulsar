ImageFiles = new FS.Collection('images', {
  stores: [
    new FS.Store.GridFS('images', {})
  ],

  filter: {
    allow: { contentTypes: ['image/*'] }
  },

  onInvalid: function (message) {
    console.log(message)
  }
})

ImageFiles.allow({
  insert: function (userId) {
    return !! userId
  },

  update: function (userId) {
    return !! userId
  },

  remove: function (userId) {
    return !! userId
  },

  download: function (userId) {
    return true
  },

  fetch: null
})
