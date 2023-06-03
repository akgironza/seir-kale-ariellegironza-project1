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
  // Callback for this API call to go over the previous data received
    // need to swap out the roll_call number in the url
    // need to create a new section in the webpage for each vote

  function pullRollCalls(rollCall){
    const $votesContainer = $(".votesContainer");
    const voteDetails = [];
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
  }).then((response) => {
    console.log(rollCall);
    //console.log(response);
    voteDetails.push(response);
    // empty the container?
    //$votesContainer.empty()
    $votesContainer.append($("<div>").text(
      `${response.results.votes.vote.date} ||
      ${response.results.votes.vote.bill.number}||
      ${response.results.votes.vote.bill.title} ||
      ${response.results.votes.vote.question} ||
      Additional details: ${response.results.votes.vote.description} ||
      ${response.results.votes.vote.result} ||`
      ));
    console.log(voteDetails);
  })
  }
recentRollCalls.forEach(pullRollCalls)


// User inputs congressperson's name and clicks SEARCH
// Strings should concatenate
const $form = $("form")

$form.on("submit", event => {
  event.preventDefault() // prevent page refresh

  // create formData object for the name search
    // get the data needed from formData
  const formData = new FormData(event.target)
  const fullRepName = `${formData.get("firstname")} ${formData.get("lastname")}`
  console.log(fullRepName) // testing testing, good so far


// THIS WILL BASICALLY BE, IF THE REP'S FULL NAME
  // IS IN THE SPECIFIC PART OF THE ARRAY, THEN...
  /*
  for (v of recentRollCalls){
    (let i=0; i=4) 
  }
  recentRollCalls.forEach(i => )
  console.log(recentRollCalls);
  recentRollCalls.forEach(() => {
    if (fullRepName === (recentRollCalls.results.votes.vote.positions[i].name)){
      console.log(fullRepName)
    }
  })*/
});
})