import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  rendomNames = ['Hiten', 'Mayur', 'Vimal', 'Kalu', 'Ronit', 'Jigger'];
  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    //------- Ex - 01 Take ---------//

    const source = interval(1000);

    const nameSource = from(this.rendomNames);

    nameSource.pipe(take(5)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer');
    });

    //------- Ex - 02 takeLast ---------//
    nameSource.pipe(takeLast(3)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer1');
    });

    //--------- Ex - 03 TakeUntil --------//

    // let condtion1 = timer(6000);
    let condtion2 = fromEvent(document, 'click');

    source
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condtion2)
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer2');
      });
  }
}
