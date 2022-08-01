import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  sourceSub!: Subscription;
  users = [
    { name: 'Hiten', skill: 'Angular' },
    { name: 'Kashyap', skill: 'Angular' },
    { name: 'Brijesh', skill: 'ReactJs' },
    { name: 'Parth', skill: 'NodeJs' },
  ];
  constructor() {}

  ngOnInit(): void {
    // Ex: 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      // console.log(res);
    });

    // Ex:- 02
    const sourceTwo = from(this.users);
    sourceTwo.pipe(toArray()).subscribe((res) => {
      // console.log(res);
    });

    // Ex:- 03

    const sourceThree = of('hiten', 'kashyap', 'piyush', 'brijesh');
    sourceThree.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
