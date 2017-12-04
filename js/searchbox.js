﻿$(document).ready(function () {
    var contacts = [
    {
        "Name": "World Gourmet Summit 2017",
        "url": "../Events/gourmetsummitinfo.html"
    },{
        "Name": "Singapore Food Festival 2017",
        "url": "../Events/sgfoodfestivalinfo.html"
    },{
        "Name": "International Champions Cup 2017",
        "url": "../Events/championscup.html"
    },{
        "Name": "Singapore Night Festival",
        "url": "../Events/sgnight.html"
    },{
        "Name": "Singapore International Festival of Arts 2017 ",
        "url": "../Events/sifa.html"
    },{
        "Name": "Grand Prix Season Singapore",
        "url": "../Events/gps.html"
    },{
        "Name": "Christmas Wonderland",
        "url": "../Events/cw.html"
    },{
        "Name": "ZoukOut",
        "url": "../Events/zoukoutinfo.html"
    },{
        "Name": "Singapore Art Week",
        "url": "../Events/sgaw.html"
    },{
        "Name": "The Great Singapore Sale",
        "url": "../Events/sgs.html"
    },{
        "Name": "Yayoi Kusama Exhibition",
        "url": "../Events/yke.html"
    },{
        "Name": "CIRQUE DU SOLEIL KOOZA",
        "url": "../Events/KOOZA.html"
    }
    ];
    
    for (var i = 0; i < contacts.length; i++)
    {
        // contacts[i].value = contacts[i].firstName + " " + contacts[i].lastName + " " + contacts[i].heroName;
        contacts[i].value = contacts[i].Name;
    }

    $("#search").autocomplete({
        source: contacts,
        minLength: 0,
        // focus: function (event, ui) {                    i dont think this thing need
        //     $("#searchbox").val(ui.item.heroName)
        //     return false;
        // },
        select: function (event, ui) {
            location.href = ui.item.url;
            // location.href = ui.item.imgUrl;
            return false;
        },
    }).autocomplete("instance")._renderItem = function (ul, item) {
        var $li = $("<li>");
        $li.addClass("searchItem");

        $outerDiv = $("<div>");
        $outerDiv.appendTo($li);

        // $imageDiv = $("<div>");                  i dont think this thing need
        // $imageDiv.addClass("contactImageDiv");
        // $imageDiv.appendTo($outerDiv);

        // $img = $("<img>");
        $img = $("<a>");
        // $img.addClass("contactImage");
        $img.addClass("url");
        $img.attr("src", item.url);
        // $img.attr("src", item.imgUrl);
        // $img.appendTo($imageDiv);                    so that pic cant see

        $name = $("<div>");
        $name.addClass("nameDiv");
        $name.append(item.Name + " " + "<br/><span style='font-style:italic'>" + "</span>");
        // $name.append(item.firstName + " " + item.lastName + "<br/><span style='font-style:italic'>" + item.heroName + "</span>");
        $name.appendTo($outerDiv);

        $li.appendTo(ul);

        return $li;
    };

})