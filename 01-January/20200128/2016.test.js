const solution = (a, b) => {
    const dayOfTheWeek = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    return dayOfTheWeek[(daysUntilMonth(a) + b) % 7];
};

const daysUntilMonth = (month) => {
    const MonthOfTheYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // return MonthOfTheYear.reduce((a, x, i) => month - 1 > i ? a + x : a, 0);
    return MonthOfTheYear.slice(0, month-1).reduce((a, x) => a + x, 0);
}

test('solution', () => {
    expect(solution(1, 2)).toBe("SAT");
    expect(solution(1, 1)).toBe("FRI");
    expect(solution(2, 14)).toBe("SUN");
    expect(solution(5, 28)).toBe("SAT");
});

test('daysUntilMonth', () => {
    expect(daysUntilMonth(5)).toBe(121);
    expect(daysUntilMonth(4)).toBe(91);
    expect(daysUntilMonth(1)).toBe(0);
    expect(daysUntilMonth(2)).toBe(31);
})