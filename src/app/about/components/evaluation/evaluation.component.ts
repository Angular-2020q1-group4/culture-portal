import { Component, OnInit } from '@angular/core';
import { Scope } from '@about/models/self-evalucation.model';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  totalScore = 0;

  checked = true;

  minScope: Scope[] = [
    {
      done: true,
      point: 10,
      label: `10 Main page + page with a list of authors + author's page (only pages with content without widgets)`
    },
    { point: 10, label: `10 Page with team members + page with worklog` },
    { point: 10, label: `10 Page with list of authors contains search widget` },
    { point: 20, label: `20 Portal has two languages` }
  ];

  normalScope: Scope[] = [
    { point: 20, label: `20 Portal has page with styleguide` },
    { point: 10, label: `10 Mobile version is okey` },
    { point: 10, label: `10 Ipad/tablet version is okey` },
    { point: 10, label: `10 Author's page contains timeline` },
    { point: 10, label: `10 Author's page contains video overlay` },
    { point: 20, label: `20 Author's page contains photo gallery` },
    { point: 10, label: `10 Author's page contains map (geowidget)` },
    {
      point: 20,
      label: `from 0 to 20 Design (typography, icons, colors, links + buttons + input, ui components are styled)`
    },
    { point: 20, label: `20 Material-ui / bootstrap is used` },
    { point: 10, label: `10 Portal has third language` }
  ];

  extraScope: Scope[] = [
    { point: 10, label: `10 Confidence of the project presentation` },
    { point: 10, label: `10 Project is made using scully` },
    {
      point: 10,
      label: `10 Contentful / netlify cms / other cms is used for content management`
    },
    { point: 20, label: `20 Animations / special effects like paralax` },
    { point: 20, label: `up to 20 Outstanding design` },
    {
      point: 20,
      label: `20 Storybook/angularplayground/compodoc/
                        other angulaer styleguide/documentation tool usage for the page with styles`
    }
  ];

  fines: Scope[] = [
    {
      point: -50,
      label: `-50 if there are less than 3 commits from each active team member. Everyone should merge their own PRs`
    },
    {
      point: -50,
      label: `up to -50 points for violations stage2-tasks-requirements`
    },
    { point: -40, label: `-40 if there is no worklog for team` },
    { point: -20, label: `-20 too primitive (ugly for 2020) design / UX` }
  ];

  constructor() {}

  ngOnInit(): void {}

  onToggle(val: number, event) {
    const checked = !event.path[1].control.checked;
    if (checked) {
      this.totalScore += val;
    } else {
      this.totalScore -= val;
    }
  }
}
