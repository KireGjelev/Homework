let arr = ["Marko", "Angelina", "Aleksandar", "Simona", "Ana"];

$(document).ready(function () {
    $("#click").on("click", function () {
        if ($("#names li").lenght != 0) {


            for (var index in arr) {
                $("#names").append($("<li>").html(arr[index]));
            }
        }

    });

});

