// 새로운 이미지 팝업 열기
function openImageModal(image, desc) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.querySelector('.image-modal-content');

    document.getElementById('image-modal-img').src = image;
    document.getElementById('image-modal-desc').innerText = desc;
    
    modal.style.display = "flex";

    // 팝업 바깥(배경) 클릭 시 닫기
    modal.onclick = function (event) {
        if (event.target === modal) {
            closeImageModal();
        }
    };
}



// 새로운 이미지 팝업 닫기
function closeImageModal() {
    document.getElementById('imageModal').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // 햄버거 버튼 클릭 시 메뉴 표시/숨김
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // 메뉴 클릭 시 부드러운 스크롤 이동 및 메뉴 닫기
    navItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // 기본 링크 이동 방지
            const targetId = this.getAttribute("href"); // 클릭한 메뉴의 href 값 가져오기
            const targetSection = document.querySelector(targetId); // 해당 섹션 찾기

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤 이동
            }

            // 모바일에서 메뉴 클릭 후 자동 닫기
            navLinks.classList.remove("active");
        });
    });
});