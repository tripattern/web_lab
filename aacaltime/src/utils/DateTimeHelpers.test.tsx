import {GetHebrewDateAsStringFromUTC} from "./DateTimeHelpers";

test('renders learn react link', () => {
    expect(GetHebrewDateAsStringFromUTC()).toMatch('12th of the 3rd Month (Nisan)');
});