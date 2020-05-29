import { Injectable } from '@angular/core';
import Slot from '../models/slot.model';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  getSlotsForDate(date: string) {
    const slots: Slot[] = [
      {
        startTime: 13.5,
        endTime: 14.5
      },
      {
        startTime: 5.0,
        endTime: 6.0
      },
      {
        startTime: 22.5,
        endTime: 23.5
      },
      {
        startTime: 12.0,
        endTime: 13.0
      },
      {
        startTime: 20.5,
        endTime: 21.5
      },
      {
        startTime: 4.5,
        endTime: 5.5
      }
    ]

    return Promise.resolve(slots);
  }
}
