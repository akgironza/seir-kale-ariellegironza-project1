# Get to Know Your Elected Officials

### Initial Overview
User searches for a member of congress by name and is able to see their positions on the most recent bills that were brought to a vote (and how that fits in with their party's majority). 

### Technologies used
HTML, CSS, JavaScript, jQuery

### API used
https://projects.propublica.org/api-docs/congress-api/

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
| 5/24 |Project assigned|
| 5/25 |
| 5/26 |
| 5/27 |
| 5/28 |
| 5/29 |
| 5/30 |
| 5/31 |
| 6/1 |
| 6/2 |
| 6/3| Presentations!|

### Installation Instructions
The public repo can be downloaded from https://github.com/akgironza/seir-kale-ariellegironza-project1.

### More Detailed Description
I wanted to make an informative civic engagement-related tool. Using ProPublica's Congress API, the homepage populates lists information about the 20 most recent votes that took place in the House of Representatives. The user can search for a specific Congressperson and learn how they voted in those most recent votes that are listed.

### Challenges Faced
The headers in the initial API call. I tested the endpoints and the documentation was great for the API but I had to troubleshoot a lot to get the headers figured out.
Narrowing down what I wanted to do and reminding myself to not overdo it. I spent a lot of time working through the information returned -- when I was patient and worked through it bit by bit it wasn't too bad, but I would get stuck sometimes particularly when trying to sort out information from the original data I was pulling.
I struggle with picking images for things like websites and presentations and I didn't really want to add pictures of these elected officials. 

### Next Steps
I would love to work on the same type of tool for the Senate, potentially the Supreme Court as well.
I want to build out the additional resources page, particularly to link out to