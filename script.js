$("#form").submit(function (e) {
    e.preventDefault();

    var query = $("#searchBar").val();

    var API_KEY1 = '8ff98b40c11551781da7775b1f612864';

    var result = '';

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY1 + '&type=web&query=' + query

    console.log(url)

    $.get(url, function (data){

        $("#searchResults").html('')

        console.log(data);

        data.organic_results.forEach(res => {

            result =`
            
                <h4>${res.title}</h4><a href="${res.url}" class = "searchURL">${res.url}</a>
            
            `
            $("#searchResults").append(result);

        });

    })
});

let userCharitydatasaved = [];

let saveUserData = (event) => {
    event.preventDefault();


    userCharitydatasaved.push(document.getElementById("charityuserInput").value);

    document.forms[0].reset();

    localStorage.setItem('savedUserData',JSON.stringify(userCharitydatasaved));

}

var savedList = document.getElementById('userSavedList');

var li = document.createElement('li').innerHTML + localStorage.getItem('savedUserData');

savedList.append(li);

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click',saveUserData);
})

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/Alzheimers",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (data) {

    const alzdef = document.getElementById('alzheimerDef');

    alzdef.innerHTML = 'Definition:  ' + data.results[0].definition + '.';
    
    console.log(data);
}); 

const settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/fistula",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings2).done(function (data) {

    const fistuladef = document.getElementById('fistulaDef');

    fistuladef.innerHTML = 'Definition:  ' + data.results[0].definition + '.';

    console.log(data);
    
}); 

const settings3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/leukemia",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings3).done(function (data) {

    const lukDef = document.getElementById('leukemiaDef');

    lukDef.innerHTML = 'Leukemia Definition:  ' + data.results[0].definition + '.';

    console.log(data);
    
}); 

const settings4 = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/lymphoma",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings4).done(function (data) {

    const lymdef = document.getElementById('lymphomaDef');

    lymdef.innerHTML = 'Lymphoma Definition:  ' + data.results[0].definition; + '.'

    console.log(data);
    
}); 

const settings5 = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/cancer",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings5).done(function (data) {

    const cancerDef = document.getElementById('cancerDef');

    cancerDef.innerHTML = 'Definition:  ' + data.results[3].definition + '.';

    console.log(data)
    
}); 

const settings6 = {
    "async": true,
    "crossDomain": true,
    "url": "https://wordsapiv1.p.rapidapi.com/words/AIDS",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7494ede90emsh981b54ea127614ep1b653djsn8f591627a3ed",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
};

$.ajax(settings6).done(function (data) {

    const aidsdef = document.getElementById('aidsDef');

    aidsdef.innerHTML = 'Definition:  ' + data.results[0].definition + '.';

    console.log(data);
    
}); 
