import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  @Output() public searchWord: EventEmitter<string> = new EventEmitter();

  keyWord = '';

  constructor() {}

  public setSearchWord(value: string): void {
    this.keyWord = value;
    this.searchWord.emit(this.keyWord);
  }
}
