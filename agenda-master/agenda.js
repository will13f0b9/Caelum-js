(function(){
    console.log("starting app..");

    //U.I
    var ui ={
        fields: document.querySelectorAll("input"),
        button: document.querySelector(".pure-button"),
        table: document.querySelector(".pure-table tbody")
    };

    //actions
    var validateFields = function(event){
       /*console.log(ui.fields[0].value);
        console.log(ui.fields[1].value);
        console.log(event.target);*/

        event.preventDefault();

        var errors = 0;
        var data = {};

        ui.fields.forEach(function(field){
            
            if(field.value.trim().length === 0){
                field.classList.add("error");
                errors += 1;
            }else{
                field.classList.remove("error");
                data[field.id] = field.value.trim();
                field.value = field.value.trim();
            }
        //console.log(field.value.length);
        });
        if(errors === 0){
            addContact(data);
        }
        else{
            document.querySelector(".error").focus();
        }
        //console.log(errors,data);
    };
    var cleanFields = ()=> ui.fields.forEach(field => field.value = "");

    var addContactSuccess = function(){
        cleanFields();
        listContacts();
    };
    var addContactError = function(){};
    var addContact = function(contact){ 
        //AJAX - chamada pro back end usando fetch api atraves de request com formato json.
        var endpoint = "http://localhost:8000/contacts";
        var data = {
            method: "POST",
            body: JSON.stringify(contact)//transforma contact em formato json
        };
        var headers = new Headers();
        headers.append("Content-type","application/json");

        var conf = Object.assign({},data,{headers: headers}); //junta objetos em um só, para poder mandar pro endpoint
        // var conf = Object.assign({headers: headers},data); //outra forma de fazer o codigo acima
        
        //console.log(conf);
        //console.log("salvar",contact);
        
        fetch(endpoint,conf)
        .then(addContactSuccess)//se der certo
        .catch(addContactError);//se der errado
       
    };

    var listContacts = function(){
        //forma mais simples de trabalhar com ajax.
            var endpoint = "http://localhost:8000/contacts";
            var conf ={
                method: "GET",
                headers: new Headers({"Content-type": "application/json"})//gera um header no formato json usando construtor
            };
        //
            fetch(endpoint,conf)
            //.then((...args)=>console.log(args))//se der certo ==== (...args) pega os argumentos vindo do get como parametro no arrow function que é um objeto no formato(resposta bruto) response
            .then((response)=>response.json())//metodo .json q transforma response em json e alimenta o data do proximo then() com dados usaveis.
            //.then((data)=>console.table(data))
            .then(listContactsSuccess)
            .catch(listContactsError);//se der errado 
    };
    
    var listContactsError = function(){}

    var listContactsSuccess = function(list){

        var html = [];
        //console.table(list);
        list.forEach(function(item){
            html.push(`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.fone}</td>
                    <td><a href="#">Excluir</a></td>
                </tr>`
            );// `` é uma template string que da para colocar codigo html, multilinhas de string, etc
        });
        //console.log(html.join(""));//.join transforma array em texto
        ui.table.innerHTML = html.join("");
        
    }

    var removeContacts = function(){};

    var init = function(){
        //mapping events.
        ui.button.addEventListener("click",validateFields);
        listContacts();
        
        
    }();
    
})();