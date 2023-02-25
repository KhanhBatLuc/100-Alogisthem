function findRelativeRanks(score) {
    const n = score.length;
    const sorted = [...score].sort((a, b) => b - a);
    const ranks = {};

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            ranks[sorted[i]] = "Gold Medal";
        } else if (i === 1) {
            ranks[sorted[i]] = "Silver Medal";
        } else if (i === 2) {
            ranks[sorted[i]] = "Bronze Medal";
        } else {
            ranks[sorted[i]] = String(i+1);
        }
    }

    const result = [];

    for (const s of score) {
        result.push(ranks[s]);
    }

    return result;
}
