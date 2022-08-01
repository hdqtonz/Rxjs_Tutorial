import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit, OnDestroy {
  tachStatus: any;
  tachStatus2: any;
  subTwo!: Subscription;
  names: any;
  nameStatus: any;
  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // Ex - 01 - (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 2000);
      setTimeout(() => {
        observer.next('NodeJs');
      }, 4000);
      setTimeout(() => {
        observer.next('MongoDb');
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('Html and css');
        observer.error(new Error('Limit Exceed'));
      }, 8000);
      setTimeout(() => {
        observer.next('JavaScript');
      }, 10000);
    });
    cusObs1.subscribe(
      (res: any) => {
        this.designUtility.print(res, 'elContainer');
        // console.log(res);
      },
      (err: any) => {
        this.tachStatus = 'error';
      },
      () => {
        this.tachStatus = 'complete';
      }
    );

    // Ex - 02 - (Custom Interval)
    const Arr2 = ['Angular', 'JavaScript', 'HTML', 'css', 'ReactJs'];
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);

        if (count >= 2) {
          observer.error('Error Emit');
        }

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.subTwo = cusObs2.subscribe(
      (res: any) => {
        // console.log(res);
        this.designUtility.print(res, 'elContainer3');
      },
      (err: any) => {
        this.tachStatus2 = 'error';
      },
      () => {
        this.tachStatus2 = 'complete';
      }
    );

    // Ex - 03 - (Random Names)
    const Arr3 = [
      'Hiten',
      'Kashyap',
      'Brijesh',
      'Parth',
      'Vibha',
      'Yogita',
      'Rakshit',
    ];
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);

        if (count >= 3) {
          observer.error('Error Emit');
        }

        if (count >= 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    cusObs3.subscribe(
      (res: any) => {
        // console.log(res);
        this.names = res;
      },
      (err: any) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'complete';
      }
    );
  }

  ngOnDestroy(): void {
    this.subTwo.unsubscribe();
  }
}
