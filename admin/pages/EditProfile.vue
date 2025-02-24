<style scoped>
.edit-profile-container {
    width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

/* Form styles */
.edit-profile-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    resize: none;
    height: 80px;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #007bff;
}

/* Avatar styles */
.avatar-group {
    text-align: center;
}

.avatar-preview img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

/* Buttons */
.form-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.save-btn {
    background: #007bff;
    color: #fff;
}

.cancel-btn {
    background: #ddd;
    color: #333;
}

.btn:hover {
    opacity: 0.9;
}

</style>

<template>
<div class="container">
     <div class="edit-profile-container">
        <h2>Edit Profile</h2>
        <form class="edit-profile-form">
            <!-- Avatar -->
            <div class="form-group avatar-group">
                <label for="avatar">Avatar:</label>
                <div class="avatar-preview">
                    <img id="avatarPreview" src="https://via.placeholder.com/100" alt="Avatar">
                </div>
                <input type="file" id="avatar" accept="image/*" onchange="previewAvatar(event)">
            </div>
            
            <!-- Name -->
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" required>
            </div>
            
            <!-- Address -->
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" placeholder="Enter your address">
            </div>

            <!-- Phone -->
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" placeholder="Enter your phone number">
            </div>

            <!-- Gmail -->
            <div class="form-group">
                <label for="email">Gmail:</label>
                <input type="email" id="email" placeholder="Enter your email">
            </div>

            <!-- Job -->
            <div class="form-group">
                <label for="job">Job:</label>
                <input type="text" id="job" placeholder="Enter your job">
            </div>

            <!-- Role -->
            <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" id="role" placeholder="Enter your role">
            </div>

            <!-- Age -->
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" placeholder="Enter your age" min="1">
            </div>

            <!-- Bio -->
            <div class="form-group">
                <label for="bio">Bio:</label>
                <textarea id="bio" placeholder="Write something about yourself"></textarea>
            </div>

            <!-- Buttons -->
            <div class="form-buttons">
                <button type="submit" class="btn save-btn">Save</button>
                <button type="button" class="btn cancel-btn" onclick="cancelEdit()">Cancel</button>
            </div>
        </form>
    </div>
</div>
    

    </template>

<script>
export default {
    name : "editprofile",
    data(){
        
    }
}
// Preview Avatar
function previewAvatar(event) {
    const avatarPreview = document.getElementById("avatarPreview");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Cancel Edit
function cancelEdit() {
    if (confirm("Are you sure you want to cancel? Unsaved changes will be lost.")) {
        window.location.reload(); // Reload the page to clear all inputs
    }
}
</script>