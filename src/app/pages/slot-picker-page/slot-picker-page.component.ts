import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotService } from 'src/app/services/slot.service';
import Slot from 'src/app/models/slot.model';

@Component({
  selector: 'adr-slot-picker-page',
  templateUrl: './slot-picker-page.component.html',
  styleUrls: ['./slot-picker-page.component.scss']
})
export class SlotPickerPageComponent implements OnInit {

  date: string;
  slots$: Promise<Slot[]>;

  constructor(private router: Router, private slotService: SlotService) { 
    const navigation = this.router.getCurrentNavigation();
    const date = navigation.extras.state?.date;

    if (!date) {
      this.router.navigateByUrl('/');
    }

    this.date = date;
  }

  ngOnInit(): void {
    this.slots$ = this.slotService.getSlotsForDate(this.date);
  }

}
