Template.layout.rendered = function () {
  $(document).on('keydown', function (event) {
    if (Router.current() && Router.current().route.name != 'slide') return

    var key       = event.which
    var currentId = Router.current() && Router.current().params._id
    var nextKeys  = [39, 34, 40, 13]
    var prevKeys  = [37, 33, 38, 8]

    if (_.contains(nextKeys, key))
      Meteor.call('changeSlide', currentId, 'next')
    else if (_.contains(prevKeys, key))
      Meteor.call('changeSlide', currentId, 'prev')
    else if (_.contains([78, 110], key) && event.ctrlKey && event.altKey)
      Router.go('slideNew',  { _id: currentId })
    else if (_.contains([69, 101], key) && event.ctrlKey && event.altKey)
      Router.go('slideEdit', { _id: currentId })
  })
}
