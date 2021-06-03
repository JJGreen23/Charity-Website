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

