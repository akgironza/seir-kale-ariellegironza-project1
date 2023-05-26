# Get to Know Your Elected Officials

### Description
User searches for a member of congress by name and is able to see their positions on the most recent bills that were brought to a vote (and how that fits in with their party's majority). 

### Technologies used
HTML, CSS, JavaScript, jQuery

### API used
https://api.propublica.org/congress/v1/{congress}/{chamber}/sessions/{session-number}/votes/{roll-call-number}.json

#### Sample code
``` js
$.ajax({
    url: "https://api.propublica.org/congress/v1/102-117/house/members.json",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("X-API-Key","Zcqysq7u2VyNWvhGaNDnW96LIyjjfSxMFGiiRP9j"); 
    },
    success: function (data) {
      alert("success")
      console.log(data);
    },
    error: function(){
      alert("Unable to get data");
    } });
```
### Basic mockup-ish
![Mockup-image](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C4de1cea4d9f449bc9733bc5222347a78/projects/M03T3rCYkpb/pages/d1ca4f55a2bb41e38146115fcf9c08eb/image/d1ca4f55a2bb41e38146115fcf9c08eb.png?1685085865831)

### Project schedule
| Date | Task |
|------|------|
| 5/24 |
| 5/25 |
| 5/26 |
| 5/27 |
| 5/28 |
| 5/29 |
| 5/30 |
| 5/31 |

