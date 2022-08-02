import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;

  constructor() {}

  users = [
    {
      name: 'Hiten',
      skills: 'MEAN',
      job: { title: 'Full Stack Developer', exp: '2 Years' },
    },
    {
      name: 'Kashyap',
      skills: 'Angular',
      job: { title: 'Front End Developer', exp: '1 Years' },
    },
    {
      name: 'Brijesh',
      skills: 'MERN',
      job: { title: 'Full Stack Developer', exp: '8 Years' },
    },
    {
      name: 'Vibha',
      skills: 'Laravel',
      job: { title: 'Backend Developer', exp: '3 Years' },
    },
  ];

  ngOnInit(): void {
    //---- Ex - 01 ----//
    from(this.users)
      .pipe(
        // map((data) => {
        //   return data.name;
        // }),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.data = res;
      });

    //---- Ex - 02 ----//
    from(this.users)
      .pipe(
        // map((data) => {
        //   return data.name;
        // }),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
  }
}
