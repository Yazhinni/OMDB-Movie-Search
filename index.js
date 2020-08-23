jQuery(function($) { $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
    event.preventDefault();
    $(this).lightboxgallery({
      showCounter: true,
      showTitle: true,
      showDescription: true
    });
  });
});


angular.module('MovieApp', [])
.controller("MovieAppCtrl", ['$http', '$scope', function($http, $scope) {
                    $scope.MovieData = [];
                    $scope.Search = null;
                    $scope.GetMoviesData = function() {
                      try {
                        $http({ url: 'http://www.omdbapi.com/?apikey=3e8d9048&s='+$scope.Search,
                                method: "GET",
                            }).then(function(payload) {
                                    $scope.MovieData = payload.data;},
                            function(){
								alert("Something is wrong. Please try again.");
								        });
                        } 
                        catch (error) {
                            alert("Exception occured while fetching movie data.");
                        }
                    }
                }
            ]);
        angular.element(function() {
            angular.bootstrap(document, ['MovieApp']);
        });