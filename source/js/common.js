function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

$(function() {
    var idx = random(backArray.length - 1);
    $.backstretch("/images/background/" + backArray[idx]);
    console.log("/images/background/" + backArray[idx]);
});
