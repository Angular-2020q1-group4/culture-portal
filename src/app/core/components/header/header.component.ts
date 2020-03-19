import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  iconUrl = '/assets/camera.svg';

  navLinks = [
    { path: '/main', label: 'interface.labels.main' },
    { path: '/photographers', label: 'interface.labels.photographers' },
    { path: '/about', label: 'interface.labels.about' }
  ];
}
