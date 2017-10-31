var app = angular.module('mobilePlanApp', []);
app.controller('mobilePlanController', function($scope) {
    $scope.user = false;
    $scope.line = 1;
    $scope.plan1_int = '24';
    $scope.plan1_dec = '.99';
    $scope.plan2_int = '39';
    $scope.plan2_dec = '.99';
    $scope.plan1_tex = '1 Mobile Line+ 1 TV + Home Phone';
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
    $scope.checkChinaSimEx = function(){
        updatePrice($scope.user, $scope.line);
    };
    var updatePrice = function(isUser, lineNumber){
         if ( isUser == false ){
            if ( lineNumber == 1) {
                $scope.plan1_int = '24';
                $scope.plan2_int = '39';
                $scope.plan1_tex = '1 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=1");
    
            }
            else if ( lineNumber == 2) {
                $scope.plan1_int = '44';
                $scope.plan2_int = '74';
                $scope.plan1_tex = '2 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=2");

            }
            else if ( lineNumber == 3) {
                $scope.plan1_int = '59';
                $scope.plan2_int = '109';
                $scope.plan1_tex = '3 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=3");
  
            }
            else if ( lineNumber == 4) {
                $scope.plan1_int = '74';
                $scope.plan2_int = '144';
                $scope.plan1_tex = '4 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=4");

            }
            else if ( lineNumber == 5) {
                $scope.plan1_int = '89';
                $scope.plan2_int = '179';
                $scope.plan1_tex = '5 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=5");
 
            }
            else if ( lineNumber == 6) {
                $scope.plan1_int = '104';
                $scope.plan2_int = '214';
                $scope.plan1_tex = '6 Mobile Line+ 1 TV + Home Phone';
                // checkChinaSim(parent.location.hash = "?isUser=false?line=6");

            }
        }
    };
    // var checkChinaSim = function(currentHash) {
    //     if( $(window).width() > 767 ){
    //         if( $('#chinaSimCardCheckbox').is(':checked') && $('#chinaSimCardCheckbox2').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=true?chinaSimCard2=true';
    //         }
    //         else if( $('#chinaSimCardCheckbox').is(':checked') && !$('#chinaSimCardCheckbox2').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=true?chinaSimCard2=false';
    //         }
    //         else if( !$('#chinaSimCardCheckbox').is(':checked') && $('#chinaSimCardCheckbox2').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=false?chinaSimCard2=true';
    //         }
    //         else{
    //             parent.location.hash = currentHash + '?chinaSimCard1=false?chinaSimCard2=false';
    //         }
    //     }
    //     else{
    //         if( $('#chinaSimCardCheckbox3').is(':checked') && $('#chinaSimCardCheckbox4').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=true?chinaSimCard2=true';
    //         }
    //         else if( $('#chinaSimCardCheckbox3').is(':checked') && !$('#chinaSimCardCheckbox4').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=true?chinaSimCard2=false';
    //         }
    //         else if( !$('#chinaSimCardCheckbox3').is(':checked') && $('#chinaSimCardCheckbox4').is(':checked') ){
    //             parent.location.hash = currentHash + '?chinaSimCard1=false?chinaSimCard2=true';
    //         }
    //         else{
    //             parent.location.hash = currentHash + '?chinaSimCard1=false?chinaSimCard2=false';
    //         }
    //     }
    // };
});