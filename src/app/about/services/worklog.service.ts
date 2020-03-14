import { Injectable } from '@angular/core';
import { WorklogModel } from '@about/models/worklog.model';
import { WorklogData } from '@about/data/worklog-ru';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  worklogData: WorklogModel = WorklogData;

  constructor() {}

  getWorklogData() {
    return this.worklogData;
  }
}
