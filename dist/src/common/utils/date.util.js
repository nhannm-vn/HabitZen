"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDateKey = toDateKey;
exports.parseDateKey = parseDateKey;
exports.addDays = addDays;
exports.getIsoWeekday = getIsoWeekday;
exports.getDayOfMonth = getDayOfMonth;
exports.dateKeyRange = dateKeyRange;
function toDateKey(date, timezone) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
}
function parseDateKey(dateKey) {
    const [y, m, d] = dateKey.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, d));
}
function addDays(dateKey, days) {
    const d = parseDateKey(dateKey);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
}
function getIsoWeekday(dateKey) {
    const d = parseDateKey(dateKey);
    const day = d.getUTCDay();
    return day === 0 ? 7 : day;
}
function getDayOfMonth(dateKey) {
    return parseDateKey(dateKey).getUTCDate();
}
function dateKeyRange(from, to) {
    const keys = [];
    let current = from;
    while (current <= to) {
        keys.push(current);
        current = addDays(current, 1);
    }
    return keys;
}
//# sourceMappingURL=date.util.js.map