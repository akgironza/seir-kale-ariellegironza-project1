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
  //console.log(recentVotesData)

  // Sorting out roll_call numbers from Recent Votes
  const recentRollCalls = recentVotesData.map(i => i.roll_call)
  console.log(recentRollCalls);


  // API call: Get a Specific Roll Call Vote
  // Callback for this API call to go over the previous data received
    // need to swap out the roll_call number in the url
    // need to create a new section in the webpage for each vote
  function pullRollCalls(rollCall){
    const $votesContainer = $(".votesContainer");
    const $repDetails = $(".repDetails");
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
    //console.log(voteDetails.push(response));
    //console.log(voteDetails);
    //console.log(rollCall);
    //console.log(response);
    // empty the container?
    //$votesContainer.empty()

    $votesContainer.append($("<div>").text(
      `${response.results.votes.vote.date} ||
      ${response.results.votes.vote.bill.number}`
    ))
    $votesContainer.append($("<p>").text(
      `${response.results.votes.vote.bill.title} ||
      ${response.results.votes.vote.question} ||
      Additional details: ${response.results.votes.vote.description} ||`
    ))
    $votesContainer.append($("<p>").text(
      `|| ${response.results.votes.vote.result} ||`
    ));

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
  
  // need to be able to more easily access the reps and their positions
  // when user searches for a rep we should be able to access their index (for later)
  const reps = response.results.votes.vote.positions
  //console.log(reps) //test test
  const targetName = `${fullRepName}`;
  const targetIndex = reps.findIndex(rep => rep.name === `${fullRepName}`);
  console.log(targetIndex);

  $repDetails.append($("<div>").text(
    `${response.results.votes.vote.bill.number} || ${response.results.votes.vote.positions[targetIndex].name} (${response.results.votes.vote.positions[targetIndex].party}, ${response.results.votes.vote.positions[targetIndex].state}) voted/responded:
    ${response.results.votes.vote.positions[targetIndex].vote_position} ||
    `))
  $repDetails.append($("<p>").text(
    `Democratic party vote breakdown: ${response.results.votes.vote.democratic.yes} yes, ${response.results.votes.vote.democratic.no} no, ${response.results.votes.vote.democratic.not_voting} did not vote. ||
    `))
  $repDetails.append($("<p>").text(
    `Republican party vote breakdown: ${response.results.votes.vote.republican.yes} yes, ${response.results.votes.vote.republican.no} no, ${response.results.votes.vote.republican.not_voting} did not vote. ||
  `))
  })
    }
)}
  recentRollCalls.forEach(pullRollCalls)
});


/*
  // THIS WILL BASICALLY BE, IF THE REP'S FULL NAME 
// IS IN THE SPECIFIC PART OF THE ARRAY, THEN...
  const repDetails = voteDetails.find(((voteDetails.results.vote.votes[positions]), index) => {
    //return : `${fullRepName}`
  })
});
  //if(fullRepName === (voteDetails.results.votes.vote[positions][].name)){
    //console.log(fullRepName)

recentRollCalls.forEach(pullRollCalls)
}); */

/*
const targetId = `${fullRepName}`
const targetObject = voteDetails.find(obj => obj.results.votes.vote.positions === targetId);

if (targetObject) {
  console.log(targetObject.vote_position);
} else {
  console.log("name not found")
}
*/