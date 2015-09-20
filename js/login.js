/**
 * Created by LJP on 2015/6/27.
 */
function managerLogin(){
    var action="../php/login.php";
    var form_data = {
        username:$("#username").val(),
        password:$("#password").val()
    };

    window.location ='../manager.html';

    $.ajax({
        type:"POST",
        url:action,
        data:form_data,
        dataType:"json",
        success:function(response)
        {
            console.log("success");
            if(response.success == true){
                $(".login_wrap").slideUp('slow', function(){
                    window.location ='../manager.html';
                });
            } else {
                console.log(response.message);
                //$("#message").html(response.message);
            }
        },
        error:function(jqXHR) {
            alert("发生错误："+jqXHR.status);
        }
    });
    return false;
}


$(function(){
    $("#login").click(managerLogin);
});
