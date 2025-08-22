const findTheOldest = function (people) {
  let oldest = 0;
  let name;
  for (let person of people) {
    if (person.yearOfDeath - person.yearOfBirth >= oldest) {
      oldest = person.yearOfDeath - person.yearOfBirth;
      name = person;
    }
  }
  return name;

  const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
      // If yearOfDeath is missing, use the current year
      const currentYear = new Date().getFullYear();
      const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
      const oldestAge =
        (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
      return age > oldestAge ? person : oldest;
    });
  };
};

// Do not edit below this line
module.exports = findTheOldest;
