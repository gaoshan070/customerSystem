$().ready(function() {
    validateRule();
});

$.validator.setDefaults({
    submitHandler : function() {
        update();
    }
});
function update() {
    $.ajax({
        cache : true,
        type : "POST",
        url : "/note/update",
        data : $('#noteForm').serialize(),// formid
        async : false,
        error : function(request) {
            parent.layer.alert("Connection error");
        },
        success : function(r) {
            if (r.code == 1) {
                parent.layer.msg(r.msg);
                parent.reLoad();
                var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
                parent.layer.close(index);
            } else {
                parent.layer.alert(r.msg)
            }
        }
    });
}

function validateRule() {
    var icon = "<i class='fa fa-times-circle'></i> ";
    $("#noteForm").validate({
        rules : {
            noteContent : {
                required : true
            }
        },
        messages : {
            noteContent : {
                required : icon + "Please input the content"
            },
        }
    })
}