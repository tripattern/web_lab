import {GetCorrectedGregorianDateAsString, GetDayNumberAsString} from "./DateTimeHelpers";

test('it should convert the entered date into a string', () => {
    expect(GetCorrectedGregorianDateAsString(new Date('2022-06-09'))).toMatch('2022-06-09');
});

test('it should sunday as the first day of the week', () => {
    expect(GetDayNumberAsString(new Date('2022-06-19'))).toMatch('01');
});