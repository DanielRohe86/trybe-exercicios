const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

/* const newArrayFunction = (array) => newArray = array.map((element) => `${element.name.toUpperCase().split(' ').join('_')} - ${element.genre.toUpperCase()} - ${element.author.name.toUpperCase().split(' ').join('_')}`);

console.log(newArrayFunction(books)); */

//🚀 2 - Construa um array de objetos a partir do array de livros. 
// Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, 
// e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
//O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha 
//considerando suas idades quando o livro foi lançado.

/* const newArrayFunction = (array) => newArray = array
  .map((element) => ( { age: element.releaseYear - element.author.birthYear, name: element.name } ))
  .sort((obj1, obj2) => obj1.age - obj2.age);

console.log(newArrayFunction(books)); */

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

/* const scienceFictionAndFantasy = (array) => selectedGenres = array.filter((element) => element.genre ===  'Ficção Científica' || element.genre ===  'Fantasia');

console.log(scienceFictionAndFantasy(books));
 */

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

/* const sixtyPlus = (array) => sixtyPlusBooks = array
.filter((element) => 2022 - element.releaseYear > 60)
.sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);

console.log(sixtyPlus(books)); */

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

/* const scienceFictionAndFantasyInOrder = (array) => {const selectedGenres = array
.filter((element) => element.genre ===  'Ficção Científica' || element.genre ===  'Fantasia')
.map((element) => element.author.name).sort();

return selectedGenres;

//ERRO
// const sortedNames = [];
// sortedNames.push(selectedGenres.author.name);

// return sortedNames.sort();
}


console.log(scienceFictionAndFantasyInOrder(books)); */


// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

/* const sixtyPlus = (array) => { const sixtyPlusBooks = array
.filter((element) => 2022 - element.releaseYear > 60)
.map((element) => element.name);

return sixtyPlusBooks;
}

console.log(sixtyPlus(books)); */

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name
    .split(' ')
    .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

console.log(authorWith3DotsOnName(books));