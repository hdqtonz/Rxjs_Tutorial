import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('add') addButton!: ElementRef;
  constructor(private designUtilty: DesignUtilityService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addButton.nativeElement, 'click').subscribe((res) => {
      let data = 'Video ' + count++;
      this.designUtilty.print(data, 'elContainer');
      this.designUtilty.print(data, 'elContainer2');
    });
  }
}
