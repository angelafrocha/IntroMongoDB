//Exibir a lista de bancos de dados em seu ambiente;
//Criar três coleções;
//Exibir a lista de coleções;
//Excluir coleções.
show dbs

use meu_banco_de_dados

db.createCollection("colecao1")
db.createCollection("colecao2")
db.createCollection("colecao3")
db.createCollection("colecao4")

show collections

db.colecao1.drop()
db.colecao4.drop()

show collections

