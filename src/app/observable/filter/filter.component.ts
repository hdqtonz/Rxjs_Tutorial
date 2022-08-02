import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dataArray = [
    { id: 1, name: 'Hiten', gender: 'Male' },
    { id: 2, name: 'Kashyap', gender: 'Male' },
    { id: 3, name: 'Vibha', gender: 'Female' },
    { id: 4, name: 'Brijesh', gender: 'Male' },
    { id: 5, name: 'Vila', gender: 'Female' },
    { id: 6, name: 'Meera', gender: 'Female' },
    { id: 7, name: 'Hiren', gender: 'Male' },
    { id: 8, name: 'Parth', gender: 'Male' },
    { id: 9, name: 'Yogita', gender: 'Female' },
    { id: 10, name: 'Reqsit', gender: 'Male' },
    { id: 11, name: 'Sakti', gender: 'Male' },
    { id: 12, name: 'Jignes', gender: 'Male' },
  ];

  data: any;
  dataTwo: any;
  dataThree: any;

  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArray);

    //------Ex - 01 (Filter by length) -------//

    source
      .pipe(
        filter((membar) => {
          return membar.name.length == 5;
        }),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.data = res;
      });

    //------Ex - 02 (Filter by Gender) -------//

    source
      .pipe(
        filter((membar) => {
          return membar.gender == 'Female';
        }),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.dataTwo = res;
      });

    //------Ex - 03 (Filter by By Nth Item ) -------//

    source
      .pipe(
        filter((membar) => {
          return membar.id <= 6;
        }),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.dataThree = res;
      });
  }
}
