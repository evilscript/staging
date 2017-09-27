var app = angular.module('mobilePlanApp', []);
app.controller('mobilePlanController', function($scope) {
    $scope.user = false;
    $scope.line = 1;
    $scope.plan1_int = '30';
    $scope.plan1_dec = '    ';
    $scope.plan2_int = '45';
    $scope.plan2_dec = '    ';
    parent.location.hash = "?isUser=false?line=1";
    $scope.isUser = function(){
        $scope.user = true;
        $('.ifCustomerLeftText').removeClass('ifCustomerSelected');
        $('.ifCustomerRightText').addClass('ifCustomerSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.isNotUser = function(){
        $scope.user = false;
        $('.ifCustomerRightText').removeClass('ifCustomerSelected');
        $('.ifCustomerLeftText').addClass('ifCustomerSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line1 = function(){
        $scope.line = 1;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line1').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line2 = function(){
        $scope.line = 2;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line2').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line3 = function(){
        $scope.line = 3;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line3').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line4 = function(){
        $scope.line = 4;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line4').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line5 = function(){
        $scope.line = 5;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line5').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    $scope.line6 = function(){
        $scope.line = 6;
        $('.lineSelectText').removeClass('lineSelectSelected');
        $('.line6').addClass('lineSelectSelected');
        updatePrice($scope.user, $scope.line);
    };
    var updatePrice = function(isUser, lineNumber){
        if ( isUser == true ){
            if ( lineNumber == 1) {
                $scope.plan1_int = '20';
                $scope.plan2_int = '35';
                parent.location.hash = "?isUser=true?line=1";
            }
            else if ( lineNumber == 2) {
                $scope.plan1_int = '40';
                $scope.plan2_int = '70';
                parent.location.hash = "?isUser=true?line=2";
            }
            else if ( lineNumber == 3) {
                $scope.plan1_int = '55';
                $scope.plan2_int = '105';
                parent.location.hash = "?isUser=true?line=3";
            }
            else if ( lineNumber == 4) {
                $scope.plan1_int = '70';
                $scope.plan2_int = '140';
                parent.location.hash = "?isUser=true?line=4";
            }
            else if ( lineNumber == 5) {
                $scope.plan1_int = '85';
                $scope.plan2_int = '175';
                parent.location.hash = "?isUser=true?line=5";
            }
            else if ( lineNumber == 6) {
                $scope.plan1_int = '100';
                $scope.plan2_int = '210';
                parent.location.hash = "?isUser=true?line=6";
            }
        }
        else if ( isUser == false ){
            if ( lineNumber == 1) {
                $scope.plan1_int = '30';
                $scope.plan2_int = '45';
                parent.location.hash = "?isUser=false?line=1";
            }
            else if ( lineNumber == 2) {
                $scope.plan1_int = '60';
                $scope.plan2_int = '90';
                parent.location.hash = "?isUser=false?line=2";
            }
            else if ( lineNumber == 3) {
                $scope.plan1_int = '80';
                $scope.plan2_int = '135';
                parent.location.hash = "?isUser=false?line=3";
            }
            else if ( lineNumber == 4) {
                $scope.plan1_int = '100';
                $scope.plan2_int = '180';
                parent.location.hash = "?isUser=false?line=4";
            }
            else if ( lineNumber == 5) {
                $scope.plan1_int = '120';
                $scope.plan2_int = '225';
                parent.location.hash = "?isUser=false?line=5";
            }
            else if ( lineNumber == 6) {
                $scope.plan1_int = '140';
                $scope.plan2_int = '270';
                parent.location.hash = "?isUser=false?line=6";
            }
        }
    };
});