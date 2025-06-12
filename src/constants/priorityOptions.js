export const PRIORITY = {
    HIGH: "HIGH",
    MEDIUM: "MEDIUM",
    LOW: "LOW",
};

export const PRIORITY_META = {
    [PRIORITY.HIGH]: { value: PRIORITY.HIGH, label: "상", color: "red" },
    [PRIORITY.MEDIUM]: { value: PRIORITY.MEDIUM, label: "중", color: "orange" },
    [PRIORITY.LOW]: { value: PRIORITY.LOW, label: "하", color: "green" },
};

export const PRIORITY_ORDER = {
    [PRIORITY.HIGH]: 1,
    [PRIORITY.MEDIUM]: 2,
    [PRIORITY.LOW]: 3,
};

export const PRIORITY_OPTIONS = Object.values(PRIORITY_META);
