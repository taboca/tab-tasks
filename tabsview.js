function setScreenshotUrl(id, url) {
  document.getElementById('img_'+ id).src = url;
}

function setTabsTitle(id, title, link) {

  var theDiv = document.createElement('div');
  document.body.appendChild(theDiv);

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

  document.getElementById('markup').appendChild(theDiv);

}
