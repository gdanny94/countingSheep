// Instructions

// Consider an array/list of sheep where some sheep may be missing
// from their place. We need a function that counts the number 
// of sheep present in the array (true means present).


//Solution

function countSheeps(sheep) {
  
    return sheep.filter(Boolean).length
    
  }

// Explanation:
// filter(Boolean) filters out all the false, null, undefined, 0, and NaN values, keeping only the true values (which represent present sheep).
// length returns the number of true values in the array.