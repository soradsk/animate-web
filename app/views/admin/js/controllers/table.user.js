/**
 * Created by SoRa on 2016/12/16 0016.
 */
app.controller('TableUserCtrl',function($scope,$http,$state,$compile){
    var lang = {
        "sProcessing": "处理中...",
        "sLengthMenu": "每页 _MENU_ 项",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
        "sInfoEmpty": "当前显示第 0 至 0 项，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页",
            "sJump": "跳转"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    };
    var table = {
        title:"用户列表",
        tableHead:["用户名","邮箱","用户类型","最后登录日期","操作"]
    }
    $scope.table = table;
    $scope.dataTable = {};
    $scope.dataTable.language = lang;
    $scope.toAlter = function(id){
        $state.go('app.form.user',{userId:id});
    }
    $scope.toDel = function(id){
        layer.confirm('确认删除？', {
            btn: ['确认','取消'] //按钮
        }, function(){
            $http({url:"/admin/user/del",method:"POST",data:{_id:id}})
                .success(function(data){
                    layer.msg(data.msg);
                    $state.reload();
                })
                .error(function(){
                    layer.msg("网络出错！");
                })
        }, function(){

        });

    }
})
