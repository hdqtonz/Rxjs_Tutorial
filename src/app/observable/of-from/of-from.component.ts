import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    //-----Of Examples Start------//
    // EX - 01
    const obs1 = of('Hiten', 'Kashyap', 'Brijesh');

    obs1.subscribe((res) => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer');
    });

    // EX - 02
    const obs2 = of({ a: 'Hiten', b: 'Kumar', c: 'Dalsaniya' });

    obs2.subscribe((res) => {
      this.obsMsg = res;
      // console.log('obsMsge => ', res);
    });
    //-----Of Examples End------//

    //-----From Examples Start-------//
    // EX - 01 From - Array
    const obs3 = from(['Angular', 'NodeJs', 'MongoDb']);
    obs3.subscribe((res) => {
      // console.log(res);
      this.designUtility.print(res, 'elContainer4');
    });

    // EX - 02 From - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe((res) => {
      // console.log('From Promise =>', res);
      this.designUtility.print(res, 'elContainer5');
    });

    // EX - 02 From - String
    const obs5 = from('Welcome to Qtonz');
    obs5.subscribe((res) => {
      // console.log(`From String =>`, res);
      this.designUtility.print(res, 'elContainer6');
    });
  }
}
