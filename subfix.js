// JavaScript 코드 (script.js)
var projectItems = document.querySelectorAll("#sub-resume li");
var modal = document.getElementById("project-modal");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var closeButton = document.querySelector(".close-button");

// 프로젝트 목록에 강조 효과를 추가하는 함수
function highlightProject(projectIndex) {
    projectItems[projectIndex].classList.add("selected");
    projectItems[projectIndex].classList.add("zoomed");
    showModal(projectIndex);
}

// 프로젝트 목록에서 강조 효과를 제거하는 함수
function removeHighlightFromProjects() {
    projectItems.forEach(function(item) {
        item.classList.remove("selected");
        item.classList.remove("zoomed");
    });
}

// JavaScript 코드 (script.js)
var projectItems = document.querySelectorAll("ul.centered-project-list li");

projectItems.forEach(function(item) {
    item.addEventListener("click", function() {
        projectItems.forEach(function(item) {
            item.classList.remove("selected");
        });
        item.classList.add("selected");
    });
});


projectItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
        removeHighlightFromProjects();
        highlightProject(index);
    });
});

function showModal(projectIndex) {
    modal.style.display = "block";
    modalTitle.textContent = projectItems[projectIndex].querySelector("h3").textContent;
    modalDescription.textContent = projectItems[projectIndex].querySelector("p").textContent;
}

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// JavaScript 코드 (script.js)
var projectItems = document.querySelectorAll("ul.centered-project-list li");









