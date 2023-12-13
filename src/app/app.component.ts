import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { FullCalendar } from "primeng/fullcalendar";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild("fc") fc: FullCalendar;

  gotoDate(date = new Date()) {
    this.fc.getCalendar().contentEl;
    this.fc.calendar.gotoDate(date);
  }

  ngAfterViewInit() {
    this.fc.getCalendar().agendaDay;
    console.log(this.fc.calendar);
  }

  count = 0;
  events = [];
  options = {
    themeSystem: "bootstrap4",
    defaultDate: "2017-02-01",

    header: {
      left: "prev,next",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    dateClick: e => {
      console.log(e);
    }
  };

  ngOnInit() {
    console.log(this.fc._events);
    this.events = [
      {
        id: 1,
        title: "All Day Event",
        start: "2017-02-01"
      },
      {
        id: 2,
        title: "Long Event",
        start: "2017-02-07",
        end: "2017-02-10"
      },
      {
        id: 3,
        title: "Repeating Event",
        start: "2017-02-09T16:00:00"
      },
      {
        id: 4,
        title: "Repeating Event",
        start: "2017-02-16T16:00:00"
      },
      {
        id: 5,
        title: "Conference",
        start: "2017-02-11",
        end: "2017-02-13"
      },
      {
        id: 6,
        title: "PrimeNg",
        start: "2017-02-12T10:30:00",
        end: "2017-02-12T12:30:00",
        color: "red",
        url: "https://primefaces.org/primeng/showcase/#/fullcalendar"
      },
      {
        id: 7,
        title: "Lunch",
        start: "2017-02-12T12:00:00",
        color: "yellow",
        textColor: "black"
      },
      {
        id: 8,
        title: "Meeting",
        start: "2017-02-12T14:30:00",
        color: "Green"
      },
      {
        id: 9,
        title: "Happy Hour",
        start: "2017-02-12T17:30:00",
        color: "blue"
      },
      {
        id: 10,
        title: "Dinner",
        start: "2017-02-12T20:00:00"
      },
      {
        id: 11,
        title: "Birthday Party",
        start: "2017-02-13T07:00:00"
      },
      {
        id: 12,
        title: "Click for Google",
        url: "https://google.com/",
        start: "2017-02-28"
      }
    ];
  }

  click() {
    this.count++;
  }
}
