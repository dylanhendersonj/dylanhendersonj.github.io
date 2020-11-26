function launch_modal() {
  // Create a container
  var modal = document.createElement('div');
  modal.className = 'modal';
  var modal_container = document.createElement('div');
  modal_container.className = 'modal_container';
  modal.appendChild(modal_container);
  document.body.appendChild(modal);

  // Fetch video and image links if available
  var vimeo_id = this.getAttribute('vimeo_id');
  var youtube_id = this.getAttribute('youtube_id');
  var img_src = this.getAttribute('img_src');

  if (vimeo_id || youtube_id) {
    // Create a video frame
    var container = document.createElement('div');
    container.className = 'video_container';
    var iframe = document.createElement('iframe');
    if (vimeo_id) {
      iframe.src =
        "https://player.vimeo.com/video/" +
        vimeo_id +
        "?title=0&byline=0&portrait=0&color=d0d0d0";
    } else if (youtube_id) {
      iframe.src =
        "https://www.youtube.com/embed/" +
        youtube_id +
        "?rel=0&color=white";
    }
    iframe.setAttribute('allowfullscreen', '');
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
      text_container.className = 'modal_text_display';
      text_container.innerHTML = child.innerHTML;
      modal_container.appendChild(text_container);
    }
  }

  // Display the modal
  modal.style.display = 'block';
}

window.onload = function() {
  // Place the thumbnails in columns
  var thumbnails = document.getElementsByClassName('thumbnail_container');
  for(var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];
    var thumbnail_column = document.createElement('div');
    thumbnail_column.className = 'thumbnail_column';
    thumbnail_column.innerHTML = thumbnail.outerHTML;
    thumbnail.parentNode.insertBefore(thumbnail_column, thumbnail);
    thumbnail.remove();
  }

  // Center the overlay text
  var thumbnail_texts = document.getElementsByClassName('thumbnail_text');
  for(var i = 0; i < thumbnail_texts.length; i++) {
    var thumbnail_text = thumbnail_texts[i];
    thumbnail_text.innerHTML =
      "<div class='thumbnail_text_inner'>" +
      thumbnail_text.innerHTML +
      "</div>";
  }
    
  // Define click properties for thumbnails
  var thumbnails = document.getElementsByClassName('thumbnail_container');
  for(var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];

    // If the thumbnail has a link, just wrap it in <a>
    var href = thumbnail.getAttribute('href');
    if (href) {
      var link = document.createElement('a');
      link.href = href;
      link.innerHTML = thumbnail.outerHTML;
      thumbnail.parentNode.insertBefore(link, thumbnail);
      thumbnail.remove();
    } else {
      thumbnail.onclick = launch_modal;
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className == 'modal' ||
      event.target.className == 'modal_container' ||
      event.target.className == 'modal_img') {

    // Remove any containers
    var modal_containers = document.getElementsByClassName('modal_container');
    for (var i = 0; i < modal_containers.length; i++) {
      modal_containers[i].parentNode.style.display = "none";
      modal_containers[i].remove();
    }
  }
}
