const mysql = require('mysql2')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'locadora'
})

 

//ver
 conexao.query(`select * from registros`, function(err, result){
    if(err) throw Error;
    console.log(result, " foi")

})



//inserir

let sql = `insert into registros set ?`;
let dados = {letra: 'g'};
conexao.query(sql, dados, function(err, result){
    if(err) throw Error;
    console.log("foi ", result)
}) 

 

//atualizar

let sql = `update registros set ? where id = ?`;
let dados = {id: 6, letra: 'f'};
conexao.query(sql, [dados, dados.id], function(err, result){
    if(err) throw Error;
    console.log('foi ', result)
}) 

 

//deletar

let sql = `delete from registros where id = ?`;
let id = 7
conexao.query(sql, id, function(err, result){
    if(err) throw Error;
    console.log("foi", result)

})