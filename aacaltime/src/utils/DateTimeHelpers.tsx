export function GetHebrewDateAsStringFromUTC(): string {
    const myDate: Date = new Date();
    console.log("local system gregorian date and time is =" + myDate);
    console.log("Month: " + myDate.getUTCFullYear() + "-" + myDate.getUTCMonth() + "-" + myDate.getUTCDay());
    console.log("Month: " + myDate.getUTCFullYear() + "-" + myDate.getUTCMonth() + "-" + myDate.getUTCDay());
    return '12th of the 3rd Month (Nisan)';
}