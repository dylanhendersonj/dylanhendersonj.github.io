window.onload = function() {
  // Create an onclick function for all thumbnails
  var thumbnails = document.getElementsByClassName('thumbnail_container');
  for(var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];
    
    thumbnail.onclick = function() {
      var modal = document.getElementsByClassName('modal')[0];
      var modal_container = modal.firstElementChild;
      var vimeo_id = this.getAttribute('vimeo_id');
      var img_src = this.getAttribute('img_src');

      // Add a vimeo link
      if (vimeo_id) {
        // Create a video frame
        var container = document.createElement('div');
        container.className = 'video_container';
        var iframe = document.createElement('iframe');
        iframe.src =
          "https://player.vimeo.com/video/" +
          vimeo_id +
          "?title=0&byline=0&portrait=0&color=d0d0d0";

        // Add it to the modal and display
        container.appendChild(iframe);
        modal_container.appendChild(container);
      } else if (img_src) {
        // Create a big image
        var img = document.createElement('img');
        img.src = img_src;
        img.className = "modal_img";
        modal_container.appendChild(img);
      }

      // See if there is text
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.className == 'modal_text') {
          var text_container = document.createElement('div');
          text_container.innerHTML = child.innerHTML;
          modal_container.appendChild(text_container);
        }
      }

      // Display the modal
      modal.style.display = 'block';
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className == 'modal' ||
      event.target.className == 'modal_container' ||
      event.target.className == 'modal_img') {
    var node = document.getElementsByClassName('modal_container')[0];

    // Remove all children
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    // Make invisible
    node.parentNode.style.display = "none";
  }
}
