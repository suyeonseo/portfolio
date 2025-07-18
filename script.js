// contact 팝업 열기 
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const contactPopup = document.getElementById("contactPopup");

  window.addEventListener("scroll", () => {

    if (header.classList.contains("hide")) {
      contactPopup.classList.remove("show");
    }
    

  });

  // Contact 팝업 토글
  const btn = document.getElementById("contactBtn");

  btn.addEventListener("click", function () {
    contactPopup.classList.toggle("show");
  });

  // 바깥 클릭 시 페이드아웃
  document.addEventListener("click", function (e) {
    if (!contactPopup.contains(e.target) && e.target !== btn) {
      if (contactPopup.classList.contains("show")) {
        contactPopup.classList.remove("show");
      }
    }
  });

});



// 헤더 내리기/올리기 
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;
  let ticking = false;
  const delta = 10;
  const threshold = 2; // 위로 몇 픽셀만 움직여도 헤더 보이기

  window.addEventListener("scroll", function () {
    const nowScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrollDown = nowScrollTop > lastScrollTop;
        const scrollUp = nowScrollTop < lastScrollTop;

        // 너무 작은 변화는 무시
        if (Math.abs(nowScrollTop - lastScrollTop) <= delta) {
          ticking = false;
          return;
        }

        // 아래로 스크롤하면 숨기기
        if (scrollDown) {
          header.classList.add("hide");
        }

        // 위로 살짝만 올려도 보여주기
        if (scrollUp && (lastScrollTop - nowScrollTop) >= threshold) {
          header.classList.remove("hide");
        }

        lastScrollTop = nowScrollTop;
        ticking = false;
      });

      ticking = true;
    }
  });
});

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

// 아코디언 메뉴 펼치기/접기
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
      header.addEventListener("click", function () {
        const parent = header.closest(".project-contents");
        const icon = header.querySelector(".fa-solid");

        parent.classList.toggle("open");
        const isOpen = parent.classList.contains("open");

        if(isOpen){
          console.log("open");
          icon.classList.remove("fa-angle-down");
          icon.classList.add("fa-angle-up");
        }else{
          console.log("close");
          icon.classList.remove("fa-angle-up");
          icon.classList.add("fa-angle-down");
        }

      });
    });
  });