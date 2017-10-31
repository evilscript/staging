var app = angular.module('mobilePlanApp', []);
app.controller('mobilePlanController', function($scope) {
    $scope.user = false;
    $scope.line = 1;
    $scope.plan1_int = '24';
    $scope.plan1_dec = '.99';
    $scope.plan2_int = '39';
    $scope.plan2_dec = '.99';
    $scope.plan1_tex = '1條手機線+1個電視+1個電話';
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
                $scope.plan1_tex = '1條手機線+1個電視+1個電話';
    
            }
            else if ( lineNumber == 2) {
                $scope.plan1_int = '44';
                $scope.plan2_int = '74';
                $scope.plan1_tex = '2條手機線+1個電視+1個電話';

            }
            else if ( lineNumber == 3) {
                $scope.plan1_int = '59';
                $scope.plan2_int = '109';
                $scope.plan1_tex = '3條手機線+1個電視+1個電話';
  
            }
            else if ( lineNumber == 4) {
                $scope.plan1_int = '74';
                $scope.plan2_int = '144';
                $scope.plan1_tex = '4條手機線+1個電視+1個電話';

            }
            else if ( lineNumber == 5) {
                $scope.plan1_int = '89';
                $scope.plan2_int = '179';
                $scope.plan1_tex = '5條手機線+1個電視+1個電話';
 
            }
            else if ( lineNumber == 6) {
                $scope.plan1_int = '104';
                $scope.plan2_int = '214';
                $scope.plan1_tex = '6條手機線+1個電視+1個電話';

            }
        }
    };
 
});