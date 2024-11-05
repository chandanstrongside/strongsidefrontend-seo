interface IPracticeSchedule {
    id: string;
    scheduleDate: Date;
    startTime: string;
    endTime: string;
    durationHour: number;
    durationMinute: number;
    description: string;
    scheduleDetails: ScheduleDetails[];
}
export class PracticeSchedule implements IPracticeSchedule {
    id: string;
    scheduleDate: Date;
    startTime: string;
    endTime: string;
    durationHour: number;
    durationMinute: number;
    description: string;
    scheduleDetails: ScheduleDetails[];   
    newScheduleDate?: string;
    constructor(practiceSchedule?: IPracticeSchedule) {
        this.id = practiceSchedule && practiceSchedule.id || "";
        this.scheduleDate = practiceSchedule && practiceSchedule.scheduleDate || new Date();
        this.startTime = practiceSchedule && practiceSchedule.startTime || "";
        this.endTime = practiceSchedule && practiceSchedule.endTime || "";
        this.durationHour = practiceSchedule && practiceSchedule.durationHour || 0;
        this.durationMinute = practiceSchedule && practiceSchedule.durationMinute || 0;
        this.description = practiceSchedule && practiceSchedule.description || "";
        this.scheduleDetails = practiceSchedule && practiceSchedule.scheduleDetails || [];
    }
}

export class ScheduleDetails {
    id?: string;
    name?: string;
    startTime?: string;
    endTime?: string;
    duration?:number;
    sequence?: number;
}
