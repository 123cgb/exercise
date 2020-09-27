//渲染二级菜单  手机板块
const $sce1=$('.sec-menu-wrap ul');
$.ajax({
    url:"http://192.168.13.39/exercise/php/secdata.php",
    dataType:"json"
})
.done((data)=>{
    let $renderdata=data;
    let $strhtml="";
    $.each($renderdata,function(index,value){
        $strhtml +=`
            <li>
                <a href="">
                    <img src="${value.url}">
                    <span>${value.title}</span>
                    <p>${value.price}</p>
                </a>
            </li>
        `;
    })
    $sce1.html($strhtml);
})
//渲染二级菜单
const $sce2=$('.sec-menu-wrap2 ul');
$.ajax({
    url:"http://192.168.13.39/exercise/php/sec2data.php",
    dataType:"json"
})
.done((data)=>{
    let $renderdata=data;
    let $strhtml="";
    $.each($renderdata,function(index,value){
        $strhtml +=`
            <li>
                <a href="">
                    <img src="${value.url}">
                    <span>${value.title}</span>
                    <p>${value.price}</p>
                </a>
            </li>
        `;
    })
    $sce2.html($strhtml);
})

//链接鼠标移入蓝色字体
$('a').mouseover(function(){
    $(this).css('color','skyblue');
})
$('a').mouseout(function(){
    $(this).css('color','#000');
})
// //鼠标移入显示二级菜单
$('.header-wrap-menu .menu-link-d').mouseover(function(){
    $('.header-wrap-sub').show();
    $('.sec-menu').eq($(this).index()).show().siblings('.sec-menu').hide();
})
// $('.header-wrap-menu .menu-link').mouseout(function(){
//     $('.header-wrap-sub').hide();
// })
$('.sec-menu').mouseout(function(){
    $('.header-wrap-sub').hide();
})
//APP下载
$('#APPdownload').mouseover(function(){
    $('.header-wrap-sub-APPdownload').show();
})
$('#APPdownload').mouseout(function(){
    $('.header-wrap-sub-APPdownload').hide();
})
//个人用户
$('.header-wrap-user').mouseover(function(){
    $(this).children('ul').show();
})
$('.header-wrap-user').mouseout(function(){
    $(this).children('ul').hide();
})
