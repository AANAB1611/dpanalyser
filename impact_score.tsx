function calculateImpactScore(commits, merges, repoEngagement, requestedChanges, bugsFixed, issuesSolved) {
    // Define weightages based on our calculation model
    const weights = {
        commits: 0.20,
        merges: 0.20,
        repoEngagement: 0.15,
        requestedChanges: 0.15,
        bugsFixed: 0.15,
        issuesSolved: 0.15
    };
    
    // Helper function to prevent log(0) errors
    function safeLog(value) {
        return value > 0 ? Math.log10(value) : 0;
    }
    
    // Compute the weighted sum
    let score = (
        weights.commits * safeLog(commits) +
        weights.merges * safeLog(merges) +
        weights.repoEngagement * safeLog(repoEngagement) +
        weights.requestedChanges * safeLog(requestedChanges) +
        weights.bugsFixed * safeLog(bugsFixed) +
        weights.issuesSolved * safeLog(issuesSolved)
    );
    
    // Ensure the score is within the valid range (0 to 10)
    return Math.min(Math.max(score, 0), 10);
}

// Example Usage (for a junior developer)
const juniorScore = calculateImpactScore(3000, 500, 300, 100, 80, 150);
console.log("Junior Developer Impact Score:", juniorScore);

// Example Usage (for a senior-most developer)
const seniorScore = calculateImpactScore(80000, 10000, 5000, 3000, 2500, 3500);
console.log("Senior Developer Impact Score:", seniorScore);
