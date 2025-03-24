/*-----------------*\
  #USER PROFILE
\*-----------------*/

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

/*-----------------*\
    PROFILE IMAGE 
\*-----------------*/

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('main-img-profile-img');
    const imagePreview = document.getElementById('image-preview-profile');
    const label = document.getElementById('upload-label');
    const existingImg = imagePreview.querySelector('img');

    if (existingImg && existingImg.src.trim() !== '') {
        imagePreview.classList.add('active');
    }

    fileInput.addEventListener('change', function () {
        imagePreview.innerHTML = ''; 

        if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;

                    imagePreview.classList.add('active');
                    imagePreview.appendChild(img);
                };

                reader.readAsDataURL(file);
                label.innerHTML = `File selected: ${file.name}`;
            } else {
                label.innerHTML = 'Please select an image';
                imagePreview.classList.remove('active');
                alert('Please upload a valid image file (jpg, png, gif, etc.).');
            }
        } else {
            label.innerHTML = 'Click me to upload image';
            imagePreview.classList.remove('active');
        }
    });

    imagePreview.addEventListener('click', function () {
        fileInput.click();
    });
});

/*-----------------*\
    COVER IMAGE
\*-----------------*/

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('main-img-cover-img');
    const imagePreview = document.getElementById('image-preview-cover');
    const label = document.getElementById('upload-label');
    const existingImg = imagePreview.querySelector('img');

    if (existingImg && existingImg.src.trim() !== '') {
        imagePreview.classList.add('active');
    }

    fileInput.addEventListener('change', function () {
        imagePreview.innerHTML = ''; 

        if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;

                    imagePreview.classList.add('active');
                    imagePreview.appendChild(img);
                };

                reader.readAsDataURL(file);
                label.innerHTML = `File selected: ${file.name}`;
            } else {
                label.innerHTML = 'Please select an image';
                imagePreview.classList.remove('active');
                alert('Please upload a valid image file (jpg, png, gif, etc.).');
            }
        } else {
            label.innerHTML = 'Click me to upload image';
            imagePreview.classList.remove('active');
        }
    });

    imagePreview.addEventListener('click', function () {
        fileInput.click();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('main-img-cover-img');
    const imagePreviewTwo = document.getElementById('image-preview-cover-two');
    const label = document.getElementById('upload-label');
    const existingImg = imagePreviewTwo.querySelector('img');

    if (existingImg && existingImg.src.trim() !== '') {
        imagePreviewTwo.classList.add('active');
    }

    fileInput.addEventListener('change', function () {
        imagePreviewTwo.innerHTML = ''; 

        if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;


                    imagePreviewTwo.classList.add('active');
                    imagePreviewTwo.appendChild(img);
                };

                reader.readAsDataURL(file);
                label.innerHTML = `File selected: ${file.name}`;
            } else {
                label.innerHTML = 'Please select an image';
                imagePreviewTwo.classList.remove('active');
                alert('Please upload a valid image file (jpg, png, gif, etc.).');
            }
        } else {
            label.innerHTML = 'Click me to upload image';
            imagePreviewTwo.classList.remove('active');
        }
    });

    imagePreviewTwo.addEventListener('click', function () {
        fileInput.click();
    });
});


/*-----------------*\
    DATE PICKER
\*-----------------*/

document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("dateInput").setAttribute("max", today);
});



function validatePhone(input) {
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}


// IMAGE FILE UPLOAD

// document.getElementById('main-img-cover-img').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             document.getElementById('post-img').src = e.target.result;
//             document.getElementById('post-bg').style.backgroundImage = `url('${e.target.result}')`;
//         };
//         reader.readAsDataURL(file);
//     }
// });


// TEXTAREA CHARACTER COUNTER

// document.getElementById('post-desc').addEventListener('input', function() {
//     document.getElementById('post-para').textContent = this.value;
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const titleInput = document.getElementById("create-post-title");
//     const descInput = document.getElementById("post-desc");
//     const imgInput = document.getElementById("main-img-cover-img");

//     const postTitle = document.getElementById("post-title");
//     const postPara = document.getElementById("post-para");
//     const postImg = document.getElementById("post-img");
//     const postBg = document.getElementById("post-bg");
//     const selectedImgPreview = document.getElementById("selected-img-preview");

//     function updatePreview() {
//         const titleValue = titleInput.value.trim();
//         const descValue = descInput.value.trim();
//         const imgValue = imgInput.files.length > 0;

//         if (titleValue && descValue && imgValue) {
//             postTitle.classList.remove("hidden");
//             postPara.classList.remove("hidden");
//             postImg.classList.remove("hidden");
//             postBg.classList.remove("hidden");

//             postPara.textContent = descValue;
//         } else if (titleValue && descValue) {
//             postTitle.classList.remove("hidden");
//             postPara.classList.remove("hidden");

//             postImg.classList.add("hidden");
//             postBg.classList.add("hidden");
//         } else if (titleValue && imgValue) {
//             postTitle.classList.remove("hidden");
//             postImg.classList.remove("hidden");
//             postBg.classList.remove("hidden");

//             postPara.classList.add("hidden");
//         } else if (titleValue) {
//             postTitle.classList.remove("hidden");

//             postPara.classList.add("hidden");
//             postImg.classList.add("hidden");
//             postBg.classList.add("hidden");
//         } else {
//             postTitle.classList.add("hidden");
//             postPara.classList.add("hidden");
//             postImg.classList.add("hidden");
//             postBg.classList.add("hidden");
//         }
//     }

//     titleInput.addEventListener("input", updatePreview);
//     descInput.addEventListener("input", updatePreview);
//     imgInput.addEventListener("change", function(event) {
//         if (event.target.files.length > 0) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 postImg.src = e.target.result;
//                 postBg.style.backgroundImage = `url('${e.target.result}')`;

//                 selectedImgPreview.src = e.target.result;
//                 selectedImgPreview.style.display = "block";
//             };
//             reader.readAsDataURL(event.target.files[0]);
//         }
//         updatePreview();
//     });

//     updatePreview(); // Initialize on page load
// });




document.addEventListener("DOMContentLoaded", function () {
    // Title Update
    const titleInput = document.getElementById("create-post-title");
    const titlePreview = document.getElementById("post-title");

    titleInput.addEventListener("input", function () {
        titlePreview.textContent = this.value.trim() || "This is a title";
        titlePreview.classList.remove("hidden"); 
    });

    // Description Update
    const descInput = document.getElementById("post-desc");
    const descPreview = document.getElementById("post-para");

    descInput.addEventListener("input", function () {
        descPreview.textContent = this.value.trim();
        descPreview.classList.remove("hidden"); 
    });

    // Image Preview Update
    const imgInput = document.getElementById("main-img-cover-img");
    const imgPreview = document.getElementById("post-img");
    const bgPreview = document.getElementById("post-bg");

    imgInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview.src = e.target.result;
                imgPreview.classList.remove("hidden");
                bgPreview.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });
});
