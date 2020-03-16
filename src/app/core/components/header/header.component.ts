import { Component, OnInit } from '@angular/core';

import { LanguageSettingsService, LOCALES } from '@shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconUrl = '/assets/camera.svg';

  navLinks = [
    { path: '/main', label: 'interface.labels.main' },
    { path: '/photographers', label: 'interface.labels.photographers' },
    { path: '/about', label: 'interface.labels.about' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
