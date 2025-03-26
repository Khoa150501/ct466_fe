
<style scoped>
.profile-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 100;
}

.profile-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 25px;
    border-top: 0.5px solid #bebebe;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    margin-top: 10px;
    font-weight: bold;
    color: #555;
}

.form-group input[type="text"],
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.form-group textarea {
    resize: vertical;
}

.form-group input[type="file"] {
    padding: 5px;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #ddd;
  margin-top: 10px;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.avatar-container:hover .avatar-overlay {
  opacity: 1;
}

input[type="file"] {
  display: none;
}
.skill-box {
  border: 1px solid #ccc; /* Viền xung quanh box */
  border-radius: 8px; /* Bo góc */
  padding: 16px; /* Khoảng cách bên trong box */
  margin-top: 16px; /* Khoảng cách phía trên */
  background-color: #f9f9f9; /* Màu nền */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
}

.skill-item {
  list-style-type: none; /* Bỏ dấu chấm mặc định của ul */
  margin-bottom: 12px; /* Khoảng cách giữa các kỹ năng */
  padding-bottom: 12px; /* Khoảng cách bên dưới mỗi kỹ năng */
  border-bottom: 1px solid #eee; /* Đường kẻ ngăn cách giữa các kỹ năng */
}

.skill-item:last-child {
  border-bottom: none; /* Bỏ đường kẻ cho kỹ năng cuối cùng */
  margin-bottom: 0; /* Bỏ khoảng cách dưới cho kỹ năng cuối cùng */
  padding-bottom: 0; /* Bỏ khoảng cách dưới cho kỹ năng cuối cùng */
}

.skill-name {
  font-weight: bold; /* In đậm tên kỹ năng */
  display: block; /* Hiển thị trên một dòng riêng */
  margin-bottom: 4px; /* Khoảng cách giữa tên và mức độ */
}

.skill-level {
  color: #666; /* Màu chữ nhạt hơn */
  font-size: 0.9em; /* Kích thước chữ nhỏ hơn */
  display: block; /* Hiển thị trên một dòng riêng */
}

label::after {
  content: " *";
  color: red;
}
</style>
<template>
  <div class="container mt-5">
    <div class="profile-form">
      <h2>Tạo hồ sơ của bạn</h2>
      <form id="profileForm" class="d-flex">
        <div class="container form-flex">
          <div class="form-group">
          <div class="form-group-name-avarta d-flex">
          <div class="avatar-container">
            <img id="avatarPreview" src="/src/assets/img/icon/219983.png" alt="Ảnh đại diện">
            <div class="avatar-overlay">Cập nhật</div>
            <input type="file" id="avatar" name="avatar" accept="image/*" @change="handleFileChange">
          </div>
            <div class="mt-3" style="margin-left: 10px;">
              <label for="displayName">Tên hiển thị của bạn:</label>
              <input type="text" id="displayName" name="displayName" v-model="users" required>
          </div>
          </div>
        </div>
        <div class="form-group">
          <label for="role">Mục đích sử dụng</label>
              <input type="text" :value="selectedCheckboxes.join(', ')"  readonly>
        </div>
   
        <div class="form-group">
          <label for="description">Bio:</label>
          <textarea id="description" name="description" rows="4" v-model="description" required></textarea>
        </div>
        <div class="form-group">
          <label for="language">Ngôn ngữ sử dụng:</label>
          <select id="language" name="language" v-model="selectedLanguage"  required>
            <option value="English">Tiếng Anh</option>
            <option value="Spain">Tiếng TBN</option>
            <option value="China">Tiếng Trung</option>
            <option value="Indian">Tiếng Hindi</option>
            <option value="French">Tiếng Pháp</option>
            <option value="Russia">Tiếng Nga</option>
            <option value="Japan">Tiếng Nhật</option>
            <option value="Korea">Tiếng Hàn</option>
            <option value="VietNam">Tiếng Việt</option>

          </select>
        </div>
        <div class="form-group">
          <label for="languageProficiency">Trình độ ngôn ngữ:</label>
          <select id="languageProficiency" name="languageProficiency" v-model="languageProficiency" required>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="native">Native</option>
          </select>
        </div>
        </div>
        
        <div class="container form-flex" >
               <div class="form-group">
          <label for="education">Giáo dục: </label>
             <div>
                <select v-model="selectedCountry" id="country">
                  <option value="" disabled>-- Chọn quốc gia --</option>
                  <option v-for="country in countries" :key="country.code" :value="country.code">
                    {{ country.name }}
                  </option>
                </select>
             </div>
             <div class="mt-2">
              <input type="text" name="education" id="education" v-model="selectedEducation" placeholder="Tên trường cao đẳng/Đại học">
             </div>
             <div class="mt-2 d-flex">
              <select name="degree" id="degree" v-model="selectedDegree" style="margin-right: 5px;">
                <option value="">-- Bằng cấp --</option>
                <option value="Giáo sư">Giáo sư</option>
                <option value="Tiến sĩ">Tiến sĩ</option>
                <option value="Thạc sĩ">Thạc sĩ</option>
                <option value="Kỹ sư">Kỹ sư</option>
                <option value="Cử nhân">Cử nhân</option>
                <option value="Giấy chứng nhận">Giấy chứng nhận</option>
                <option value="Khác">Khác</option>
              </select>
              <input type="text" name="major" id="major" v-model="selectedMajor" placeholder="Chuyên ngành theo học">
             </div>

              <div class="mt-2">
              <select name="years" id="years" v-model="selectedYears">
                <option value="">-- Năm tốt nghiệp --</option>
                <option value="2010"> 2010 </option>
                <option value="2011"> 2011 </option>
                <option value="2012"> 2012 </option>
                <option value="2013"> 2013 </option>
                <option value="2014"> 2014 </option>
                <option value="2015"> 2015 </option>
                <option value="2016"> 2016 </option>
                <option value="2017"> 2017 </option>
                <option value="2018"> 2018 </option>
                <option value="2019"> 2019 </option>
                <option value="2020"> 2020 </option>
                <option value="2021"> 2021 </option>
                <option value="2022"> 2022 </option>
                <option value="2023"> 2023 </option>
                <option value="2024"> 2024 </option>
                <option value="2025"> 2025 </option>
                <option value="2026"> 2026 </option>
              </select>
             </div>
        </div>
        <div class="form-group">
          <label for="expertise">Chuyên môn:</label>
          <select id="expertise" name="expertise" v-model="selectedExpertise" required>
            <option value="graphicsDesign">Đồ họa & Thiết kế</option>
            <option value="ProgramingTech">Lập trình & Công nghệ</option>
            <option value="digitalMarketing">Tiếp thị</option>
            <option value="translationWriting">Viết & Dịch thuật</option>
            <option value="animation">Video & Hoạt hình</option>
            <option value="music">Nhạc & Âm thanh</option>
            <option value="business">Kinh doanh</option>
            <option value="cons">Tư vấn viên</option>
          </select>
        </div>
        <div class="form-group">
          <label for="displayName">Các kỹ năng chuyên môn:</label>
          <div class="d-flex">
            <select name="skill" id="skill" v-model="selectedSkills" style="margin-right: 5px;">
              <option value="" disabled>-- Thêm kỹ năng hoặc chuyên môn --</option>
              <option v-for="skill in skills" :key="skill" :value="skill.name">{{ skill.name }}</option>
            </select>
            <select name="skillLever" id="skillLever" v-model="selectedSkillLevel">
              <option value="" disabled>-- Mức độ kinh nghiệm --</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Pro">Pro</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary mt-2" @click="addSkill" style="margin-left: 600px;">Thêm</button>
          <!-- Hiển thị danh sách các kỹ năng đã chọn -->
        <div v-if="addedSkills.length > 0" class="skill-box">
          <ul>
            <li v-for="(skill, index) in addedSkills" :key="index" class="skill-item">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">Mức độ: {{ skill.level }}</span>
            </li>
          </ul>
        </div>
          
        </div>
        <router-link to="/resultProfile">
          <button type="button" class="btn btn-primary mt-2" @click="saveProfileData" style="margin-left: 584px;">
            Tiếp tục
          </button>
        </router-link>
        </div>
<!-- Flex -->

      </form>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'; // Nếu bạn vẫn cần mapState từ Vuex
import { useRouter } from 'vue-router'; // Sử dụng useRouter để điều hướng
import { useProfileStore } from '@/store/profileStore'; // Import Pinia store

export default {
  name: "CreateProfile",
  data() {
    return {
      users: null,
      role: null,
      description: "",
      languageProficiency: "",
      avatar: null, // Thêm trường avatar nếu cần
      countries: [], // Danh sách quốc gia
      skills: [],
      selectedLanguage: "",
      selectedDegree: "",
      selectedYears: "",
      selectedExpertise: "",
      selectedCountry: "",
      selectedEducation: "",
      selectedMajor: "",
      selectedSkills: "", // Kỹ năng đang chọn
      selectedSkillLevel: "", // Thêm biến để lưu mức độ kinh nghiệm
      addedSkills: [], // Mảng để lưu các kỹ năng và mức độ đã thêm
    };
  },
  computed: {
    ...mapState(['selectedCheckboxes']), // Nếu bạn vẫn cần mapState từ Vuex
  },
  mounted() {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username && user.role) {
      this.users = user.username;
      this.role = user.role;
    }

    // Gọi API lấy danh sách quốc gia
    this.fetchCountries();
    this.fetchSkills();
  },
  methods: {
    // Lấy danh sách quốc gia từ API
    async fetchCountries() {
      try {
        const response = await fetch("http://localhost:3000/api/countries"); // Thay bằng API thực tế
        const data = await response.json();
        this.countries = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách quốc gia:", error);
      }
    },
    async fetchSkills() {
      try {
        const response = await fetch("http://localhost:3000/api/skills");
        const data = await response.json();
        this.skills = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách kỹ năng:", error);
      }
    },
      addSkill() {
          if (this.selectedSkills && this.selectedSkillLevel) {
            const skill = {
              name: this.selectedSkills,
              level: this.selectedSkillLevel,
            };
            this.addedSkills.push(skill); // Thêm kỹ năng và mức độ vào mảng
            this.selectedSkills = ""; // Reset select box
            this.selectedSkillLevel = ""; // Reset select box
          } else {
            alert("Vui lòng chọn kỹ năng và mức độ kinh nghiệm");
          }
        },
    // Xử lý khi người dùng chọn file ảnh
    handleFileChange(event) {
      this.avatar = event.target.files[0]; // Lưu file ảnh
    },

    // Lưu dữ liệu và chuyển hướng
    saveProfileData() {
      const router = useRouter(); // Sử dụng useRouter để điều hướng
      const profileStore = useProfileStore(); // Sử dụng Pinia store

      // Tạo đối tượng dữ liệu hồ sơ
      const profileData = {
        users: this.users,
        role: this.role,
        description: this.description,
        languageProficiency: this.languageProficiency,
        avatar: this.avatar, // Thêm avatar nếu cần
        country: this.selectedCountry,
        // skills: this.selectedSkills, 
        skills: this.addedSkills,
        language: this.selectedLanguage,
        degree: this.selectedDegree,
        years: this.selectedYears,
        expertise: this.selectedExpertise,
        education: this.selectedEducation,
        major: this.selectedMajor,
      };

      // Lưu dữ liệu vào Pinia store
      profileStore.setProfileData(profileData);

      // Chuyển hướng đến trang updateProfile
      router.push("/resultProfile");
    },
  },
};
</script>