
    $(document).ready(function () {
        $("#type").autocomplete({
            source: async function(request, response) {
                let data = await fetch(`http://localhost:3000/search?query=${request.term}`)
                    .then(results => results.json())
                    .then(results => results.map(result => {
                        return { label: result.name, value: result.name, id: result._id };
                    }));
                response(data);
            },
            minLength: 1,
            select: function(event, ui) {
                fetch(`http://localhost:3000/get/${ui.item.id}`)
                    .then(result => result.json())
                    .then(result => {
                        $("#attributes").empty();
                        $("#attributes").append(`<li>Name: ${result.name}</li>`);
                        $("#attributes").append(`<li>Type: ${result.property_type}</li>`);
                        $("#attributes").append(`<li>Policy: ${result.cancellation_policy}</li>`);
                    });
            }
        });
    });