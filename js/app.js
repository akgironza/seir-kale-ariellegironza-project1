// working 
$.ajax({
    url: "https://api.propublica.org/congress/v1/102-117/house/members.json",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j"); 
    },

    // things I thought I might need, didn't, but keeping just in case for now
    // type: "GET",
    // dataType: "json",
    // contentType: "application/json",

    // success function that was nice but is annoying every time I save
    // success: function (data) {
      // alert("success")
      // console.log(data);
    // },
    error: function(){
      alert("Unable to get data");
    }
});

