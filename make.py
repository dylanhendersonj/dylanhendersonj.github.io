#!/usr/bin/env python3

import os

title = "DYLAN HENDERSON"
headers = ["Animation", "Fabrication", "Films", "About"]
fabfolders = ["Plastic Flowers Never Wilt", "Other Shores", "Your Fairy Guidemother"]
icons = [("https://www.instagram.com/dylanjhenderson", "insta.png"),
         ("mailto:dylanhendersonj@gmail.com", "mail.png"),
         ("https://vimeo.com/user81614983", "vimeo.png")]

def parse(folder):
    # Check if there is a readme
    readme = os.path.join(folder, "README.txt")
    if not os.path.isfile(readme):
        return

    # Start an index.html file in the folder
    index = os.path.join(folder, "index.html")
    f = open(index, 'w+')

    # Determine path to root
    root = os.path.relpath('.', folder)
    
    # Write a header
    f.write("<!DOCTYPE html>")
    f.write("<html>")
    f.write("<head>")
    # Add a title
    f.write("<title>" + title + folder[1:] + "</title>")
    # Add style
    f.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"")
    f.write(os.path.join(root, "css/style.css"))
    f.write("\">")
    # Close
    f.write("</head>")
    f.write("<body>")

    # Title
    f.write("<a href=\"" + os.path.join(root, "index.html") + "\"><h1>" + title + "</h1></a>")

    # Header links
    f.write("<h2>")
    for h in headers:
        link = os.path.join(root, h, "index.html")
        f.write("<a href=\"" + link + "\">" + h + "</a>")
        f.write(" &nbsp; ")
    f.write("</h2>")


    #Test
    #m = open(readme, "a")
   # m.write("poop")


    #TODO Content
    with open(readme, 'r') as r:
        for line in r:
            f.write(line)

    #Fabrication 
    if "Fabrication" in folder:
        f.write("<h3>")
        for h in fabfolders:
            link = os.path.join(root, "Fabrication", h, "index.html")
            f.write("<a href=\"" + link + "\">" + h + "</a>")                
            f.write(" &nbsp; ")
        f.write("</h3>")
        #with open(readme, 'r') as r:
         #    for line in r:
          #       f.write(line)

        #fafiles = open(readme, 'r')
        #fcontent = fafiles.readlines()
        #x = fcontent.count("</div>")
        #print (x)
        #if x == 1:
         #   m.write("poop")


    # Footer Icons
    f.write("<div class=\"footer\">")
    for link, img in icons:
        f.write("<a href=\"" + link + "\">")
        f.write("<img src=\"" + os.path.join(root, "media", img) + "\" width=22 height=22/>")
        f.write("</a>")
        f.write(" &nbsp; ")
    f.write("</div>")

    # Make closer
    f.write("</body>")
    f.write("</html>")
    f.close()

if __name__ == "__main__":
    # Parse all README files
    for folder, sub_dirs, files in os.walk('.', topdown=True):
        parse(folder)
