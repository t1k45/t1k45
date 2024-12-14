// Lựa chọn tất cả các liên kết trừ liên kết đăng xuất
const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// Chức năng ẩn/hiện sidebar khi nhấn menu bar
const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

// Chức năng tìm kiếm khi nhấn nút tìm kiếm trên thiết bị nhỏ
const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault(); 
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});
function updateTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    document.getElementById('theme-toggle').checked = isDark;  // Cập nhật trạng thái của toggler
    updateTheme(isDark);
});

// Chuyển đổi chế độ sáng/tối khi người dùng bật/tắt toggler
const toggler = document.getElementById('theme-toggle');
toggler.addEventListener('change', function () {
    updateTheme(this.checked);
});
window.onload = function() {
    // Lấy tất cả các biểu tượng
    const icons = document.querySelectorAll('.icon-container a i');

    // Hàm tạo màu ngẫu nhiên
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    icons.forEach(function(icon) {
        icon.style.color = getRandomColor();
        icon.style.backgroundColor = getRandomColor();
    });
}
//xử lí phần hình ảnh
const image6 = [
    "../images/20_11_2024_1.jpg","../images/20_11_2024_2.jpg","../images/20_11_2024_3.jpg",
    "../images/20_11_2024_4.jpg","../images/20_11_2024_5.jpg","../images/20_11_2024_6.jpg"
];
const image5 = [
    "../images/20_11_2024_01.jpg","../images/20_11_2024_02.jpg","../images/20_11_2024_03.jpg",
    "../images/20_11_2024_04.jpg","../images/20_11_2024_05.jpg","../images/20_11_2024_06.jpg",
    "../images/20_11_2024_07.jpg","../images/20_11_2024_08.jpg","../images/20_11_2024_09.jpg"
];
const image4 = [
    "../images/19_11_2024_1.jpg","../images/19_11_2024_2.jpg","../images/19_11_2024_3.jpg",
    "../images/19_11_2024_4.jpg","../images/19_11_2024_5.jpg","../images/19_11_2024_6.jpg",
    "../images/19_11_2024_7.jpg","../images/19_11_2024_8.jpg",
];
const image3 = [
    "../images/31_10_2024_1.jpg","../images/31_10_2024_2.jpg","../images/31_10_2024_3.jpg",
    "../images/31_10_2024_4.jpg","../images/31_10_2024_5.jpg","../images/31_10_2024_6.jpg",
    "../images/31_10_2024_7.jpg",
];
const image2 = [
    "../images/20_4_2024_1.jpg","../images/20_4_2024_2.jpg","../images/20_4_2024_3.jpg",
    "../images/20_4_2024_4.jpg","../images/20_4_2024_5.jpg","../images/20_4_2024_6.jpg",
    "../images/20_4_2024_7.jpg","../images/20_4_2024_8.jpg",
];
const image1 = [
    "../images/6_3_2024_1.jpg","../images/6_3_2024_2.jpg","../images/6_3_2024_3.jpg",
    "../images/6_3_2024_4.jpg","../images/6_3_2024_5.jpg",
];
const image0 = [
    "../images/19_11_2023.jpg"
];

const images = [image0, image1, image2, image3, image4, image5, image6];
let curindex = [0, 0, 0, 0, 0, 0, 0]; // Cập nhật chỉ số cho mỗi nhóm ảnh

function changeImage(indx, direction) {
    const displayImages = document.getElementsByClassName("display-image"); // Lấy tất cả các phần tử có class display-image
    // Giả sử mỗi lần chỉ có một phần tử image được thay đổi
    const len = images.length-1;
    const displayImage = displayImages[len-indx]; // Chọn phần tử đầu tiên nếu có nhiều phần tử
    let curidx = curindex[indx];
    curidx += direction; // Cập nhật chỉ số theo hướng
    if (curidx < 0 || curidx >= images[indx].length) {
        curidx = Math.max(0, Math.min(images[indx].length - 1, curidx)); // Đảm bảo chỉ số hợp lệ
        curindex[indx] = curidx;
        return;
    }
    curindex[indx] = curidx; // Cập nhật chỉ số của mảng hiện tại
    // Thêm hiệu ứng trượt
    displayImage.style.transform = `translateX(${direction * -100}%)`;
    displayImage.style.opacity = 0;

    setTimeout(() => {
        displayImage.src = images[indx][curidx]; // Thay đổi nguồn ảnh
        displayImage.style.transition = "none"; 
        displayImage.style.transform = `translateX(${direction * 100}%)`; // Chỉnh lại vị trí

        setTimeout(() => {
            displayImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            displayImage.style.transform = "translateX(0)"; // Trở về vị trí ban đầu
            displayImage.style.opacity = 1; // Mở lại độ mờ
        }, 50);
    }, 250);
    
}
