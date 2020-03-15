import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { TeamMember } from '@about/models';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private translateService: TranslateService) {}

  getTeamMembers(): Observable<TeamMember[]> {
    return this.translateService
      .stream('team')
      .pipe(filter(team => typeof team !== 'string'));
  }
}
