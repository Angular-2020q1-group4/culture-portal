import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icon = '/assets/camera.svg';

  navLinks = [
    { path: '/main', label: 'interface.labels.main' },
    { path: '/photographers', label: 'interface.labels.photographers' },
    { path: '/about', label: 'interface.labels.about' }
  ];

  constructor(private router: Router, public translate: TranslateService) {
    translate.addLangs(['ru', 'be', 'en']);
    translate.setDefaultLang('ru');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/ru|be|en/) ? browserLang : 'ru');
  }

  ngOnInit(): void {}

  public onClick(link: string) {
    this.router.navigate([`${link}`]);
  }
}
