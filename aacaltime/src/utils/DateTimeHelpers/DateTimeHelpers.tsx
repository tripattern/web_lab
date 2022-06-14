export function GetCorrectedGregorianDateAsString(myDate: Date): string {
    const realMonth: number = myDate.getUTCMonth() + 1;
    const dayDate: number = myDate.getUTCDate();
    const realMonthWithLeadingZero: string = (realMonth < 10) ? '0' + realMonth : String(realMonth);
    const realDayWithLeadingZero: string = (dayDate < 10) ? '0' + dayDate : String(dayDate);
    return myDate.getUTCFullYear().toString() + "-" + realMonthWithLeadingZero + "-" + realDayWithLeadingZero;
}

export function GetDayNumberAsString(myDate: Date): string {
    const bibDayNumber: number = myDate.getUTCDay() + 1;
    return '0' + String(bibDayNumber);
}