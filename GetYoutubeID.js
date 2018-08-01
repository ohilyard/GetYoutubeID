//I know this is bad, but I can't find a better solution to wait a bit so Google's servers can catch up
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

getMostRecentYoutubeID = function(){

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        jsonResponse = JSON.parse(this.responseText);
    }
};

xmlhttp.open("GET", 'https://www.googleapis.com/youtube/v3/search?key={YOUR API KEY HERE}&channelId=UCEbhcRbn4hVT2mNlmr0XxCg&part=id&order=date&maxResults=20&type=js', true);
xmlhttp.send();
sleep(100)
var jsonResponseItemsLengthStore = jsonResponse.items.length
items = []
for (var i = 0; i < jsonResponseItemsLengthStore; i++) {
    if (jsonResponse.items[i].id.kind != "youtube#playlist") {
        items.push(jsonResponse.items[i])
    }
}
//if you want to return the embed url
// items[0] because youtube returns in order publshed//www.youtube.com/embed/" + items[0].id.videoId)
return ("https://www.youtube.com/embed/" + items[0].id.videoId)
}
