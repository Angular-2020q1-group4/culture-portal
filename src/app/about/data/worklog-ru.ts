import { WorklogModel } from '@about/models/worklog.model';

export const WorklogData: WorklogModel = {
  worklogHeadline: 'Журнал',
  worklogMembers: [
    {
      avatar:
        'https://avatars0.githubusercontent.com/u/39223580?s=400&u=c6a5e520e37b99901880f86cf41d8f1f07574842&v=4',
      name: 'Павел Гайдукевич',
      role: 'Front-End разработчик',
      worklog: [
        {
          task: 'Страница WorkLog',
          spent: '10h'
        },
        {
          task: 'todo',
          spent: '1h'
        },
        {
          task: 'todo',
          spent: '1h'
        }
      ]
    },
    {
      avatar:
        'https://avatars3.githubusercontent.com/u/43645356?s=400&u=05de8f4f60c2799f0278598a34294ad309b9f5b7&v=4',
      name: 'Владимир Тягунов',
      role: 'Front-End разработчик',
      worklog: [
        {
          task: 'todo',
          spent: '1h'
        },
        {
          task: 'todo',
          spent: '1h'
        },
        {
          task: 'todo',
          spent: '1h'
        },
        {
          task: 'todo',
          spent: '1h'
        }
      ]
    }
  ],
  difficultiesHeadline: 'Возникшие трудности',
  difficulties: ['Первая трудность', 'Вторая трудность', 'Третья трудность'],
  evaluationHeadline: 'Самооценка',
  evaluationScore: 'Итого:',
  evaluation: [
    {
      scopeName: 'Минимальные требования',
      scope: [
        {
          done: true,
          point: 10,
          label:
            '10 Главная страница + список авторов + авторская страница (только страницы с контентом без виджетов)'
        },
        {
          done: true,
          point: 10,
          label: '10 Страница с членами команды + страница с worklog'
        },
        {
          done: true,
          point: 10,
          label: '10 Страница со списком авторов содержит виджет поиска'
        },
        {
          done: true,
          point: 20,
          label: '20 Портал имеет два языка'
        }
      ]
    },
    {
      scopeName: 'Стандартные требования',
      scope: [
        {
          done: false,
          point: 20,
          label: '20 Портал имеет страницу стайл-гайда'
        },
        {
          done: true,
          point: 10,
          label: '10 Мобильная версия пртала'
        },
        {
          done: true,
          point: 10,
          label: '10 Версия портала для планшетных ПК/iPad'
        },
        {
          done: true,
          point: 10,
          label: '10 Страница авторов содержит timeline'
        },
        {
          done: true,
          point: 10,
          label: '10 Страница авторов содержит видео'
        },
        {
          done: true,
          point: 20,
          label: '20 Страница авторов содержит фотогалерею'
        },
        {
          done: true,
          point: 10,
          label: '10 Страница авторов содержит карту (geowidget)'
        },
        {
          done: true,
          point: 20,
          label:
            'от 0 до 20 Дизайн (типографика, иконки, цвета, ссылки + кнопки + ввод, компоненты пользовательского интерфейса)'
        },
        {
          done: true,
          point: 20,
          label: '20 Используется Material-ui / bootstrap'
        },
        {
          done: true,
          point: 10,
          label: '10 Портал имеет 3 языка'
        }
      ]
    },
    {
      scopeName: 'Требования повышенной сложности',
      scope: [
        {
          done: false,
          point: 10,
          label: '10 Уверенность в презентации проекта'
        },
        {
          done: false,
          point: 10,
          label: '10 Проект выполнен с использованием Скалли'
        },
        {
          done: false,
          point: 10,
          label:
            '10 Contentful / netlify CMS и другие CMS используется для управления контентом'
        },
        {
          done: false,
          point: 20,
          label: '20 Анимации и специальные эффекты, такие как паралакс'
        },
        {
          done: true,
          point: 20,
          label: 'до 20 выдающийся дизайн'
        },
        {
          done: true,
          point: 20,
          label:
            '20 Storybook/angularplayground/compodoc/ другие angular styleguide/documentation инструменты для страницы StyleGuide'
        }
      ]
    },
    {
      scopeName: 'Штрафы',
      scope: [
        {
          done: false,
          point: -50,
          label:
            '-50 если у каждого члена команды менее 3 коммитов. Все должны объеденить свои PRs'
        },
        {
          done: false,
          point: -50,
          label: 'до -50 очков за нарушение stage2-tasks-requirements'
        },
        {
          done: false,
          point: -40,
          label: '-40 за отсутствие страницы worklog'
        },
        {
          done: false,
          point: -20,
          label: '-20 слишком примитивный (для 2020 года) дизайн / UX'
        }
      ]
    }
  ]
};
