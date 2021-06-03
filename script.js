$("#formSearchBar").submit(function (e) {
    e.preventDefault()

    var query = $("#searchBar").val()

    var API_KEY1 = '8ff98b40c11551781da7775b1f612864'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY1 + '&type=web&query=' + query

    $.get(url, function (data){

        $("#searchResults").html('')

        console.log(data)

        data.organic_results.forEach(res => {
            
            result = `
            
                <h4>${res.title}</h4><br><a target="_blank" href"${res.url}">${res.url}</a>
                <p>${res.snippet}</p>
            
            `
            $("#searchResults").append(result)

        });

    })
})