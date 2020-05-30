import { Component, OnInit, Input } from '@angular/core';
import Slot from 'src/app/models/slot.model';
import { convertDecimalToTime } from 'src/app/utils/date';

@Component({
  selector: 'adr-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input()
  slot: Slot;

  startTime: string;
  endTime: string;

  constructor() { }

  ngOnInit(): void {
    this.startTime = convertDecimalToTime(this.slot.startTime);
    this.endTime = convertDecimalToTime(this.slot.endTime);
  }

}
