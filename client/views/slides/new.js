Template.slideNew.helpers({
  nextNumber: function () {
    return ++Slides.findOne({}, { sort: { number: -1 } }).number
  }
})
