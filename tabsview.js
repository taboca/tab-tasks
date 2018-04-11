let gCurrentFlow = 'flow_' + Math.random();

function setScreenshotUrl(id, url) {
  document.getElementById('img_'+ id).src = url;
}

function createFlow() {
  var theDiv = document.createElement('div');
  theDiv.setAttribute('id',gCurrentFlow);
  theDiv.setAttribute('class','flowBox');
  document.body.appendChild(theDiv);

  var pp = document.createElement('p');
  pp.setAttribute('style','text-align:right');
  var dd = document.createElement('a');
  dd.innerHTML='Save group';

  dd.setAttribute('href','javascript:return false');
  dd.addEventListener('click', function (e) {
      saveGroup();
  },false);
  pp.appendChild(dd);
  theDiv.appendChild(pp);

  return gCurrentFlow;
}

function setTabsTitle(id, title, link) {

  theDiv = document.getElementById(gCurrentFlow);


  var img = document.createElement('img');
  img.setAttribute('id','img_'+id);
  img.setAttribute('width',196);
  theDiv.appendChild(img);

  var pp = document.createElement('p');
  var dd = document.createElement('a');
  dd.innerHTML=title;
  dd.setAttribute('href',link);
  pp.appendChild(dd);

  theDiv.appendChild(pp);

}

/* Sending message to the background main script */

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function saveGroup() {
  var sending = browser.runtime.sendMessage({
    flow_id: gCurrentFlow
  });
  sending.then(handleResponse, handleError);
}
