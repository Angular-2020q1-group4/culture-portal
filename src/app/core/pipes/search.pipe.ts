import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '@core/models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor() {}
  transform(cards: Author[], searchString: string) {
    if (!searchString.trim()) {
      return cards;
    }
    return cards.filter(card => {
      return (
        card.snippet.lastName
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1 ||
        card.snippet.birthplace
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1 ||
        card.snippet.birthday
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1
      );
    });
  }
}
