// API call: Get Recent Votes

$.ajax({
  url: "https://api.propublica.org/congress/v1/house/votes/recent.json",
  beforeSend: function(xhr) { 
    xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j");
  },
  dataType: "json",
  contentType: "application/json",
  error: function(){
  alert: ("Unable to get data");
}
// recentVotesData.results.votes // these are all keys
// inside of votes there is an array of 0 - 19
// using map callback - for i (roll call number) in recentVotesData
// console.log -- roll_call basically

}).then((response) => {
  const recentVotesData = response.results.votes
  // console.log(recentVotesData)

  // Sorting out roll_call numbers from Recent Votes
  const recentRollCalls = recentVotesData.map(i => i.roll_call)
  console.log(recentRollCalls);
})


// API call: Get a Specific Roll Call Vote
// testing with a specific roll-call number currently

$.ajax({
  url: "https://api.propublica.org/congress/v1/118/house/sessions/1/votes/237.json",
  beforeSend: function(xhr) { 
    xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j");
  },
  dataType: "json",
  contentType: "application/json",
  error: function(){
  alert: ("Unable to get data");
}
}).then((data) => {
  console.log(data);
})