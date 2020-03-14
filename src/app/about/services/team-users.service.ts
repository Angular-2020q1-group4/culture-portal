import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TeamMember } from '@about/models/worklog.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamUsersService {
  constructor(private translateService: TranslateService) {}

  getTeamMembers(): Observable<TeamMember[]> {
    return this.translateService
      .stream('team')
      .pipe(filter(value => typeof value !== 'string'));
  }
}
