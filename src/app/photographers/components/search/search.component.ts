import { Component, OnInit } from '@angular/core';

import { SearchService } from '@shared/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onInput(searchString: string) {
    this.searchService.setSearchWord(searchString);
  }
}
