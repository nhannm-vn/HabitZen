export declare function toDateKey(date: Date, timezone: string): string;
export declare function parseDateKey(dateKey: string): Date;
export declare function addDays(dateKey: string, days: number): string;
export declare function getIsoWeekday(dateKey: string): number;
export declare function getDayOfMonth(dateKey: string): number;
export declare function dateKeyRange(from: string, to: string): string[];
