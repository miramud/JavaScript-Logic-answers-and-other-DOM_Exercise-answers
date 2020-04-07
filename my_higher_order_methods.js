const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ######## Each of these higher order array methods can take in three parameters :=> item, index, and the array itself e.g companies.forEach(function(company, index, companies){
// }) ##########

// FOREACH
/* companies.forEach( company => console.log(company)) */

// FILTER
// const drink = ages.filter(age => age >= 21)
// console.log(drink)

// #### Write a JavaScript program to find the number of even digits in a an array of integers
/* const evenFunction = (arr) => {
  const evenArray = arr.filter(even => even % 2 === 0)
  return evenArray
}
console.log(evenFunction([33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32])) */

// ####### GET JUST THE RETAIL COMPANIES
/* const retailCompanies = companies.filter(company => company.category === "Retail")
console.log(retailCompanies) */

// ######## GET COMPANIES THAT STARTED FROM THE 80's
/* const eightiesCompany = companies.filter(company => company.start < 1990 && company.start > 1979)
console.log(eightiesCompany) */

// ######### GET COMPANIES THAT LASTED AT LEAST 10 YEARS
/* const tenYears = companies.filter(company => company.end - company.start >= 10)
console.log(tenYears)
 */

// MAP
// ######### MAP IS FOR CREATING ANOTHER SET OF ARRAY FROM AN ARRAY, BASED ON SOME IMPUTED CONDITIONS

// ######## CREATE AN ARRAY OF COMPANY NAMES
// console.log(companies.map(company => company.name))

// ########  CREATE AN ARRAY OF COMPANIES WITH THEIR START YEAR AND END YEAR
// console.log(companies.map(company => `${company.name} {${company.start} - ${company.end}}`))

// ######## CREATE AN ARRAY OF THE INTEGER OF THE SQUARE ROOT OF EACH AGE
// console.log(ages.map(age => Math.round(Math.sqrt(age))))

// SORT
// ######## SORT TAKES IN TWO PARAMETERS THAT IS USED FOR COMPARING EACH ELEMENT OF THE ARRAY AND ARRANGING THE ARRAY IN ASCENDING OR DESCENDING ORDER BASED ON THE CONDITION GIVEN #######

// ###### SORT THE COMPANIES BY START YEAR
/* const sortByStart = companies.sort((a, b) => a.start > b.start ? 1 : -1)
console.log(sortByStart) */
const sortByStart = companies.sort((a, b) => a.start - b.start);
console.log(sortByStart);

// ####### SORT THE AGES ARRAY IN ASCENDING ORDER
/* const sortedAgesAscend = ages.sort((a, b) => a > b ? 1 : -1)
const sortedAgesAscend = ages.sort((a, b) => a - b)
console.log(sortedAgesAscend)*/
// ####### SORT THE AGES ARRAY IN DESCENDING ORDER
/* const sortedAgesDescend = ages.sort((a, b) => a > b ? -1 : 1)
const sortedAgesAscend = ages.sort((a, b) => b - a)
console.log(sortedAgesDescend) */

// REDUCE
// ####### GET THE SUM OF THE AGES
// console.log(ages.reduce((total, age) => total + age, 0))

// ###### GET THE TOTAL OF THE YEARS SPENT BY ALL THE COMPANIES
// document.write('<h1>' + companies.reduce((total, company) => total + (company.end - company.start), 0) + '</h1>')

// ####### COMBINE EVERYTHING
// document.write('<h1>' + ages.map(age => age * 2).filter(ageForty => ageForty >= 40).sort((a, b) => a - b).reduce((total, filteredAge) => total + filteredAge, 0) + '</h1>')
