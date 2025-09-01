export const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export function getStartDate(input: string | Date): Date {
    const d = new Date(input);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function startOfISOWeek(d: Date): Date {
    const tmp = new Date(d);
    tmp.setHours(0, 0, 0, 0);
    const day = tmp.getDay();
    const diff = (day + 6) % 7;
    tmp.setDate(tmp.getDate() - diff);
    return tmp;
}

export function formatDate(d: Date): string {
    try {
        return d.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const da = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${da}`;
    }
}

export function getWeekStartDate(baseStartDate: Date, weekNum: number): Date {
    const d = new Date(baseStartDate);
    d.setDate(d.getDate() + (weekNum - 1) * 7);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function weekNumberFromDateISO(startDate: Date, date: Date): number {
    const startMonday = startOfISOWeek(startDate);
    const dMonday = startOfISOWeek(date);
    return (
        Math.floor((dMonday.getTime() - startMonday.getTime()) / MS_PER_WEEK) +
        1
    );
}

export function weekNumberFromStringISO(
    startDate: Date,
    dateStr: string
): number {
    return weekNumberFromDateISO(startDate, new Date(dateStr));
}

export function getBirthdayWeeks(
    startDate: Date,
    totalWeeks: number
): number[] {
    const years = Math.ceil(totalWeeks / 52.1775);
    return Array.from({ length: Math.max(0, years - 1) }, (_, i) => {
        const year = i + 1;
        const birthday = new Date(startDate);
        birthday.setFullYear(startDate.getFullYear() + year);
        return (
            Math.floor(
                (birthday.getTime() - startDate.getTime()) / MS_PER_WEEK
            ) + 1
        );
    });
}
