Router.route('/images',           { name: 'images' })
Router.route('/images/new',       { name: 'imageNew' })
Router.route('/images/:_id',      { name: 'image' })
Router.route('/images/:_id/edit', { name: 'imageEdit', controller: 'ImageController' })
