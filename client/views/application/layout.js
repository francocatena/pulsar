changeSlide = function (slideId, direction) {
  var current = Slides.findOne(slideId)
  var number  = current && current.number
  var next    = direction === 'prev' ?
    Slides.findOne({ number: { $lt: number } }, { sort: { number: -1 } }) :
    Slides.findOne({ number: { $gt: number } }, { sort: { number: 1 } })

  if (next) Router.go('slide', next)
}

Template.layout.onCreated(function () {
  $(document).on('keyup touchstart', function (event) {
    var router   = Router.current()
    var slideId  = router && router.params._id
    var which    = event.which
    var type     = event.type

    var keyboardNext = _.contains([39, 34, 40, 13], which)
    var keyboardPrev = _.contains([37, 33, 38],     which)
    var mouseNext    = type === 'touchstart'

    if (router && router.route.getName() !== 'slide') return

    if (keyboardNext || mouseNext)
      changeSlide(slideId, 'next')
    else if (keyboardPrev)
      changeSlide(slideId, 'prev')
    else if (_.contains([78, 110], which) && event.ctrlKey && event.altKey)
      Router.go('slideNew')
    else if (_.contains([69, 101], which) && event.ctrlKey && event.altKey)
      Router.go('slideEdit', { _id: slideId })
  })
})
