export interface Author {
  id: string;
  snippet: Snippet;
  biography: Event[];
  workList: Event[];
  galleryImages: string[];
  galleryVideo: string[];
  mapPlace: Mark[];
}

export interface Snippet {
  firstName: string;
  middleName: string;
  lastName: string;
  avatarImage: string;
  birthplace: string;
  birthday: string;
  dayOfDeath: string;
  shortDescription: string;
}

export interface Event {
  firstDate: string;
  lastDate: string;
  title: string;
}

export interface Mark {
  latitude: number;
  longitude: number;
  title: string;
}
