// Function to calculate ranked matches level based on victories and defeats
function calculateRankedLevel(victories, defeats) {
    // Calculate the balance of ranked matches
    const rankedBalance = victories - defeats;
  
    // Determine the level based on the calculated balance
    let level;
  
    if (victories < 10) {
      level = "Iron";
    } else if (victories >= 11 && victories <= 20) {
      level = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
      level = "Silver";
    } else if (victories >= 51 && victories <= 80) {
      level = "Gold";
    } else if (victories >= 81 && victories <= 90) {
      level = "Diamond";
    } else if (victories >= 91 && victories <= 100) {
      level = "Legendary";
    } else {
      level = "Immortal";
    }
  
    // Return the result as an object
    return {
      rankedBalance: rankedBalance,
      level: level,
    };
  }
  
  // Example usage:
  const heroStats = calculateRankedLevel(75, 20);
  
  // Display the result
  print(`The hero has a balance of ${heroStats.rankedBalance}, and is at the level of ${heroStats.level}`);
  