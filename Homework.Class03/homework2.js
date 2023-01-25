$(document).ready(function () {
    // Create the table element
    var table = $("<table>");

    // Create the table header
    var headerRow = $("<tr>");
    var headers = ["Model", "Name", "Manufacturer", "Crew", "Passengers", "Class"];
    headers.forEach(function (header) {
        var th = $("<th>").text(header);
        headerRow.append(th);
    });

    var thead = $("<thead>");
    table.append(thead.append(headerRow));

    for (let i = 0; i < 20; i++) {
        $("#button").click(function () {


            $.ajax({
                type: "GET",
                url: "https://swapi.dev/api/vehicles/" + i,
                success: function (data) {
                    // let name = $("<h1>").text(data.name);
                    // name.appendTo($("#container"));

                    var valuesRow = $("<tr>");
                    var values = [data.model, data.name, data.manufacturer, data.crew, data.passengers, data.vehicle_class];
                    values.forEach(function (value) {
                        var td = $("<td>").text(value);
                        valuesRow.append(td);
                        // td.appendTo(valuesRow);
                    });

                
                    thead.append(valuesRow);
                    // Append the table to the container div
                    table.appendTo("#container");

                },
                error: function () {
                }
            });


        });
    }


});