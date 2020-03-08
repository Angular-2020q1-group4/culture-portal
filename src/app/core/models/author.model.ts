export interface Author {
  id: number; // уникальный id, можно сделать string, тогда их надо генерировать
  firstName: string; // имя
  middleName: string; // отчество
  lastName: string; // фамилия
  avatarImage: string;
  birthday: string; // data в виде чисел
  death?: string;
  biography: Event[]; // каждое событие отображается в timeline
  workList: Event[];
  galleryImages?: string[]; // можно оставить только ссылки на фото
  galleryVideo?: string[];
  mapPlace?: Mark[];
}
// метки на карте
export interface Mark {
  latitude: number;
  longitude: number;
  title: string; // место с описанием как оно связано с автором
}

// единая структура для биографии и работ
export interface Event {
  firstDate: string;
  lastDate?: string; // для работ будет пустое
  nameWork: string;
}
