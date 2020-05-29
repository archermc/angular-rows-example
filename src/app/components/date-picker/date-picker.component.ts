import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, Navigation } from '@angular/router';

@Component({
  selector: 'adr-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  loading: boolean;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loading = false;
  }

  onClick(date) {
    event.stopPropagation();
    this.loading = true;
    setTimeout(() => {}, 500);
    this.router.navigateByUrl('slots', { state: { date: date}} as NavigationExtras);
  }
}
