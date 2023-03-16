URL:https://sff2023.mapyourshow.com/8_0/exhview/index.cfm?orsearchtype0=exhibitor&orsearchvalue0=1311&orsearchdisplay0=Exhibitor&orsearchvaluedisplay0=White%20Coffee%20Corp.&selectedBooth=2736
Code:

function loadRawExhibitors(target, offset) {
    function getSearch() {
        var match = window.location.href.match(/searchtype\/show\/search\/(.+?)\//);
        return match ? decodeURI(match[1]) : null;
    }

    var search = getSearch();
    var data = search ? {
        action: "search",
        search: search,
        searchtype: "show",
        show: "all"
    } : {
        action: "search",
        search: "*",
        searchtype: "exhibitoralpha",
        start: offset || 0,
        show: "exhibitor"
    }

    $.get(window.location.origin + "/8_0/ajax/remote-proxy.cfm", data).done((e) => {
        var ex = e.DATA.results.exhibitor;

        target.push.apply(target, ex.hit);

        if (target.length < ex.found) {
            loadRawExhibitors(target, target.length);
        }
    });

};
window.rawExhibitors = [];
loadRawExhibitors(window.rawExhibitors);
console.log(window.rawExhibitors)