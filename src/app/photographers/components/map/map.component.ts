import { Component, OnInit, Input } from '@angular/core';

import { Mark } from '@core/models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() placeMarks: Mark[];

  constructor() {}

  ngOnInit(): void {}

  calculateCenter(): [number, number] {
    const marksNum = this.placeMarks.length;
    const sum = this.placeMarks.reduce((prevMark: Mark, curMark: Mark) => {
      return {
        latitude: prevMark.latitude + curMark.latitude,
        longitude: prevMark.longitude + curMark.longitude,
        title: 'total'
      };
    });

    return [sum.latitude / marksNum, sum.longitude / marksNum];
  }

  onMarkerHover(event: any): void {
    if (event.type === 'mouseenter') {
      event.instance.options.set('preset', 'islands#nightIcon');
    }

    if (event.type === 'mouseleave') {
      event.instance.options.unset('preset');
    }
  }
}
