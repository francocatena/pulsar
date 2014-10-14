Router.map(function () {
  this.route('root',      { path: '/' })
  this.route('login',     { path: '/login' })
  this.route('slides',    { path: '/slides' })
  this.route('slideNew',  { path: '/slides/new' })
  this.route('slide',     { path: '/slides/:_id' })
  this.route('slideEdit', { path: '/slides/:_id/edit', controller: SlideController })
})
