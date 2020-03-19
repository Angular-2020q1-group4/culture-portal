import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleguide-page',
  templateUrl: './styleguide-page.component.html',
  styleUrls: ['./styleguide-page.component.scss']
})
export class StyleguidePageComponent implements OnInit {
  public author = {
    snippet: {
      lastName: 'Card Title',
      birthday: '03.02.2020',
      dayOfDeath: '03.15.2020',
      birthplace: 'Card Subtitle',
      avatarImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aliaksandr_Aliakseyeu.jpg/274px-Aliaksandr_Aliakseyeu.jpg'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
