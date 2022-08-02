import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private designUtility: DesignUtilityService) {}
  myColor!: string;
  ngOnInit(): void {
    const sourse = interval(1500);

    //-------- Ex -01 --------//
    const Arr = [
      'Hiten',
      'Brijesh',
      'Keshyap',
      'Vibha',
      'Jiger',
      'Yogita',
      'Meera',
    ];
    let obsSubscription: Subscription;

    obsSubscription = sourse
      .pipe(
        tap((res) => {
          // console.log('tap before ', res);
          if (res == Arr.length) {
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => {
          return Arr[res];
        }),
        tap((res) => {
          // console.log('tap after ', res);
        })
      )
      .subscribe((res) => {
        // console.log(res);
        this.designUtility.print(res, 'elContainer');
      });

    //-------- Ex - 02 --------//

    const Colors = [
      'Red',
      'Green',
      'Blue',
      'Orange',
      'Yellow',
      'Purple',
      'Violet',
    ];

    let obsSubscription2: Subscription;

    obsSubscription2 = sourse
      .pipe(
        tap((res) => {
          this.myColor = Colors[res];
          if (res == Colors.length) {
            obsSubscription2.unsubscribe();
          }
        }),
        map((res) => {
          return Colors[res];
        }),
        tap()
      )
      .subscribe((res) => {
        console.log(res);
        this.designUtility.print(res, 'elContainer2');
      });
  }
}
