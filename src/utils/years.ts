export const FREELANCING_SINCE = 2018;
export const FULL_TIME_SINCE = 2020;

/** Whole years elapsed since a starting year, so the counts never go stale. */
export const yearsSince = (year: number) => new Date().getFullYear() - year;
