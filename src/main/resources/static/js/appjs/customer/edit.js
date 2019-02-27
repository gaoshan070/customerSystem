var prefix = "/customer";
$().ready(function() {
    $("#saveBtn").click(function() {
        update();
    });
});

function update() {
    $.ajax({
        cache : true,
        type : "POST",
        url : prefix + "/update",
        data : $('#customerForm').serialize(),// 你的formid
        async : false,
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            if (data.code == 1) {
                parent.layer.msg(data.msg);
                parent.reLoad();
                var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
                parent.layer.close(index);
            } else {
                parent.layer.msg(data.msg);
            }

        }
    });
}