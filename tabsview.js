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
  dd.setAttribute('href','saveGroup()');
  pp.appendChild(dd);
  theDiv.appendChild(pp);

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
