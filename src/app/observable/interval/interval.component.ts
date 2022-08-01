import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscripution!: Subscription;
  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // const bordcastVidoe = interval(1000);
    // timer(delay,interval)
    const bordcastVidoe = timer(5000, 1000);

    this.videoSubscripution = bordcastVidoe.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this.designUtility.print(this.obsMsg, 'elContainer');
      this.designUtility.print(this.obsMsg, 'elContainer2');
      this.designUtility.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.videoSubscripution.unsubscribe();
      }
    });
  }
}
