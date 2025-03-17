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