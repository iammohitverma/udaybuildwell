function initLightGallery() {
  lightGallery(document.getElementById("lightgallery"));
}

function afterWindowLoad(event) {
  // init LightGallery
  initLightGallery();
}
window.addEventListener("load", afterWindowLoad);
