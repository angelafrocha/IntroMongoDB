//Usar o comando 'use' para criar ou selecionar um banco de dados específico no MongoDB
use filmes


//Insirir pelo menos 10 documentos na base de dados
db.filmes.insertMany([
  {
    titulo: "Inception",
    diretor: "Christopher Nolan",
    genero: "Ficção Científica",
    ano: 2010,
    duracao: 148,
    elenco: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    avaliacao: 8.8
  },
  {
    titulo: "The Shawshank Redemption",
    diretor: "Frank Darabont",
    genero: "Drama",
    ano: 1994,
    duracao: 142,
    elenco: ["Tim Robbins", "Morgan Freeman"],
    avaliacao: 9.3
  },
  {
    titulo: "Pulp Fiction",
    diretor: "Quentin Tarantino",
    genero: "Crime",
    ano: 1994,
    duracao: 154,
    elenco: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    avaliacao: 8.9
  },
  {
    titulo: "The Dark Knight",
    diretor: "Christopher Nolan",
    genero: "Ação",
    ano: 2008,
    duracao: 152,
    elenco: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    avaliacao: 9.0
  },
  {
    titulo: "Fight Club",
    diretor: "David Fincher",
    genero: "Drama",
    ano: 1999,
    duracao: 139,
    elenco: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    avaliacao: 8.8
  },
  {
    titulo: "The Godfather",
    diretor: "Francis Ford Coppola",
    genero: "Crime",
    ano: 1972,
    duracao: 175,
    elenco: ["Marlon Brando", "Al Pacino", "James Caan"],
    avaliacao: 9.2
  },
  {
    titulo: "Interstellar",
    diretor: "Christopher Nolan",
    genero: "Ficção Científica",
    ano: 2014,
    duracao: 169,
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    avaliacao: 8.6
  },
  {
    titulo: "The Matrix",
    diretor: "Lana Wachowski, Lilly Wachowski",
    genero: "Ação",
    ano: 1999,
    duracao: 136,
    elenco: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    avaliacao: 8.7
  },
  {
    titulo: "The Avengers",
    diretor: "Joss Whedon",
    genero: "Ação",
    ano: 2012,
    duracao: 143,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    avaliacao: 8.0
  },
  {
    titulo: "Forrest Gump",
    diretor: "Robert Zemeckis",
    genero: "Drama",
    ano: 1994,
    duracao: 142,
    elenco: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    avaliacao: 8.8
  }
])


//Realizar todas as consultas apresentadas neste módulo
//Exibir todos os documentos na coleção "filmes"
db.filmes.find({})

//Exibir os campos "titulo", "diretor", "genero" e "ano" para todos os documentos na coleção "filmes"
db.filmes.find({}, { titulo: 1, diretor: 1, genero: 1, ano: 1 })

//Exibir os campos "titulo", "diretor", "genero" e "ano", excluindo o campo "_id", para todos os documentos na coleção "filmes"
db.filmes.find({}, { titulo: 1, diretor: 1, genero: 1, ano: 1, _id: 0 })

//Exibir os campos "titulo", "diretor", "genero" e "ISBN", excluindo o campo "_id", para todos os documentos na coleção "filmes"
db.filmes.find({}, { titulo: 1, diretor: 1, genero: 1, ISBN: 1, _id: 0 })

//Exibir todos os filmes que pertencem ao gênero "Ficção Científica":
db.filmes.find({ genero: "Ficção Científica" })

//Limite para exibir apenas 3 documentos
db.filmes.find().limit(3)

//Pular os primeiros 2 registros e exibir a partir do terceiro:
db.filmes.find().skip(2)


//Atualizar pelo menos um campo de dois documentos inseridos utilizando o método "update"
// Atualizar o campo "avaliacao" do filme com título "Inception"
db.filmes.update({ titulo: "Inception" }, { $set: { avaliacao: 9.2 } })

// Atualizar o campo "duracao" do filme com título "The Shawshank Redemption"
db.filmes.update({ titulo: "The Shawshank Redemption" }, { $set: { duracao: 150 } })


//Atualizar inserindo novas informações em pelo menos três documentos utilizando o método "save"
// Atualizar o filme com título "Pulp Fiction"
db.filmes.save({ _id: ObjectId("id_do_documento"), titulo: "Pulp Fiction", diretor: "Quentin Tarantino", genero: "Crime", ano: 1994, duracao: 154, elenco: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"], avaliacao: 8.9, sinopse: "Nova sinopse aqui" })

// Atualizar o filme com título "The Dark Knight"
db.filmes.save({ _id: ObjectId("id_do_documento"), titulo: "The Dark Knight", diretor: "Christopher Nolan", genero: "Ação", ano: 2008, duracao: 152, elenco: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], avaliacao: 9.0, sinopse: "Nova sinopse aqui" })

// Atualizar o filme com título "Fight Club"
db.filmes.save({ _id: ObjectId("id_do_documento"), titulo: "Fight Club", diretor: "David Fincher", genero: "Drama", ano: 1999, duracao: 139, elenco: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"], avaliacao: 8.8, sinopse: "Nova sinopse aqui" })


//Fazer uma consulta com agregação
db.filmes.aggregate([
  {
    $group: {
      _id: null,
      mediaAvaliacao: { $avg: "$avaliacao" }
    }
  }
])


