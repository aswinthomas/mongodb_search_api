
$(document).ready(function () {
    $("#type").autocomplete({
        minLength: 2,
        autoFocus: true,
        source: async function(request, response) {
            let data = await fetch(`http://localhost:3000/search?query=${request.term}`)
                .then(results => results.json())
                .then(results => results.map(result => {
                    return { label: result.name, value: result.name, id: result._id };
                }));
            response(data);
        },
    });
});