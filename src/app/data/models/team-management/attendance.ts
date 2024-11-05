interface IAttendance {
  id: string;
  userId: string;
  userName: string;
  missingPracticeDates: [];
  missingReason: string;
  leavingEarly: boolean;
  attendedToday: boolean;
  otherInformation: string;
  isApproved: boolean;
  missingDateString: string;
  shortName: string;
  createdOn: string;
  missingFrom: Date;
  missingTo: Date;
}
export class Attendance implements IAttendance {
  id: string;
  userId: string;
  userName: string;
  missingPracticeDates: [];
  missingReason: string;
  leavingEarly: boolean;
  attendedToday: boolean;
  otherInformation: string;
  isApproved: boolean;
  missingDateString: string;
  missingFrom: Date;
  missingTo: Date;
  shortName: string;
  createdOn: string;
  constructor(attendance?: IAttendance) {
    this.id = (attendance && attendance.id) || "";
    this.userId = (attendance && attendance.userId) || "";
    this.userName = (attendance && attendance.userName) || "";
    this.missingPracticeDates =
      (attendance && attendance.missingPracticeDates) || [];
    this.missingReason = (attendance && attendance.missingReason) || "";
    this.leavingEarly = (attendance && attendance.leavingEarly) || false;
    this.attendedToday = (attendance && attendance.attendedToday) || false;
    this.otherInformation = (attendance && attendance.otherInformation) || "";
    this.isApproved = (attendance && attendance.isApproved) || false;
    this.missingDateString = (attendance && attendance.missingDateString) || "";
    this.missingFrom = (attendance && attendance.missingFrom) || new Date();
    this.missingTo = (attendance && attendance.missingTo) || new Date();
    this.shortName = (attendance && attendance.shortName) || "";
    this.createdOn = (attendance && attendance.createdOn) || "";
  }
}
