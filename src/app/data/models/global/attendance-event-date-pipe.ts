import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attendanceEventDate'
})
export class AttendanceEventDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${month} ${this.addOrdinalSuffix(day)}`;
  }

  private addOrdinalSuffix(day: number): string {
    if (day === 1 || day === 21 || day === 31) {
      return day + 'st';
    } else if (day === 2 || day === 22) {
      return day + 'nd';
    } else if (day === 3 || day === 23) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }
}

export interface CalendarAttendanceEvent<MetaType = any> {
  id?: string | number;
  start: Date;
  end?: Date;
  title: string;
  color?: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: MetaType;
  eventType?: string;
  eventId?: string;
}

export interface EventColor {
  primary: string;
  secondary: string;
}
export interface EventAction {
  id?: string | number;
  label?: string;
  cssClass?: string;
  a11yLabel?: string;
  onClick({ event, sourceEvent, }: {
      event: CalendarAttendanceEvent;
      sourceEvent: MouseEvent | KeyboardEvent;
  }): any;
}

