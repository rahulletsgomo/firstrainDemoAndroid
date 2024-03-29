var landingPageScroll;
var documentDetailsScroll;

function loaded() {
    var wrapperWidth = $("#homePage").css("width").split("px", 1);
    console.log("Total Width : " + wrapperWidth)
    wrapperWidth -= 30;
    $("#scroller").css("width", ($("ul#thelist").children().length * wrapperWidth) + "px");
    configureIScroll(wrapperWidth)
    landingPageScroll = new iScroll('wrapper', {
        snap:true,
        momentum:false,
        hScrollbar:false,
        vScroll:false,
        snapThreshold:100,
        onScrollEnd:function () {
            getCurrentPage = this.currPageX
            $("#currentDoc").html(getCurrentPage + 1)
        }
    });
}
//        document.addEventListener('DOMContentLoaded', loaded, false);

function configureIScroll(wrapperWidth) {
    var scrollerLiWidth = wrapperWidth - 4;
    $("#scroller li").css("width", scrollerLiWidth + "px");
    $("#wrapper").css("width", wrapperWidth + "px");
    var docTitleWidth = wrapperWidth - 50;
    $("#docTitle").css("width", docTitleWidth + "px");
    var docSummary = wrapperWidth - 40;
    $("#docSummary").css("width", docSummary + "px");
}


function scrollDocumentDetails() {
    var containerWidth = $(".newscontainer").css("width");
    var containerHeight = $(".newscontainer").css("height");
    $("#documentDetailsWrapper").css("width", containerWidth)
    $("#documentDetailsScroller").css("width", containerWidth)
    $("#documentDetailsWrapper").css("height", containerHeight)


    documentDetailsScroll = new iScroll('documentDetailsWrapper', {
        vScrollbar:true,
        hScroll:false,
        momentum:true
    });
}


