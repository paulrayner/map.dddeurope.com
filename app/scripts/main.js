'use strict';

var locations = [
    /* TEMPLATE FOR NEW ENTRY
     {
        title: "",
        position: new google.maps.LatLng(0,0),
        info: new google.maps.InfoWindow({
            content: '<p><strong>TITLE</strong><br/>DESCRIPTION<br/><a href="http://LINK.com">Visit the website</a></p>'
        })
     },
     */
    {
        title: "DDDEU Brussels Conference",
        position: new google.maps.LatLng(50.850340, 4.351710),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain-Driven Design Conference Europe</strong><br/>How are the world’s leading experts applying Domain-Driven Design today? On January 28th & 29th 2016 visit Brussels, Belgium, for a two-day conference, and fuel your passion for tackling complexity in the heart of software.<br/><a href="http://dddeurope.com">Visit the website</a></p>'
        })
    },
    {
        title: "Domain Driven Design Wroclaw Meetup",
        position: new google.maps.LatLng(51.107885, 17.038538),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain Driven Design Wroclaw Meetup</strong><br/>This is a group for people interested in learning and adoption of Domain-Driven Design. We want to share knowledge, ideas and experience. We also want to promote DDD in Wrocław. <br/> <a href="http://www.meetup.com/DDD-WRO/">Visit the Website</a>'
        })
    },
    {
        title: "Domain Driven Design Denver Meetup",
        position: new google.maps.LatLng(39.739236, -104.990251),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain Driven Design Denver Meetup</strong><br/>This is a group for those interested in learning about and adopting DDD, and includes a number of experienced domain-driven design (DDD) practitioners. Our goal is to encourage building a DDD culture in the mile-high region, within its organizations and their teams, and helping you follow through with successful implementations.<br/> <a href="http://www.meetup.com/ddd-denver/">Visit the Website</a>'
        })
    },
    {
        title: "Domain Driven Design Paris Meetup",
        position: new google.maps.LatLng(48.856614, 2.352222),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain Driven Designss Paris Meetup</strong><br/>Ce groupe a pour but de réunir les gens intéressés par l’apprentissage et l’adoption de Domain Driven Design, de partager leur expérience, de discuter des problèmes de design rencontrés et de promouvoir la culture DDD dans les entreprises et leurs équipes. <br/> <a href="http://www.meetup.com/fr/DDD-Paris/">Visit the Website</a>'
        })
    },
    {
        title: "Domain Driven Design Israel Meetup",
        position: new google.maps.LatLng(32.085300, 34.781768),
        info: new google.maps.InfoWindow({
            content: '<p><strong>The Inaugural DDD-IL Meetup</strong><br/>This group is intended to bring together Israeli software professionals(architects, developers, project managers, qa) to meet and discuss DDD principles, practices, and processes.<br/> <a href="http://www.meetup.com/ddd-il/">Visit the Website</a>'
        })
    },
    {
        title: "DDD Belgium Meetup",
        position: new google.maps.LatLng(50.830340, 4.351710),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain-Driven Design Belgium Meetup</strong><br/>We are a group of software developers, ranging from noobs to veterans, who meet up regularly at different places in Belgium. We aim to spread the ideas of Domain-Driven Design, and become better Software Craftsmen, by teaching and learning. We are technology-agnostic. We are open, self-organized, and inclusive.<br/><a href="http://www.meetup.com/dddbelgium/">Visit the website</a></p>'
        })
    },
    {
        title: "Copenhagen Domain Driven Design Meetup",
        position: new google.maps.LatLng(55.676097, 12.568337),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain-Driven Design Copenhagen Meetup</strong><br/>We meet to discuss the theory and practice of Domain Driven Design.<br/><a href="http://www.meetup.com/Copenhagen-Domain-Driven-Design-Meetup/">Visit the website</a></p>'
        })
    },
    {
        title: "Domain Driven Design Copenhagen Meetup",
        position: new google.maps.LatLng(55.676097, 12.568337),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain-Driven Design Copenhagen Meetup</strong><br/>We meet to discuss the theory and practice of Domain Driven Design.<br/><a href="http://www.meetup.com/Copenhagen-Domain-Driven-Design-Meetup/">Visit the website</a></p>'
        })
    },
    {
        title: "Domain Driven Design Kraków Meetup",
        position: new google.maps.LatLng(50.064650, 19.944980),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Domain-Driven Design Kraków Meetup</strong><br/>This is a group for people interested in learning and adoption of Domain-Driven Design. We want to share knowledge, ideas and experience. We also want to promote DDD in Kraków. Join us to discuss benefits and trade-offs, that DDD gives.<br/><a href="http://www.meetup.com/DDD-KRK/">Visit the website</a></p>'
        })
    },
    {
        title: "CQRS Beers in Den Haag",
        position: new google.maps.LatLng(52.070498, 4.300700),
        info: new google.maps.InfoWindow({
            content: '<p><strong>CQRS Beers in Den Haag</strong><br/>An informal beers and chats about Domain-Driven Design, Event Sourcing, Command Query Responsibility Segregation. This is a part of "Global Day of CQRS Beers".<br/><a href="http://www.meetup.com/CQRS-Beers-in-Den-Haag/">Visit the website</a></p>'
        })
    },
    {
        title: "NYC Domain-Driven Design User Group",
        position: new google.maps.LatLng(40.712784, -74.005941),
        info: new google.maps.InfoWindow({
            content: '<p><strong>NYC Domain-Driven Design Meetup</strong><br/>Meet other local people in NYC interested in Domain-Driven Design, learn more about it, exchange experiences, discuss current design problems, etc..<br/><a href="http://www.meetup.com/dddnyc/">Visit the website</a></p>'
        })
    },
    {
        title: "BDD London",
        position: new google.maps.LatLng(51.507351, -0.127758),
        info: new google.maps.InfoWindow({
            content: '<p><strong>BDD Londen Meetup</strong><br/>Behaviour Driven Development (BDD) is a way to develop software through a constant communication with stakeholders in form of examples; examples of how this software should help them, and you, to achieve your goals. <br/><a href="http://www.meetup.com/BDDLondon/">Visit the website</a></p>'
        })
    },
    {
        title: "Frankfurt Software Architecture Meetup",
        position: new google.maps.LatLng(50.110922, 8.682127),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Frankfurt Software Architecture Meetup</strong><br/>This group is for anyone interested in the architecture of software systems. I started this group to create a place where software engineers and architects can share their learnings and discuss topics related to software architecture.<br/><a href="http://www.meetup.com/Frankfurt-Software-Architecture-Meetup/">Visit the website</a></p>'
        })
    },
    {
        title: "Monster on Rails - Web Development Meetup Münster",
        position: new google.maps.LatLng(51.960665, 7.626135),
        info: new google.maps.InfoWindow({
            content: '<p><strong>Monster on Rails - Web Development Meetup Münster</strong><br/>Monster on Rails was originally founded as Ruby on Rails Usergroup Münster. Since there are many corresponding technologies around in Ruby sphere we are dealing many topics like Ruby, Ruby on Rails, Sinatra, Software Architecture, Frontend Performance, Javascript in general, backbone.js, node.js, NoSQL, so on. Usually we meet monthly.<br/><a href="http://www.meetup.com/de/Monster-on-Rails-Web-Development-Meetup-Muenster/">Visit the website</a></p>'
        })
    },
];

function initialize() {
    var mapOptions = {
        center: {
            lat: 50.850340,
            lng: 4.351710
        },
        zoom: 6
    };

    var mapCanvas = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    locations.map(function (location) {
        var marker = new google.maps.Marker(location);
        google.maps.event.addListener(marker, 'click', function () {
            marker.info.open(marker.get('map'), marker);
        });
        marker.setMap(mapCanvas);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);