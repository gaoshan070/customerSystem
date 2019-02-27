var prefix = "/customer";
$(function() {
    $("#sort").change(function(){
       reLoad();
    });
    $("#order").change(function(){
        reLoad();
    });
    load();
});

function load() {
    $('#customerTable')
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
                        limit : params.limit,
                        offset : params.offset,
                        customerName : $('#customerName').val(),
                        email : $("#email").val(),
                        sort: $("#sort").val(),
                        order: $("#order").val(),
                        status: $("#status").val()
                    };
                },
                columns : [
                    {
                        field : 'customerId',
                        title : 'CustomerID'
                    },
                    {
                        field : 'customerName',
                        title : 'CustomerName'
                    },
                    {
                        field : 'email',
                        title : 'Email'
                    },
                    {
                        field : 'status',
                        title : 'Status',
                        align : 'center',
                        formatter : function(value, row, index) {
                            if (value == '0') {
                                return '<span class="label label-primary">Non-Active</span>';
                            } else if (value == '1') {
                                return '<span class="label label-primary">Current</span>';
                            } else if (value == '2') {
                                return '<span class="label label-primary">Prospective</span>';
                            }

                        }
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
                            var e = '<a  class="btn btn-warning btn-sm" href="#" mce_href="#" title="Detail" onclick="detail(\''
                                + row.customerId
                                + '\')"><i class="fa fa-edit "></i>Detail</a> ';
                            var d = '<a class="btn btn-primary btn-sm" href="#" title="View Notes"  mce_href="#" onclick="viewNotes(\''
                                + row.customerId
                                + '\')"><i class="fa fa-plus"></i>Notes</a> ';
                            return e + d;
                        }
                    } ]
            });
}
function reLoad() {
    $('#customerTable').bootstrapTable('refresh');
}

function detail(id) {
    layer.open({
        type : 2,
        title : 'Customer Details',
        maxmin : true,
        shadeClose : false,
        area : [ '800px', '420px' ],
        content : prefix + '/edit/' + id
    });
}

function viewNotes(id) {
    layer.open({
        type : 2,
        title : 'View notes',
        maxmin : true,
        shadeClose : false,
        area : [ '800px', '520px' ],
        content :  '/note/'+id
    });
}
