(function(){
    console.log("starting app..");

    //U.I
    var ui ={
        fields: document.querySelectorAll("input"),
        button: document.querySelector(".pure-button"),
        table: document.querySelector(".pure-table")
    };

    //actions
    var validateFields = function(){};
    
    var addContact = function(){};

    var listContacts = function(){};

    var removeContacts = function(){};

    var init = function(){
        //mapping events.
        ui.button.addEventListener("click",validateFields);
    };
    console.log(ui);
})();