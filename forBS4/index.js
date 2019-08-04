var isOpen = false;
var isClose = true;

$(document).ready(function() {

    $('.dropdown').hover(function(){
        if (!isOpen && isClose){
            $('.dropdown-menu', this).slideDown(400, function(){
               this.removeAttribute('style');
               $(this).parent( ".dropdown" ).addClass('show');
               $(this).addClass('show');
               isClose = false;
               isOpen = true;
            });
        }
       
    }, function(){
        if (isOpen && !isClose){
            $('.dropdown-menu', this).slideUp(400, function(){
                this.removeAttribute('style');
                $(this).parent( ".dropdown" ).removeClass('show');
                $(this).removeClass('show');
                isClose = true;
                isOpen = false;
            });
            $('.dropdown-toggle').blur();
        }

    });
});

