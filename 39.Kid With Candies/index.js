var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    let output = []
    for(let i = 0 ; i <candies.length; i ++){
        if(candies[i] + extraCandies >= max) {
            output.push(true)
        } else {
              output.push(false)
        }
    }
    return output
 };