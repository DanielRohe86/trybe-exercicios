const techList = (array, name) => {

  if (array.length === 0) {
  return "Vazio!"
  }

  const sortedArray = array.sort();
  const technologiesList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologiesList.push({
    tech: sortedArray[index], name,});
  }
  return technologiesList;
}

/* {
  tech: 'nomeTecnologia',
  name: name,
} */

module.exports = techList;