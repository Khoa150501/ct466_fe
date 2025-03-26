<template>
  <div class="container mt-5">
    <div class="profile-card">
      <div class="avatar-section">
        <img v-if="profile.avatar" :src="avatarUrl" alt="Avatar" class="avatar" />
        <div v-else class="no-avatar">Chưa có ảnh</div>
      </div>
      <div class="profile-details">
        <h2>{{ profile.users }}</h2>
        <h4>{{ profile.role }}</h4>
        <p>{{ profile.description }}</p>
        <p><strong>Ngôn ngữ: </strong>{{ profile.language }}</p>
        <p><strong>Trình độ ngôn ngữ:</strong> {{ profile.languageProficiency }}</p>
        <p><strong>Quốc gia:</strong> {{ profile.country }}</p>
        <p><strong>Giáo dục:</strong> {{ profile.education }}</p>
        <p><strong>Ngành học:</strong> {{ profile.major }}</p>
        <p><strong>Bằng cấp:</strong> {{ profile.degree }}</p>
        <p><strong>Chuyên môn:</strong> {{ profile.expertise }}</p>
        <p><strong>Năm tốt nghiệp:</strong> {{ profile.years }}</p>
        <div>
          <strong>Kỹ năng:</strong>
          <ul>
            <li v-for="skill in profile.skills" :key="skill.name">
              {{ skill.name }} - {{ skill.level }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { useProfileStore } from '@/store/profileStore';
import { computed } from 'vue';

export default {
  setup() {
    const profileStore = useProfileStore();
    const profile = computed(() => profileStore.profileData);
    const avatarUrl = computed(() => (profile.value.avatar ? URL.createObjectURL(profile.value.avatar) : ''));

    return { profile, avatarUrl };
  }
};
</script>

<style scoped>
/* .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.no-avatar {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  background: #ddd;
  text-align: center;
  font-size: 14px;
  color: #666;
} */
 .container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background-color: #f4f4f4;
}

.profile-card {
  width: 800px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: row;
}

.avatar-section {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #6c63ff;
}

.no-avatar {
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: #ddd;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  color: #666;
}

.profile-details {
  flex: 2;
  padding: 20px;
}

h2 {
  margin-bottom: 5px;
  font-size: 24px;
  color: #333;
}

h4 {
  margin-bottom: 15px;
  font-size: 18px;
  color: #6c63ff;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

strong {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #6c63ff;
  color: white;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px 5px 0 0;
  font-size: 14px;
}
</style>