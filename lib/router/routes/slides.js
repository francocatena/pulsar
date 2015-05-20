Router.route('/slides',           { name: 'slides' })
Router.route('/slides/new',       { name: 'slideNew' })
Router.route('/slides/:_id',      { name: 'slide' })
Router.route('/slides/:_id/edit', { name: 'slideEdit', controller: 'SlideController' })
