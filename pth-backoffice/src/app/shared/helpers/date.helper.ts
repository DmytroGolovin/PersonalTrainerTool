import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateHelper {
  public getDayOfWeekString(dayOfWeek: number){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[ dayOfWeek ];
  }
}
