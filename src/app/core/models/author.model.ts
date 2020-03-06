export interface IAuthor {
  id: number; // уникальный id, можно сделать string, тогда их надо генерировать 
  firstName: string;// имя
  middleName: string; // отчество
  lastName: string; // фамилия
  avatarImage: string;
  birthday: string; // data в виде чисел
  death?: string;
  biography: IEvent[]; // каждое событие отображается в timeline
  workList: IEvent[];
  galleryImages?: string[]; // можно оставить только ссылки на фото
  galleryVideo?: string[];
  mapPlace?: IMark[];
}
// метки на карте
export interface IMark {
  latitude: string;
  longitude: string;
  title: string; // место с описанием как оно связано с автором
}

// единая структура для биографии и работ
export interface IEvent {
  firstDate: string;
  lastDate?: string; // для работ будет пустое
  nameWork: string;  
}
