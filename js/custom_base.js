// 【共通】ハンバーガーメニューの切替イベント(Bootstrap/Offcanvasの使用前提)
$(document).ready(function() {
    let isHiddenIgnition = true;
    $('#sidebar-toggle-btn').on('click', function() {
        
        // 【DEBUG】確認用
        // console.log('click');
        // console.log(isHiddenIgnition);

        const topbar = $('.topbar');
        const icon = $('#sidebar-toggle #sidebar-toggle-icon');
        if (icon.hasClass('open')) {
            icon.removeClass('open'); // クローズボタンからハンバーガーボタンに切り替え
            if (!topbar.hasClass('shadow-sm')) {
                topbar.addClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
            }
            // Closeボタンイベントが動いた際はhiddenイベントは不要
            isHiddenIgnition = false;
        } else {
            icon.addClass('open'); // ハンバーガーボタンからクローズボタンに切り替え
            if (topbar.hasClass('shadow-sm')) {
                topbar.removeClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
            }
        }
    });
    $('#offcanvas').on('hidden.bs.offcanvas', function () {
        
        // 【DEBUG】確認用
        // console.log('hidden');
        // console.log(isHiddenIgnition);

        if (isHiddenIgnition) {
            const topbar = $('.topbar');
            const icon = $('#sidebar-toggle #sidebar-toggle-icon');
            if (icon.hasClass('open')) {
                icon.removeClass('open'); // クローズボタンからハンバーガーボタンに切り替え
                if (!topbar.hasClass('shadow-sm')) {
                    topbar.addClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
                }
            } else {
                icon.addClass('open'); // ハンバーガーボタンからクローズボタンに切り替え
                if (topbar.hasClass('shadow-sm')) {
                    topbar.removeClass('shadow-sm'); // ハンバーガーメニューを開く際はシャドウも切り替え
                }
            }
        }
        // trueに戻す
        isHiddenIgnition = true;
    });
});

(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  })();