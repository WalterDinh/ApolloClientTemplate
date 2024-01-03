import { Dayjs } from 'dayjs';
import { DateTimeFormat } from './constants';

export default class TimeUtils {
    public static formatCustomOptionDateTime = (date: Dayjs) => {
        return date.format(DateTimeFormat.FullDateTime);
    };

    public static formatCustomOptionDate = (date: Dayjs) => {
        return date.format(DateTimeFormat.FullDate);
    };

    public static formatCustomOptionTime = (date: Dayjs) => {
        return date.format(DateTimeFormat.Time);
    };
}
