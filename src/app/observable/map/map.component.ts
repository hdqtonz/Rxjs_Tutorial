import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private designUtility: DesignUtilityService) {}

  subOne!: Subscription;
  subTwo!: Subscription;
  subThree!: Subscription;
  msgOne: any;
  msgTwo: any;
  ngOnInit(): void {
    //-------Ex - 01-------//

    const broadCastVideos = interval(1000);

    this.subOne = broadCastVideos
      .pipe(
        map((data: any) => {
          return 'Video ' + data;
        })
      )
      .subscribe((res) => {
        // console.log(res);
        this.msgOne = res;
      });

    setTimeout(() => {
      this.subOne.unsubscribe();
    }, 10000);

    //-------Ex - 02-------//

    this.subTwo = broadCastVideos
      .pipe(
        map((data) => {
          return data * 10;
        })
      )
      .subscribe((res) => {
        // console.log(res);
        this.msgTwo = res;
      });

    setTimeout(() => {
      this.subTwo.unsubscribe();
    }, 10000);

    //------- Ex - 03 -------//
    const members = from([
      {
        id: 1,
        name: 'Hiten',
      },
      {
        id: 2,
        name: 'Kashyap',
      },
      {
        id: 3,
        name: 'Brijesh',
      },
      {
        id: 4,
        name: 'Vibha',
      },
      {
        id: 5,
        name: 'Villa',
      },
      {
        id: 6,
        name: 'Meera',
      },
      {
        id: 7,
        name: 'Hiren',
      },
      {
        id: 8,
        name: 'Yogita',
      },
    ]);

    members
      .pipe(
        map((data) => {
          return data.name;
        })
      )
      .subscribe((res) => {
        this.designUtility.print(res, 'elContainer');
        // console.log(res);
      });
  }
}
