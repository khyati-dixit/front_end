function DeleteUser(Id) {
    debugger;
    var result = confirm('Are you sure you wish to delete this record?');
    if (result) {
        $.ajax({
            url: 'https://localhost:44336/Book/Delete?id=' + Id,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
               
                location.reload();
                
            }

        });
    }

}