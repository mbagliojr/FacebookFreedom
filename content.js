/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
var omittedWords = ["politic", "trump", "obama", "muslim", "abortion", "republican", "democrat", "government", "liberal",
    "conservative", "constitution", "senate", "representatives", "refug", "immigrant", "jihad", "terror"
];

var postsProcessed = 0;

var hideWords = function() {
    var wrappers = document.getElementsByClassName("userContentWrapper");
    for (var j = postsProcessed, z = wrappers.length; j < z; postsProcessed++) {
        var content = "";
        var posts = wrappers[j].getElementsByClassName("_5pbx userContent");
        for (var i = 0, l = posts.length; i < l; i++) {
            for (var o = 0, p = posts[i].children.length; o < p; o++) {
                //for(var r = 0, s = posts[i].children[o].children.length; r < s; r++) {

                //console.log(content);
                if (typeof posts[i].children[o].firstChild.data != 'undefined') {
                    content += posts[i].children[o].firstChild.data;
                }
            }
        }

        var profileLinks = wrappers[j].getElementsByClassName("profileLink");
        for (var i = 0, l = profileLinks.length; i < l; i++) {
            if (typeof profileLinks[i].firstChild != 'undefined') {

                //console.log(content);
                if (typeof profileLinks[i].firstChild.data != 'undefined') {
                    content += profileLinks[i].firstChild.data;

                }
            }
        }

        content += wrappers[j].innerText;

        for (var a = 0, b = omittedWords.length; a < b; a++) {
            if (content.toLowerCase().includes(omittedWords[a])) {
                hidden = true;
                wrappers[j].style.display = "none"
                console.log(omittedWords[a]);
            }
        }
        j++;
    }
}

windoww.addEvhideWords();

window.addEventListener("scroll", function() {
    console.log("SCROLLING");

    hideWords();
});