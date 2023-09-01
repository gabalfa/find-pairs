/*
A man named Thomas Malthus described what is now called a Malthusian Catastrophe. According to him, food production grows by a fixed amount, but population grows by a percentage. So, the food supply would soon be insufficient for the population.

Your job is to find out when that will occur. For this challenge, assume 1 population needs 1 unit of food production. Food production and population both start at 100. The year starts at 0.
The catastrophe happens when the population is larger than food production.

The function will pass:
foodGrowth ⁠— an integer ⁠— food production increase per year.
popMult ⁠— a floating - point number ⁠— population growth multiplier per year.

Notes
Return the year that the overtake happens, not the next year.
Make sure you don't make the mistake of adding a year, then calculating the changes to food and population. That way, you miss year 0.
If the population and food production are equal, that is not a catastrophe.
*/

function malthusian(foodGrowth, popMult) {
  let year = 0;
  let foodProduction = 100;
  let population = 100;

  while (population <= foodProduction) {
    foodProduction += foodGrowth;
    population *= popMult;
    year++;
  }

  return {
    foodProd: Math.round(foodProduction),
    pop: Math.round(population),
    year: year,
  };
}

console.log(malthusian(4255, 1.41)); // ➞ 20
// { foodProd: 85,200, pop: 96,467.77..., year: 20 }

console.log(malthusian(9433, 1.09)); // ➞ 107
// { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }

console.log(malthusian(5879, 1.77)); // ➞ 12
// { foodProd: 70,648, pop: 94,553.84..., year: 12 }
