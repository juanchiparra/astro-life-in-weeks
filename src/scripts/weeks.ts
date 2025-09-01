import {
    getStartDate as utilGetStartDate,
    weekNumberFromDateISO,
} from "../utils/date";

(() => {
    const container = document.querySelector(".weeks-container");
    if (!container) return;
    const startStr = container.getAttribute("data-start-date");
    if (!startStr) return;
    const start = utilGetStartDate(startStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayWeek = weekNumberFromDateISO(start, today);
    const weeks = container.querySelectorAll<HTMLElement>(".week[data-week]");
    weeks.forEach((el) => {
        const n = parseInt(el.getAttribute("data-week") || "0", 10);
        el.classList.remove("past", "today", "future");
        el.removeAttribute("aria-current");
        if (n < todayWeek) {
            el.classList.add("past");
        } else if (n === todayWeek) {
            el.classList.add("today");
            el.setAttribute("aria-current", "date");
        } else {
            el.classList.add("future");
        }
    });
})();
