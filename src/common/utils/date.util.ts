/**
 * Tiện ích xử lý ngày theo múi giờ người dùng.
 * HabitLog lưu theo ngày (DATE), không theo giờ — cần thống nhất dateKey YYYY-MM-DD.
 */

/** Trả về chuỗi ngày YYYY-MM-DD theo timezone IANA (vd: Asia/Ho_Chi_Minh) */
export function toDateKey(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/** Parse dateKey về Date UTC 00:00 — dùng so sánh và cộng ngày */
export function parseDateKey(dateKey: string): Date {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

/** Cộng/trừ số ngày trên dateKey, trả dateKey mới */
export function addDays(dateKey: string, days: number): string {
  const d = parseDateKey(dateKey);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/** Thứ trong tuần kiểu ISO: 1 = Thứ 2, ..., 7 = Chủ nhật */
export function getIsoWeekday(dateKey: string): number {
  const d = parseDateKey(dateKey);
  const day = d.getUTCDay();
  return day === 0 ? 7 : day;
}

/** Ngày trong tháng (1–31) */
export function getDayOfMonth(dateKey: string): number {
  return parseDateKey(dateKey).getUTCDate();
}

/** Sinh danh sách dateKey liên tiếp từ `from` đến `to` (bao gồm hai đầu) */
export function dateKeyRange(from: string, to: string): string[] {
  const keys: string[] = [];
  let current = from;
  while (current <= to) {
    keys.push(current);
    current = addDays(current, 1);
  }
  return keys;
}
