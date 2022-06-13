export function GetCorrectedGregorianDateAsString(myDate: Date): string {
    const realMonth: number = myDate.getUTCMonth() + 1;
    const dayDate: number = myDate.getUTCDate();
    const realMonthWithLeadingZero: string = (realMonth < 10) ? '0' + realMonth : String(realMonth);
    const realDayWithLeadingZero: string = (dayDate < 10) ? '0' + dayDate : String(dayDate);
    console.log(myDate.getUTCFullYear().toString() + "-" + realMonthWithLeadingZero + "-" + realDayWithLeadingZero);
    return myDate.getUTCFullYear().toString() + "-" + realMonthWithLeadingZero + "-" + realDayWithLeadingZero;
}