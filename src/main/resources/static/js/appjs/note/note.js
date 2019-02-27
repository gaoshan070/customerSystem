var prefix = "/note";
$(function() {
    load();
});

function load() {
    var customerId = $("#customerId").val();
    $('#noteTable')
        .bootstrapTable(
            {
                method : 'get',
                url : prefix + "/list",
                iconSize : 'outline',
                striped : true,
                dataType : "json",
                pagination : true,
                singleSelect : false,
                pageSize : 10,
                pageNumber : 1,
                showColumns : false,
                sidePagination : "server",
                queryParams : function(params) {
                    return {
                        customerId: customerId,
                        limit : params.limit,
                        offset : params.offset
                    };
                },
                columns : [
                    {
                        field : 'noteId', // field name
                        title : 'NoteId' // title
                    },
                    {
                        field : 'noteContent',
                        title : 'NoteContent'
                    },
                    {
                        field : 'createDate',
                        title : 'CreateDate'
                    },
                    {
                        field : 'updateDate',
                        title : 'updateDate'
                    },
                    {
                        title : 'Action',
                        field : 'id',
                        align : 'center',
                        formatter : function(value, row, index) {
                            var e = '<a  class="btn btn-warning btn-sm" href="#" mce_href="#" title="Detail" onclick="edit(\''
                                + row.noteId
                                + '\')"><i class="fa fa-edit "></i></a> ';
                            var d = '<a class="btn btn-danger btn-sm" href="#" title="Remove"  mce_href="#" onclick="remove(\''
                                + row.noteId
                                + '\')"><i class="fa fa-remove"></i></a> ';
                            return e + d;
                        }
                    } ]
            });
}
function reLoad() {
    $('#noteTable').bootstrapTable('refresh');
}

function edit(id) {
    layer.open({
        type : 2,
        title : 'Edit a note',
        maxmin : true,
        shadeClose : false,
        area : [ '800px', '420px' ],
        content : prefix + '/edit/' + id
    });
}

function remove(id){
    alert("Unsupported");
}
function add() {
    var cId = $("#customerId").val();
    layer.open({
        type : 2,
        title : 'Add a note',
        maxmin : true,
        shadeClose : false,
        area : [ '800px', '320px' ],
        content : prefix + '/add/' + cId
    });
}
