import { Author } from '../models/author.model';

export const response: Author[] = Array.from({ length: 6 }, (e, i) => {
  return {
    ...author,
    id: author.id + i
  };
});

const author: Author = {
  id: 1,
  firstName: 'Алексеев',
  middleName: 'Александр',
  lastName: 'Алексеевич',
  avatarImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aliaksandr_Aliakseyeu.jpg/274px-Aliaksandr_Aliakseyeu.jpg',
  birthday: '1978-11-14',
  biography: [
    {
      firstDate: '1978-11-14',
      nameWork: 'Родился в Казани'
    },
    {
      firstDate: '1979',
      nameWork: 'Cемья переехала в Беларусь'
    },
    {
      firstDate: '2000',
      nameWork: 'Окончил факультет менеджмента БГЭУ'
    },
    {
      firstDate: '2001',
      nameWork:
        'начал работать на беларуском телевидении. Являлся ведущим и режиссёром программы «Снято!»'
    },
    {
      firstDate: '2003',
      nameWork:
        'В соавторстве с Олегом Лукашевичем реализует художественный проект «Наследие Беларуси»'
    },
    {
      firstDate: '2004',
      nameWork: 'Защитил диссертацию кандидата экономических наук'
    },
    {
      firstDate: '2005',
      nameWork:
        'Стал Лауреатом Премии Президента Республики Беларусь «За духовное возрождение»'
    },
    {
      firstDate: '2007',
      nameWork: 'Становится белорусским издателем'
    },
    {
      firstDate: '2011-05',
      nameWork:
        'Стал заместителем руководителя Национального павильона Республики Беларусь на Каннском кинофестивале'
    },
    {
      firstDate: '2012',
      nameWork:
        'Начал работать в белорусской документалистике в качестве режиссёра'
    },
    {
      firstDate: '2014',
      nameWork:
        'Окончил Белорусскую государственную академию искусств по специальности режиссёр'
    }
  ],
  workList: [
    {
      firstDate: '2003',
      nameWork:
        'Музей современного изобразительного искусства. Открытие проекта серией фотовыставок: «Храмы Беларуси», «Усадьбы и ратуши Беларуси», «Дворцы и замки Беларуси»'
    },
    {
      firstDate: '2004',
      nameWork: 'Книга-альбом «Спадчына Беларусі»'
    },
    {
      firstDate: '2004',
      nameWork:
        'Штаб-квартира ЮНЕСКО в Париже. Выставка «Наследие Беларуси» в честь 50-летия вступления Республики Беларусь в ЮНЕСКО'
    },
    {
      firstDate: '2004',
      nameWork:
        'Национальная академия Св. Цецилии в Риме, выставка в рамках Дней культуры Республики Беларусь'
    },
    {
      firstDate: '2005',
      nameWork: 'Книга-альбом «Наследие Беларуси»'
    },
    {
      firstDate: '2007',
      nameWork: 'Книга-альбом «Спадчына Беларусі.Скарбы»'
    },
    {
      firstDate: '2008',
      nameWork:
        'Дом Пушкина в Лондоне, выставка в рамках акции «Открой Беларусь»'
    },
    {
      firstDate: '2009',
      nameWork: 'Книга-альбом «Скарбы Беларусі»'
    },
    {
      firstDate: '2013',
      nameWork: 'Книга-альбом «Сокровища Беларуси»'
    },
    {
      firstDate: '2014',
      nameWork:
        'На арт-заборе парка Челюскинцев под открытым небом в Минске. Фотовыставка, состоящая из 60 фотографий'
    },
    {
      firstDate: '2015',
      nameWork: 'Книга-альбом «Спадчына Беларусі»'
    },
    {
      firstDate: '2015',
      nameWork:
        'Книга-альбом «Национальный исторический музей Республики Беларусь»'
    },
    {
      firstDate: '2015',
      nameWork: 'Книга-альбом «Несвиж. Дворцово-парковый ансамбль»'
    },
    {
      firstDate: '2017',
      nameWork:
        'Художественный проект «Спадчына Беларусі» представлен в Брюсселе, Берлине, Минске, Праге и Вене'
    },
    {
      firstDate: '2018',
      nameWork:
        'Художественный проект «Спадчына Беларусі» представлен в Будапеште'
    }
  ],
  galleryImages: [
    'https://img.tyt.by/720x720s/n/kultura/05/6/alex_kusturitsa_t_1_.jpg',
    'https://img.tyt.by/720x720s/n/kultura/02/4/alex_waida_t_1_.jpg',
    'http://xn--80aal0bhl9b6a.xn--90ais/assets/album_spadchyna_belarusi.png',
    'http://xn--80aal0bhl9b6a.xn--90ais/assets/aliakseyeu_lukashevich_2015.jpg',
    'http://www.ctv.by/sites/default/files/inarticle/vystavka_2_13.jpg',
    'http://www.ctv.by/sites/default/files/imcefiles/art_zabor_2017_2.png',
    'http://www.ctv.by/sites/default/files/inarticle/spadchyna_belarusi6.jpg'
  ],
  galleryVideo: [
    'https://www.youtube.com/watch?v=t9lbUWcN0O8',
    'https://www.youtube.com/watch?v=S0wNJkC9Wgo&feature'
  ],
  mapPlace: [
    {
      latitude: 55.7823547,
      longitude: 49.1242266,
      title: 'Казань. Родился'
    },
    {
      latitude: 53.902334,
      longitude: 27.5618791,
      title: 'Минск. Жизнь и творчество'
    },
    {
      latitude: 48.8588897,
      longitude: 2.32004103,
      title: 'Париж. Выставка «Наследие Беларуси»'
    },
    {
      latitude: 51.5073219,
      longitude: -0.1276474,
      title: 'Лондон. Выставка в рамках акции «Открой Беларусь»'
    }
  ]
};
