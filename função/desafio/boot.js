    
 if (intentName == "cadastro.curriculo - yes") { 
  
    var endereco  = request.body.queryResult.parameters['endereco'];
    var nome  = request.body.queryResult.parameters['nome'];
    var fone = request.body.queryResult.parameters['fone'];
    var idade = request.body.queryResult.parameters['idade'];
    var profissao = request.body.queryResult.parameters['profissao'];
    var tempo_experiencia = request.body.queryResult.parameters['tempo_experiencia'];
    var filho = request.body.queryResult.parameters['filho']
    
    const connection = mysql.createConnection({
      host: 'localhost', 
      user: 'root', 
      password:'root', 
      database: 'cadastro' 
    });
       
     connection.connect();     
     connection.query("insert into recruiterbot.cadastro values ('"+endereco+"','"+nome+"','"+fone+"','"+idade+"','"+profissao+"','"+tempo_experiencia+"','"+filho+"')",  
                   
     function (error, results, fields) {
     if (error) throw error;
     connection.end();    
         response.json({"fulfillmentText" :"Voce foi cadastrado(a) agora vamos indicar você para nossos clientes. Boa sorte!! 🙂 " })
      
    });
    
    
  };