function doSomething() {
    document.getElementById("title").innerHTML = "Generating Headline";
    document.getElementById("blurb").className = "fadeOut";
    document.getElementById("action").className = "fadeOut";
    document.getElementById("share").className = "fadeOut";

    // Do something crazy here in the future
    setTimeout(function () { showResult(); }, 2000);
}

function showResult() {
    document.getElementById("title").innerHTML = "Making a New Year's Resolution? Don't Go to War With Yourself";
    document.getElementById("title").className = "fadeIn";

    document.getElementById("blurb").style.display = "none";

    document.getElementById("action").innerHTML = "Make More News";
    document.getElementById("action").className = "fadeIn";

    document.getElementById("share").href = "https://twitter.com/intent/tweet?text=" + document.getElementById("title").innerHTML + " " + window.location.href
    document.getElementById("share").style.display = "block";
    document.getElementById("share").className = "fadeIn";
}