// API call: Get Recent Votes
$.ajax({
  url: "https://api.propublica.org/congress/v1/house/votes/recent.json",
  beforeSend: function(xhr) { 
    xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j");
  },
  error: function(){
  alert: ("Unable to get data");
}
}).then((data) => {
  console.log(data);
})

// API call: Get a Specific Roll Call Vote
// testing with a specific roll-call number currently

$.ajax({
  url: "https://api.propublica.org/congress/v1/118/house/sessions/1/votes/237.json",
  beforeSend: function(xhr) { 
    xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j");
  },
  error: function(){
  alert: ("Unable to get data");
}
}).then((data) => {
  console.log(data);
})