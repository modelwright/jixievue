module.exports = {
    APP_NAME: ['www', 'memberCenter'], // 应用名，按顺序对应APP_LIST元素位
    APP_LIST: [
      {
        BASE_URL: '', // 二级目录
        INDEX_HTML: 'mod1', // 默认页（自动改名为index.html）
        CONTEXT_DIRECTORY: [ // 目录树结构（上接BASE_URL或DOMAIN）
          'mod2',
          {
            'goods': [
              'mod4',
              'mod5'
            ],
            'coupons': [
              'mod6',
              {
                'points_coupons': [
                  'mod7',
                  'mod8',
                  'mod3'
                ]
              }
            ]
          }
        ]
      },
      {
        BASE_URL: 'v3.0', // 二级目录
        INDEX_HTML: 'mod9', // 默认页（自动改名为index.html）
        CONTEXT_DIRECTORY: [ // 目录树结构（上接BASE_URL或DOMAIN）
          'mod10',
          'mod11',
          {
            'user': [
              'mod12',
              'mod13'
            ],
            'order': [
              'mod14',
              {
                'comment': [
                  'mod15',
                  'mod16'
                ]
              }
            ]
          }
        ]
      }
    ]
  }