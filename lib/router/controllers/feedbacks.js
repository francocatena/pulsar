FeedbacksController = RouteController.extend({
  data: function () {
    return { feedbacks: Feedbacks.find() }
  }
})

FeedbackController = RouteController.extend({
  data: function () {
    return Feedbacks.findOne(this.params._id)
  }
})
