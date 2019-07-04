$(function() {
    //查询英雄信息接口
    fetch('http://127.0.0.1:5003/getallheros').then(function(data) {
        return data.json()
    }).then(function(res) {
        if (res.status !== 200) {
            alert('err');
            return
        }
        //  console.log(res);

        let html = template('chaxun', res)
        $('tbody').html(html);
    })

    let flag = true;
    let index;
    //添加英雄or修改英雄
    $('#addhroes').on('click', function() {
            let name = $("[name='name']").val(),
                gender = $("[name='gender']").val();
            if (flag) {
                //添加
                fetch('http://127.0.0.1:5003/addheros', {
                    method: 'post',
                    body: `name=${name}&gender=${gender}`,
                    // body: "name=" + name + "&gender=" + gender,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(data) {
                    return data.json();
                }).then(function(data) {
                    if (data.status !== 200) {
                        alert('添加失败');
                        return;
                    }
                    location.reload();

                })
            } else {
                //修改英雄
                fetch('http://127.0.0.1:5003/updatayx/' + index, {
                    method: 'post',
                    body: `name=${name}&gender=${gender}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(data) {
                    return data.json();
                }).then(function(data) {
                    if (data.status !== 200) {
                        alert('修改失败');
                        return;
                    }
                    location.reload();

                })
            }
        })
        //bootstr代码当模态框关闭之后清除里面数据(固定代码)
    $('body').on('hidden.bs.modal', '.modal', function() {
        $(this).removeData('bs.modal');
    });
    //删除指定英雄
    $('tbody').on('click', '#del', function() {

        if ($(this).html().trim() == '已删除') {
            return;
        }
        let that = $(this);
        let id = $(this).attr('data-id');
        fetch('http://127.0.0.1:5003/delheros/' + id, {

            method: 'get'

        }).then(function(data) {
            return data.json();

        }).then(function(data) {
            console.log(data);
            if (data.status !== 200) {
                alert('删除失败');
                return;
            }
            if (that.html() === '删除') {
                location.reload();
            }
        })
    })



    //查询指定英雄并填充内容
    $('tbody').on('click', '#updata', function() {

        if ($(this).html().trim() == '不可编辑') {

            return false;
        }

        flag = false;

        index = $(this).attr('data-id');
        console.log(index);

        fetch('http://127.0.0.1:5003/gethores/' + index, {
            method: 'get'
        }).then(function(data) {
            return data.json();
        }).then(function(data) {
            if (data.status !== 200) {
                alert('编辑失败')
                return
            }
            $("[name='name']").val(data.data[0].name)
            $("[name='gender']").val(data.data[0].gender);


        })



    })









    //查询英雄信息接口
    // $.ajax({
    //     url: 'http://127.0.0.1:5003/getallheros',
    //     type: 'get',
    //     dataType: 'json',
    //     success(res) {
    //         if (res.status !== 200) {
    //             alert('数据不见了鸭')
    //             return;
    //         }
    //         //  console.log(res);

    //         let html = template('chaxun', res);
    //         // console.log(html);
    //         $('tbody').html(html);
    //     }
    // })


    // //添加英雄
    // $('#addhroes').on('click', function() {
    //     // console.log($('form').serialize())
    //     $.ajax({
    //         url: 'http://127.0.0.1:5003/addheros',
    //         type: 'post',
    //         dataType: 'json',
    //         data: $('form').serialize(),
    //         success(res) {
    //             if (res.status != 200) {
    //                 alert('添加英雄失败')

    //             }
    //         }
    //     })



    // })
})