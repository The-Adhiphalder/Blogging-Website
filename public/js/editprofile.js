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
    const postImg = document.getElementById('post-img');

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

                    if (postImg) {
                        postImg.src = e.target.result; 
                    }
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
    const fileInputTwo = document.getElementById('main-img-cover-img'); 
    const imagePreviewTwo = document.getElementById('image-preview-cover-two');
    const labelTwo = document.getElementById('upload-label');
    const existingImgTwo = imagePreviewTwo.querySelector('img');
    const postImgTwo = document.getElementById('post-img'); 

    if (existingImgTwo && existingImgTwo.src.trim() !== '') {
        imagePreviewTwo.classList.add('active');
    }

    fileInputTwo.addEventListener('change', function () {
        imagePreviewTwo.innerHTML = ''; 

        if (fileInputTwo.files && fileInputTwo.files.length > 0) {
            const file = fileInputTwo.files[0];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;

                    imagePreviewTwo.classList.add('active');
                    imagePreviewTwo.appendChild(img);

                    if (postImgTwo) {
                        postImgTwo.src = e.target.result; 
                    }
                };

                reader.readAsDataURL(file);
                labelTwo.innerHTML = `File selected: ${file.name}`;
            } else {
                labelTwo.innerHTML = 'Please select an image';
                imagePreviewTwo.classList.remove('active');
                alert('Please upload a valid image file (jpg, png, gif, etc.).');
            }
        } else {
            labelTwo.innerHTML = 'Click me to upload image';
            imagePreviewTwo.classList.remove('active');
        }
    });

    imagePreviewTwo.addEventListener('click', function () {
        fileInputTwo.click();
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


/*-----------------*\
    PRERVIEW PANEL
\*-----------------*/

document.addEventListener('DOMContentLoaded', function() {
    const postCaptionInput = document.getElementById('create-post-title');
    const postDescTextarea = document.getElementById('post-desc');
    const postParaDisplay = document.getElementById('post-para');
    const coverImageInput = document.getElementById('main-img-cover-img');
    const postWall1 = document.getElementById('post-wall-1'); 
    const postWall2 = document.getElementById('post-wall-2');
    const postWall3 = document.getElementById('post-wall-3'); 
    const postImg = document.getElementById('post-img');

    function updateDisplays() {
        const titleDisplays = document.querySelectorAll('.post-title-display');
        titleDisplays.forEach(display => {
            display.textContent = postCaptionInput.value;
        });

        postParaDisplay.textContent = postDescTextarea.value; 

        const caption = postCaptionInput.value.trim();
        const description = postDescTextarea.value.trim();
        const hasImage = coverImageInput.files.length > 0 || document.getElementById('image-preview-cover-two').querySelector('img') !== null;

        postWall1.style.display = 'none';
        postWall2.style.display = 'none';
        postWall3.style.display = 'none';

        if (caption && !description && !hasImage) {
            postWall1.style.display = 'block'; 
        } else if (caption && hasImage && !description) {
            postWall2.style.display = 'block'; 
        } else if (caption && description) {
            postWall3.style.display = 'block'; 
        } else if (caption && hasImage) {
            postWall2.style.display = 'block'; 
        }
    }

    postCaptionInput.addEventListener('input', updateDisplays);
    postDescTextarea.addEventListener('input', updateDisplays);
    coverImageInput.addEventListener('change', updateDisplays);

    updateDisplays();
});