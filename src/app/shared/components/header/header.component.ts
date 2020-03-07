import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: '/photographers', label: 'Фотографы Беларуси' },
    { path: '/main', label: 'Главная' },
    { path: '/about', label: 'О проекте' }
  ];
  activeLink = this.navLinks[0];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onClick(link: string) {
    this.router.navigateByUrl(`/${link}`);
  }
}
