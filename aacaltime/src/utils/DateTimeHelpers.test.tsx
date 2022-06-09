import {GetCorrectedGregorianDateAsString} from "./DateTimeHelpers";

test('renders learn react link', () => {
    expect(GetCorrectedGregorianDateAsString(new Date('2022-06-09'))).toMatch('2022-06-09');
});