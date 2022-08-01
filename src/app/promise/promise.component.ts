import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promiseValue!: any;
  constructor() {}

  dell: object = {
    brand: 'Dell',
    HardDisk: '2 TB',
    color: 'Black',
  };

  hp: object = {
    brand: 'HP',
    HardDisk: '1 TB',
    color: 'Silver',
  };

  NotAvil = {
    brand: 'Not Aveliable',
    status: 'Failed',
  };

  dellAvaliable() {
    return false;
  }

  HpAvaliable() {
    return true;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolve');
      // reject('Promise is rejected');

      if (this.dellAvaliable()) {
        setTimeout(() => {
          // resolve('Dell is purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.HpAvaliable()) {
        setTimeout(() => {
          // resolve('HP is purchased');
          resolve(this.hp);
        }, 3000);
      } else {
        setTimeout(() => {
          reject(this.NotAvil);
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code =>', res);
        this.promiseValue = res;
      })
      .catch((e) => {
        console.log('Catch code =>', e);
        this.promiseValue = e;
      });
  }
}
