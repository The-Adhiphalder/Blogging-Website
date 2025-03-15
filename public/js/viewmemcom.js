// --------------\\
// SIDE BAR \\
// ------------------\\

const sidebarLink = document.querySelectorAll('.sidebar__list a')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))



 
// ---------------------------------------\\
// USER ICON DROPDOWN \\
// -------------------------------------------\\

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

// /-----------------\
//      BACKGROUND
// \-----------------/


const infoImage = document.getElementById("infoImage");
const infoCover = document.querySelector(".info-cover");

function updateBackground() {
    const newSrc = infoImage.src;
    infoCover.style.setProperty("--bg-url", url('${newSrc}'));
}

updateBackground();

const observer = new MutationObserver(updateBackground);
observer.observe(infoImage, { attributes: true, attributeFilter: ["src"] });


// /-----------------------\
//   FOLLOW & UNFOLLOW BUTTON
// \-----------------------/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".join").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const form = this.closest("form");
            if (confirm("Do you want to follow this person?")) {
                const formData = new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': formData.get('_token')
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showToast(data.message);
                    } else {
                        alert(data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    });
});


function unfollowUser(userId) {
    if (!confirm("Are you sure you want to unfollow this person?")) {
        return;
    }

    const form = document.getElementById(`unfollow-form-${userId}`);
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': formData.get('_token')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const newForm = document.createElement("form");
            newForm.action = `/follow/${userId}`;
            newForm.method = "POST";
            newForm.innerHTML = `
                <input type="hidden" name="_token" value="${formData.get('_token')}">
                <button type="submit" class="join"><span>Follow</span></button>
            `;

            form.replaceWith(newForm);
            showToast("You have successfully unfollowed this person!");
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}



// /-----------------------\
//   JOIN & JOINED BUTTON
// \-----------------------/

// Join Button Logic
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".join").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const form = this.closest("form");
            if (confirm("Do you want to join this community?")) {
                const formData = new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': formData.get('_token')
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showToast("You're successfully joined this community");
                        // Optionally, you can change the button to "Joined"
                        const button = document.createElement("button");
                        button.classList.add("joined");
                        button.setAttribute("type", "button");
                        button.innerHTML = "<span>Joined</span>";
                        button.onclick = function() {
                            leaveCommunity('{{ $community->community_id }}');
                        };
                        form.replaceWith(button);
                    } else {
                        alert(data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    });
});

// Leave Button Logic
function leaveCommunity(communityId) {
    if (!confirm("Are you sure you want to leave this community?")) {
        return;
    }

    const form = document.getElementById(`leave-form-${communityId}`);
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': formData.get('_token')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const button = document.createElement("button");
            button.classList.add("join");
            button.setAttribute("type", "submit");
            button.innerHTML = "<span>Join</span>";
            button.onclick = function() {
                const joinForm = document.createElement("form");
                joinForm.action = "{{ route('join.community', ['community_name' => $community->community_name]) }}";
                joinForm.method = "POST";
                joinForm.innerHTML = `@csrf <button type="submit" class="join"><span>Join</span></button>`;
                document.body.appendChild(joinForm);
                joinForm.submit();
            };

            form.replaceWith(button);
            showToast("You've left this community successfully!");
        } else {
            alert(data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Toast Function
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}