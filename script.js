// JavaScript 코드 (script.js)
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project-list");
    const toggleButton = document.getElementById("toggle-projects");
    const maxVisibleItems = 3;
    let showingAllProjects = false;

    // 초기 로딩 시 더보기 버튼 표시/숨기기
    if (projectList.children.length <= maxVisibleItems) {
        toggleButton.style.display = "none";
    } else {
        toggleButton.addEventListener("click", toggleProjects);
    }

    function toggleProjects() {
        showingAllProjects = !showingAllProjects;

        const projectItems = Array.from(projectList.children).slice(maxVisibleItems);

        if (showingAllProjects) {
            // 모든 프로젝트 표시
            projectItems.forEach((item, index) => {
                item.style.display = "list-item";
                item.style.animation = `fade-in 0.5s ${index * 0.1}s ease-out`;
            });
            toggleButton.textContent = "프로젝트 간략히 보기";
        } else {
            // 일부 프로젝트만 표시
            projectItems.forEach(item => {
                item.style.display = "none";
            });
            toggleButton.textContent = "프로젝트 더 보기";
        }
    }
});

// JavaScript 코드 (script.js)
var projectItems = document.querySelectorAll("#projects li");
var darkModeEnabled = false;

projectItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // 클릭된 항목의 배경색 변경
        this.style.backgroundColor = "#FFD700"; // 원하는 색상으로 변경

        // 이전에 강조되고 있던 프로젝트를 초기 배경색으로 복원
        projectItems.forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.style.backgroundColor = "#f9f9f9";
            }
        });
    });

    item.addEventListener("touchstart", function() {
        this.style.backgroundColor = "#FFD700"; // 원하는 색상으로 변경

        projectItems.forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.style.backgroundColor = "#f9f9f9";
            }
        });
    });

    item.addEventListener("touchend", function() {
        setTimeout(() => {
            this.style.backgroundColor = "#f9f9f9"; // 초기 배경색으로 복원
        }, 100);
    });
});

// 다크 모드 전환 버튼 클릭 이벤트
var darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function() {
    if (darkModeEnabled) {
        // 다크 모드 비활성화
        document.body.classList.remove("dark-mode");
    } else {
        // 다크 모드 활성화
        document.body.classList.add("dark-mode");
    }
    darkModeEnabled = !darkModeEnabled;
});

