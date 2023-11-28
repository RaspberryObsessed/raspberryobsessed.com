hello...?
why are you reading this? this is only for the dev (me, rasp)

anyways the script that this file is talking about, navbar-loader.js, is currently on a "mode" it just adds the content to .navbar to all of the pages using this rather than deleting the coments and script sources such as:
"<!--navbar loader script should add it here-->
<!--⬇️navbar loader⬇️(yes im putting emojis in the code for fun)-->
<script src="/navbar/navbar-loader.js"></script>"

to change this change the line in the "navbar-loader.js" where its "nav.innerHTML+=data" to "nav.innerHTML=data" this will just change the divs ellement completely rather than adding to it, this might be good but for now its going to stay on the adding mode thing