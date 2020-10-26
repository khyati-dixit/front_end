
$(document).ready(function () {
    debugger;
    $("#btnAdd").click(function () {
        $.ajax({
            url: 'https://localhost:44336/Book/Insert',
            type: 'POST',
            data: {
                FullName: $("#AName").val(),
                UserEmail: $("#ALat").val(),
                success: function (data) {
                    location.reload();
                }
                }
            });

        });
    });
