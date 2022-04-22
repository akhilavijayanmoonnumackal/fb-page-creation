$(document).ready(function(){
    $("#application-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            areaCode:{
                required:true,
                minlength:2
            },
            phoneNumber:{
                required:true,
                minlength:2
            },
            add1:{

            },
            messages:{
                fname:{
                    required:"Enter First Name",
                    minlength:"Enter atleast 4 characters"
                }
            }

        }
    })
})
