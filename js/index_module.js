define([], function () {
    return {
        init: function () {
            //链接鼠标移入蓝色字体
            $('a').mouseover(function () {
                $(this).css('color', 'skyblue');
            })
            $('a').mouseout(function () {
                $(this).css('color', '#000');
            })
            //渲染二级菜单  手机板块
            const $sce1 = $('.sec-menu-wrap ul');
            $.ajax({
                    url: "http://192.168.13.39/exercise/php/secdata.php",
                    dataType: "json"
                })
                .done((data) => {
                    let $renderdata = data;
                    let $strhtml = "";
                    $.each($renderdata, function (index, value) {
                    $strhtml += `
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
                });
            //渲染二级菜单
            const $sce2 = $('.sec-menu-wrap2 ul');
            $.ajax({
                    url: "http://192.168.13.39/exercise/php/sec2data.php",
                    dataType: "json"
                })
                .done((data) => {
                    let $renderdata = data;
                    let $strhtml = "";
                    $.each($renderdata, function (index, value) {
                    $strhtml += `
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
            // //鼠标移入显示二级菜单
            $('.menu-link-d').mouseover(function () {
                $('.header-wrap-sub').slideDown("800", function () {

                });
                $('.sec-menu').eq($(this).index()).show().siblings('.sec-menu').hide();
            })
            //鼠标移入非 li（.menu-link-d） 二级菜单隐藏
            $($('.menu-link').not('.menu-link-d')).mouseout(function () {
                $('.header-wrap-sub').hide();
                $('.sec-menu').hide();

            })
            //鼠标移入已显示的二级菜单，保持显示
            $('.header-wrap-sub').mouseover(function () {
                $(this).show();
            })
            //鼠标移出已显示的二级菜单消失
            $('.header-wrap-sub').mouseout(function () {
                $('.header-wrap-sub').hide();
            })
            //APP下载
            $('#APPdownload').mouseover(function () {
                $('.header-wrap-sub-APPdownload').slideDown("1000", function () {});
            });
            $('#APPdownload').mouseout(function () {
                $('.header-wrap-sub-APPdownload').hide();
            })
            // //当鼠标在已经显示的APPdownload中依然显示
            $('.header-wrap-sub-APPdownload').mouseover(function () {
                $(this).show();
            })
            //个人用户
            $('.header-wrap-user').mouseover(function () {
                $(this).children('ul').show();
            })
            $('.header-wrap-user').mouseout(function () {
                $(this).children('ul').hide();
            })
            //轮播图
            

            // const oBannerPic = $('.banner-list .bannerpic', true);
            // const oBannerBtn = $('.banner-btn li', true);
            // var t = null;
            // let index = 0;
            // //自动播放
            // t = setInterval(auto, 3000);
            // function auto() {
            //     index++;
            //     if (index > 4) {
            //         index = 0;
            //     }
            //     $('.bannerpic').eq(index).fadeIn(3000).siblings().fadeOut(3000);
            //     // $('.bannerpic').eq(index).css('opacity',1).siblings().css('opacity',0);
            // };
            // //点击底部按钮图片切换
            // $(".banner-btn li").click(function () {
            //     var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
            //     // console.log(index);
            //     $(".bannerpic").eq(index).fadeIn(3000).siblings().fadeOut(3000); // siblings  找到 兄弟节点(不包括自己）
            // });
            // // 上一张、下一张切换
            // $("#left").click(function () {
            //     index--;
            //     if (index < 0) {
            //         index = 4
            //     }
            //     // console.log(index);
            //     $(".bannerpic").eq(index).fadeIn(3000).siblings().fadeOut(3000); // siblings  找到 兄弟节点(不包括自己）必须要写
            // }); // $(".bannerpic")获取到的是一个数组集合 。所以可以用index来控制
            // $("#right").click(function () {
            //     index++;
            //     if (index > 4) {
            //         index = 0
            //     }
            //     // console.log(index);
            //     $(".bannerpic").eq(index).fadeIn(3000).siblings().fadeOut(3000);
            // });
            // // 鼠标移入轮播图，暂停
            // $('#banner').mouseover(function(){
            //     clearInterval(t);
            // })
            // // 鼠标移入移出轮播图，播放
            // $('#banner').hover(
            //     //移入
            //     function () {
            //         clearInterval(t);
            //     },
            //     //移出
            //     function () {
            //         t = setInterval(auto, 3000);

            //         function auto() {
            //             index++;
            //             if (index > 4) {
            //                 index = 0;
            //             }
            //             $('.bannerpic').eq(index).fadeIn(3000).siblings().fadeOut(3000);
            //         };
            //     }
            // );
            //回到顶部按钮的显示和隐藏
            function goTopHide() {
                $(document).scrollTop() > 800 ?
                    $(".gotop").show() : $(".gotop").hide();
            }
            $(window).scroll(function () {
                goTopHide()
            });
            $(".gotop").click(function () {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    300);
                return false;
            });
        }
    }
});