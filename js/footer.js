// Create a footer element
var footer = document.createElement('footer');
footer.className = "footer";
document.body.appendChild(footer);

// Add icons
function add_icon(f, href, img_src) {
  var img = document.createElement('img');
  img.src = img_src;
  img.width = 22;
  img.height = 22;
  img.className = "footer_img";
  var link = document.createElement('a');
  link.href = href;
  link.appendChild(img);
  f.appendChild(link);
  var br = document.createElement("br");
  f.appendChild(br);
}
add_icon(footer, "https://www.instagram.com/dylanjhenderson", "../media/insta.png");
add_icon(footer, "mailto:dylanjhendersonj@gmail.com", "../media/mail.png");
add_icon(footer, "https://vimeo.com/user81614983", "../media/vimeo.png");
