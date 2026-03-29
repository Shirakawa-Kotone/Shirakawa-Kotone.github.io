function switchTab(tabId) {
    // 移除所有按钮的 active 类
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 隐藏所有面板
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // 激活当前按钮
    // 这里通过 event.target 或者遍历查找来添加 active，为了简单直接重新查找
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if(activeBtn) activeBtn.classList.add('active');

    // 显示当前面板
    document.getElementById(tabId).classList.add('active');
}

// 简单的入场动画效果
document.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 500);
    });

    // 下拉菜单延迟隐藏
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        let hideTimeout;
        const menu = dropdown.querySelector('.dropdown-menu');

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            menu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });

        menu.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });

        menu.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
    });
});