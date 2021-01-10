export default (req, res) => {
  res.statusCode = 200
  res.json({
    'menus': [
      { 'id': 1, 'name': 'Home', 'icon': 'home-alt', 'isActive': true },
      {
        'id': 2,
        'name': 'Lessons',
        'icon': 'comment-alt-lines',
        'isActive': false,
      },
      { 'id': 3, 'name': 'Wallet', 'icon': 'file-search', 'isActive': false },
      { 'id': 4, 'name': 'Security', 'icon': 'lock-alt', 'isActive': false },
      {
        'id': 5,
        'name': 'About Knektu',
        'icon': 'comment-alt-lines',
        'isActive': false,
      },
    ],
  })
}
