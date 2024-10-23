// 【共通】ハンバーガーメニューの切替イベント(Bootstrap/Offcanvasの使用前提)
$(document).ready(function() {
    let isHiddenIgnition = true;
    $('#sidebar-toggle-btn').on('click', function() {
        
        // 【DEBUG】確認用
        // console.log('click');
        // console.log(isHiddenIgnition);

        const topbar = $('.topbar');
        const icon = $('#sidebar-toggle #sidebar-toggle-icon');
        if (icon.hasClass('navbar-toggler-icon')) {
            icon.removeClass('navbar-toggler-icon').addClass('bi bi-x-lg'); // ハンバーガーボタンからクローズボタンに切り替え
            topbar.toggleClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
        } else {
            icon.removeClass('bi bi-x-lg').addClass('navbar-toggler-icon'); // クローズボタンからハンバーガーボタンに切り替え
            topbar.toggleClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
            // Closeボタンイベントが動いた際はhiddenイベントは不要
            isHiddenIgnition = false;
        }
    });
    $('#offcanvas').on('hidden.bs.offcanvas', function () {
        
        // 【DEBUG】確認用
        // console.log('hidden');
        // console.log(isHiddenIgnition);

        if (isHiddenIgnition) {
            const topbar = $('.topbar');
            const icon = $('#sidebar-toggle #sidebar-toggle-icon');
            if (icon.hasClass('navbar-toggler-icon')) {
                icon.removeClass('navbar-toggler-icon').addClass('bi bi-x-lg'); // ハンバーガーボタンからクローズボタンに切り替え
                if (topbar.hasClass('shadow-sm')) {
                    topbar.removeClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
                }
            } else {
                icon.removeClass('bi bi-x-lg').addClass('navbar-toggler-icon'); // クローズボタンからハンバーガーボタンに切り替え
                if (!topbar.hasClass('shadow-sm')) {
                    topbar.addClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
                }
            }
        }
        // trueに戻す
        isHiddenIgnition = true;
    });
});
