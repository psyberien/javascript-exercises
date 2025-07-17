function getAge(person){
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
 const sorted = people.sort((a,b) => getAge(b) - getAge(a))
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
