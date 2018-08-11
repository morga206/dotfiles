function updateClock(){
  var currentTime = new Date(),
    currentHours = currentTime.getHours(),
    currentMinutes = ('0'+currentTime.getMinutes()).slice(-2);
    document.getElementById("clock").innerHTML = (currentHours%12) + ':' + currentMinutes;
}

updateClock();
var intervalID = window.setInterval(updateClock, 10000);


(function() {
  var heights = [],
    sections = document.querySelectorAll('section');
  for (var i = 0; i < sections.length; i++)
    heights.push(sections[i].clientHeight);
  var maxHeight = Math.max.apply(null, heights);
  document.getElementById('wrap').style.height = maxHeight+'px';

  chrome.bookmarks.getTree(function(results) {
    results[0].children.forEach(function(dir) {
      if (dir.title && dir.title == 'Bookmarks Bar') {
        var html = '';
        dir.children.forEach(function(bookmark) {
          html += '<li><a href="'+bookmark.url+'">'+bookmark.title+'</a></li>';
        });
        document.getElementById('bookmarks').innerHTML = html;
        return;
      }
    });
  });

}());
