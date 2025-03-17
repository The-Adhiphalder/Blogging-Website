document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown3-click-button');
    const dropdownContent = document.querySelector('.section-dropdown3');

    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});



////// BACKGROUND //////

// const infoImage = document.getElementById("main-img");
// const infoCover = document.querySelector(".main-user-img");

// function updateBackground() {
//     const newSrc = infoImage.src;
//     infoCover.style.setProperty("--bg-url", `url('${newSrc}')`);
// }

// updateBackground();

// const observer = new MutationObserver(updateBackground);
// observer.observe(infoImage, { attributes: true, attributeFilter: ["src"] });


document.addEventListener("DOMContentLoaded", function () {
    const infoImage = document.getElementById("main-img");
    const infoCover = document.querySelector(".main-user-img");

    if (!infoImage || !infoCover) {
        console.error("Image or container element not found!");
        return;
    }

    function updateBackground() {
        if (infoImage.src) {
            const newSrc = infoImage.src;
            infoCover.style.setProperty("--bg-url", `url('${newSrc}')`);
        } else {
            console.warn("Image source is empty!");
        }
    }

    updateBackground();

    const observer = new MutationObserver(updateBackground);
    observer.observe(infoImage, { attributes: true, attributeFilter: ["src"] });
});




////// COMMENT BOX //////

const commentButton = document.querySelector(".main-user-comments-button");
const commentBox = document.getElementById("commentBox");

function toggleCommentBox() {
    commentButton.style.display = "none"; 
    commentBox.style.display = "block"; 
    setTimeout(() => commentBox.classList.add("active"), 10); 
}

function hideCommentBox() {
    commentBox.classList.remove("active"); 
    setTimeout(() => {
        commentBox.style.display = "none"; 
        commentButton.style.display = "block";
    }, 300); 
}



////// DELETE BUTTON //////

function confirmDelete(postId) {
    const confirmation = confirm("Do you want to delete this post?");
    if (confirmation) {
        window.location.href = `/post/delete/${postId}`; 
    }
}