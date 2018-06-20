var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookListCtrl"
        })
        .when("/kart", {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        })
});

myApp.controller("KartListCtrl", function($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function(book) {
        kartService.buy(book);
    }
});

myApp.factory("kartService", function() {
    var kart = [];

    return {
        getKart: function() {
            return kart;
        },
        addToKart: function(book) {
            kart.push(book);
        },
        buy: function(book) {
            alert("Thanks for buying: ", book);
        }
    }
});

myApp.factory("bookService", function() {
    var books = [
        {
            imgUrl: "adultery1.jpg",
            name: "Adultery",
            price: 205,
            rating: 4,
            binding: "Paperback",
            publisher: "Random House Poland",
            releaseDate: "12-08-2014",
            details: "Linda, in her thirties, begins to question the...."
        },
        {
            imgUrl: "dutch.jpg",
            name: "Dutch",
            price: 300,
            rating: 5,
            binding: "Paperback",
            publisher: "Cookie House",
            releaseDate: "02-03-2012",
            details: "Alexandra, in her thirties, begins to question the...."
        },
        {
            imgUrl: "vegetarian.jpg",
            name: "The Vegetarian",
            price: 199,
            rating: 3,
            binding: "Paperback",
            publisher: "Lollipop",
            releaseDate: "19-09-2016",
            details: "Monica, in her thirties, begins to question the...."
        }
    ];

    return {
        getBooks: function() {
            return books;
        }
    }
});

myApp.controller("HeaderCtrl", function ($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "BooKart";
    $scope.appDetails.tagline = "We have 1 million books for you";

    $scope.nav = {};
    $scope.nav.isActive = function(path) {
        if (path === $location.path()) {
            return true;
        }
        return false;
    }
    });

myApp.controller("BookListCtrl", function ($scope, bookService, kartService) {
    $scope.books = bookService.getBooks();

    $scope.addToKart = function (book) {
        kartService.addToKart(book);
    }
});
