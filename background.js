
var id = 100;

/* This shows a means to exclude the current
   https://github.com/mdn/webextensions-examples/blob/master/find-across-tabs/background.js
*/

browser.browserAction.onClicked.addListener(function(e) {

  let viewTabUrl = browser.extension.getURL('tabsview.html?id=' + id++);

  let list = [];
  let cc=0;

  browser.tabs.query({currentWindow: true}, function (tabs) {
   for(item in tabs) {
  	cc++;
   	let tab = tabs[item];
    //console.log(tab.id);
  	//list.push(tab.url + '['+cc+']');
  	list.push({'id': tab.id, 'title':'['+tab.title+']('+ tab.url + ')\n\n', 'link': tab.url});
   }
  });

  var targetId = null;

  browser.tabs.onUpdated.addListener(function listener(tabId, changedProps) {

    if (tabId != targetId || changedProps.status != "complete")
      return;

    browser.tabs.onUpdated.removeListener(listener);

    var views = browser.extension.getViews({type:'tab'});
    for (var i = 0; i < views.length; i++) {
      var view = views[i];
      if (view.location.href == viewTabUrl) {
        for (var i = 0; i < list.length; i++) {
              let item = list[i];

              let localId = item['id'];
              function onCaptured(imageUri) {
                console.log('Sending..' + localId);
                view.setScreenshotUrl(localId,imageUri);
              }

              function onError(error) {
                console.log(`Error: ${error}`);
              }
              var capturing = browser.tabs.captureTab(item['id']);
              capturing.then(onCaptured, onError);

              view.setTabsTitle(item['id'], item['title'], item['link']);
        }
      }
    }
  });

  browser.tabs.create({url: viewTabUrl}, function(tab) {
    targetId = tab.id;
  });

});
