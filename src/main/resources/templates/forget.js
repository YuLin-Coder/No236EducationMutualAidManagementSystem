var baseUrl = "http://localhost:8080";
function forget() {
    var name = $("#name").val();
    var phone = $("#phone").val();
    var url = baseUrl + "/forget";
    var obj = {};
    obj.name = name;
    obj.phone = phone;
    $.ajax({
        data:obj,
        url:url,
        type:"POST",
        success:function (msg) {
            if (msg.length != 9){
                $("#password").text(123456);
                $("#password").show();
                $("#font").show();
            }else {
                alert("当前填写信息不对！");
            }

        },
        error:function () {
            alert("系统繁忙！");
        }
    })
}