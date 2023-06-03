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


  // API call: Get a Specific Roll Call Vote
  // I think I want to do a callback/loop for this API call
    // need to swap out the roll_call number in the url
  
  function pullRollCalls(rollCall){
    $.ajax({
      url: `https://api.propublica.org/congress/v1/118/house/sessions/1/votes/${rollCall}.json`, 
      beforeSend: function(xhr) { 
      xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j");
    },
    dataType: "json",
    contentType: "application/json",
    error: function(){
      alert: ("Unable to get data");
    }
  }).then((data) => {
    // console.log(rollCall)
    console.log(data);
  })
  }
  recentRollCalls.forEach(pullRollCalls)
  // the fact that this is working now... kinda don't want to touch this anymore
  // but I will continue
})


// User inputs congressperson's name and clicks SEARCH

$("form").on("submit", (event) => {
  console.log(event) // not sure yet

  // prevent page refresh
  event.preventDefault()

  // create formData object for the name search
    // get the data needed from formData
  const formData = new FormData(event.target)
  const fullRepName = `${formData.get("firstname")} ${formData.get("lastname")}`
  console.log(fullRepName) // testing testing, good so far

})