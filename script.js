// 获取DOM元素
const searchBox = document.getElementById('searchBox');
const menuItems = document.querySelectorAll('.menu-item');

// 菜单项展开/收起交互
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function() {
    this.classList.toggle('active');
    const subMenu = this.querySelector('.sub-menu');
    if (subMenu) {
      subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// 搜索功能
searchBox.addEventListener('keyup', function() {
  const keyword = this.value.toLowerCase();
  menuItems.forEach(menuItem => {
    const text = menuItem.innerText.toLowerCase();
    menuItem.style.display = text.includes(keyword) ? 'block' : 'none';
  });
});
