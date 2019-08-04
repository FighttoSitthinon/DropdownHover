var isOpen = false;
var isClose = true;

$(document).ready(function() {

    $('.dropdown', this).hover(function(){
        if (!isOpen && isClose){
            $('.dropdown-menu', this).slideDown(400, function(){
               this.removeAttribute('style');
               $(this).parent( ".dropdown" ).addClass('open');   
               isClose = false;
               isOpen = true;
            });
        }
       
    }, function(){
        if (isOpen && !isClose){
            $('.dropdown-menu', this).slideUp(400, function(){
                this.removeAttribute('style');
                $(this).parent( ".dropdown" ).removeClass('open');   
                isClose = true;
                isOpen = false;
            });
            $('.dropdown-toggle').blur();
        }
    });
});

