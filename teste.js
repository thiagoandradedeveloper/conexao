let conexao = require('./conexao');

let con = new conexao();
con.config({
    
    /*dataBase:"lojinha",
    type:"SQLite"*/
    
    /*dataBase:'bd_tha',
    type:'MySQL',
    host:'localhost',
    password:'',
    root:'root'*/

    host:'localhost',
    port:'5432',
    password:'123',
    user:'postgres',
    database:'test',
    type:'postgre',

}).then(result => {
    console.log(result); // Resultado da conexão
}).catch(error => {
    console.error(error);
});

con.run("DELETE FROM usuarios WHERE id = 3");
con.close();

//con.close();

/*
con.run("CREATE TABLE IF NOT EXISTS usuarios(Id int NOT NULL, Nome varchar(80), PRIMARY KEY(Id));");
con.run("INSERT INTO usuarios VALUES(2,'Joao');")
con.run("select * from usuarios")
.then(result => {
    console.log(result); // Resultado da conexão
    con.close();
}).catch(error => {
    console.error(error);
});*/

//con.run("CREATE TABLE IF NOT EXISTS usuarios(Id int NOT NULL, Nome varchar(80), PRIMARY KEY(Id));");
/*con.run("INSERT INTO usuarios VALUES (6,'Maria');")
con.run("select rowid,* from usuarios")
.then(result => {
    console.log(result); // Resultado da conexão
    con.close();
}).catch(error => {
    console.error(error);
});*/
/*
const Pool = require('pg').Pool;
const pool = new Pool({
    host:'localhost',
    port:'5432',
    password:'123',
    user:'postgres',
    database:'test'
});*/

/*let sql = `CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
)`;*/
/*
const execute = function(){
    
    let sql = null;
    sql = "INSERT INTO usuarios (nome) VALUES ('Debora')";

    pool.query(sql,(error,result)=>{
        
        if(error) throw error;
        
        sql = "SELECT * FROM public.usuarios ORDER BY id ASC";

        pool.query(sql,(error,result)=>{
            if(error) throw error;
            console.log(result.rows);
        })

        pool.end((err) => {
            if (err) {
              console.error('Erro ao fechar a conexão:', err);
            } else {
              console.log('Conexão fechada com sucesso.');
            }
        });
    })

 
}

execute();*/