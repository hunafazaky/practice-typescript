
// Build a golf score translator function
const golfScore = function(par: number, strokes: number): string {
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  const score = par - strokes;
  if (strokes === 1) return names[0];
  if (score <= -3) return names[6];
  // return score;
  switch (score) {
    case -2 : return names[5];
    case -1 : return names[4];
    case 0 : return names[3];
    case 1 : return names[2];
    default : return names[1];
  }
}