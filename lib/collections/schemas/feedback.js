Schemas.Feedback = new SimpleSchema([Schemas.Base, {
  score: {
    type: Number,
    min: 1,
    max: 5,
    autoform: {
      type: 'select-radio-inline',
      options: function () {
        return [
          { label: TAPi18n.__('feedback_score_5'), value: 5 },
          { label: TAPi18n.__('feedback_score_4'), value: 4 },
          { label: TAPi18n.__('feedback_score_3'), value: 3 },
          { label: TAPi18n.__('feedback_score_2'), value: 2 },
          { label: TAPi18n.__('feedback_score_1'), value: 1 }
        ]
      }
    }
  },

  comment: {
    type: String,
    optional: true,
    autoform: {
      rows: 3
    }
  }
}])

if (Meteor.isClient) {
  Schemas.Feedback.labels({
    score:     function () { return TAPi18n.__('feedback_score') },
    comment:   function () { return TAPi18n.__('feedback_comment') },
    createdAt: function () { return TAPi18n.__('created_at') },
    updatedAt: function () { return TAPi18n.__('updated_at') }
  })
}
