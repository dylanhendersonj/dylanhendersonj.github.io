// Create a navigation element
var navigation = document.createElement('div');
document.body.appendChild(navigation);

// Make the title
var title = document.createElement('a');
title.innerHTML = "<h1>DYLAN HENDERSON</h1>";
title.href = "/index.html";
navigation.appendChild(title);

// Create the headers
var headers = document.createElement('h2');
navigation.appendChild(headers);
function make_header(h, name, href) {
  var link = document.createElement('a');
  link.innerHTML = name;
  link.href = href;
  h.appendChild(link);
  // Add whitespace
  h.innerHTML += '&nbsp;&nbsp;';
}
make_header(headers, "Animation", "/Animation/index.html");
make_header(headers, "Fabrication", "/Fabrication/index.html");
make_header(headers, "Lighting", "/Lighting/index.html");
make_header(headers, "Films", "/Films/index.html");
make_header(headers, "About", "/About/index.html");
