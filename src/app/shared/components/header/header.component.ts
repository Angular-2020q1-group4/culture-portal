import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: '/main', label: 'label.main' },
    { path: '/photographers', label: 'label.photographers' },
    { path: '/about', label: 'label.about' }
  ];
  activeLink = this.navLinks[0];

  constructor(private router: Router, public translate: TranslateService) {
    translate.addLangs(['RU', 'BY', 'EN']);
    translate.setDefaultLang('RU');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/RU|BY|EN/) ? browserLang : 'RU');
  }

  ngOnInit(): void {}

  public onClick(link: string) {
    this.router.navigateByUrl(`/${link}`);
  }
}
