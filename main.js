let pages = {
    0: "index.html",
    1: "poems.html",
    2: "words.html"
}
function page(x) {
    window.location.replace(pages[x]);
}