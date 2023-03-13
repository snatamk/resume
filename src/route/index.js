// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Mariya',
    lastname: 'Romashka',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'м.Одеса Савіньйон-1',
}

var footer = {
  social: {
    email: {
      text: 'mariya@mail.com',
      href: 'mailto:mariya@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mariya-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
              experience in development. Whenever I start to
              work on a new project I learn the domain and try
              to understand the idea of the project. Good team
              player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from
            different platforms ( odds ) and sport statistics
            ( tournament position, goals etc), analyzing by
            simple mathematics models and preparing
            probability for such events like: money line -
            first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | skills',
    },

    header,

    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlbars', point: 9, isTop: true },
        { name: 'VS Code & NPM', point: 9, isTop: false },
        { name: 'Git & Terminal', point: 8 },
        { name: 'React.js', point: 0 },
        { name: 'PHP', point: null },
      ],
      hobbies: [
        { name: 'Петриківський розпис', isMain: true },
        { name: 'Теніс', isMain: false },
        { name: 'Велоспорт', isMain: true },
      ],
    },

    footer,
  })
})
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | education',
    },

    header,

    main: {
      education: [
        {
          name: 'Державний університет телекомунікацій',
          isEnd: true,
        },
        {
          name: 'Київський міжнародний університет',
          isEnd: true,
        },
        {
          name: 'Київський університет імені Бориса Грінченка',
          isEnd: false,
        },
        {
          name: 'Київський національний лінгвістичний університет',
          isEnd: false,
        },
      ],
      certificates: [
        { name: 'dfgh', id: 10 },
        { name: 'cvde', id: 8 },
        { name: 'vbdf', id: 9 },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'resume',
              url: 'https://resume.com.ua/',
              about: 'apple',
              stackAmount: 2,
              awardAmount: 3,
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Handlebars is largely compatible with Mustache templates..',
                },
                {
                  name: 'This makes the template execution faster than most other template engines.',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
