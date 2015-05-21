Template.layout.onCreated(function () {
  $(document).on('keyup', function (event) {
    var router   = Router.current()
    var slideId  = router && router.params._id
    var key      = event.which
    var nextKeys = [39, 34, 40, 13]
    var prevKeys = [37, 33, 38, 8]

    if (! Meteor.user()) return
    if (router && router.route.getName() !== 'slide') return

    if (_.contains(nextKeys, key))
      Meteor.call('changeSlide', slideId, 'next')
    else if (_.contains(prevKeys, key))
      Meteor.call('changeSlide', slideId, 'prev')
    else if (_.contains([78, 110], key) && event.ctrlKey && event.altKey)
      Router.go('slideNew',  { _id: slideId })
    else if (_.contains([69, 101], key) && event.ctrlKey && event.altKey)
      Router.go('slideEdit', { _id: slideId })
  })
})
