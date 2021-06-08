$("#form").submit(function (e) {
    e.preventDefault();

    var query = $("#searchBar").val();

    var API_KEY1 = '8ff98b40c11551781da7775b1f612864'

    var result = '';

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY1 + '&type=web&query=' + query

    console.log(url)

    $.get(url, function (data){

        $("#searchResults").html('')

        console.log(data);

        data.organic_results.forEach(res => {

            result = `
            
                <h4>${res.title}</h4><a href="${res.url}">${res.url}</a>
            
            `
            $("#searchResults").append(result)

        });

    })
});

let userCharitydatasaved = '';

let saveUserData = (event) => {
    event.preventDefault();

    let userCharitydata = document.getElementById("charityuserInput").value

    userCharitydatasaved.push(userCharitydata);

    document.forms[0].reset();

    localStorage.setItem('savedUserData',JSON.stringify(userCharitydatasaved));

}

var savedList = document.getElementById('userSavedList');

var li = document.createElement('li').innerHTML =  localStorage.getItem('savedUserData');

savedList.append(li)


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click',saveUserData);
})