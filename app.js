var HeaderCtrl = function ($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We have 1 million books for you"
    };
};

var BookListCtrl = function ($scope) {
    $scope.books = [
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
            imgUrl: "going-back.jpg",
            name: "Going Back",
            price: 300,
            rating: 5,
            binding: "Paperback",
            publisher: "Cookie House",
            releaseDate: "02-03-2012",
            details: "Alexandra, in her thirties, begins to question the...."
        },
        {
            imgUrl: "something-stupid.jpg",
            name: "Something Stupid",
            price: 199,
            rating: 3,
            binding: "Paperback",
            publisher: "Lollipop",
            releaseDate: "19-09-2016",
            details: "Monica, in her thirties, begins to question the...."
        }
    ];
    $scope.addToKart = function (book) {
        console.log("add to kart: ", book);
    }
};