import { Component, OnInit, Input } from '@angular/core';
import Slot from 'src/app/models/slot.model';

@Component({
  selector: 'adr-slot-picker',
  templateUrl: './slot-picker.component.html',
  styleUrls: ['./slot-picker.component.scss']
})
export class SlotPickerComponent implements OnInit {

  @Input()
  slots: Slot[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
