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
}).then((response) => {
  const recentVotesData = response.results.votes
  console.log(recentVotesData);
})
// recentVotesData.results.votes // these are all keys
// inside of votes there is an array of 0 - 19
// using map callback - for i (roll call number) in recentVotesData
// console.log -- roll_call

// Sorting out roll_call numbers from Recent Votes
// results.votes <-- this is the part of the object needed to access the votes array
// **Need array method/callback to loop through each item in the array**
  // within each item of the array, want to get to value of roll_call
  // take that value and append to the new array3


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