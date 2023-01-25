$(document).ready(function () {
    let unorderedList = $("<ul>");
    let container = $("#container");

    unorderedList.appendTo(container);

    $("#button").click(function () {
        for (let i = 1; i <= 6; i++) {
            $.ajax({
                type: "GET",
                url: "https://swapi.dev/api/films/" + i,
                success: function (data) {
                    let listElement = $("<li>").text(data.title);
                    listElement.appendTo(unorderedList);
                },
                error: function () {
                }
            });
        }

    });
});