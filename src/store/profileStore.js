// stores/profileStore.js
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileData: null, // Lưu trữ dữ liệu hồ sơ
  }),
  actions: {
    setProfileData(data) {
      this.profileData = data; // Cập nhật dữ liệu hồ sơ
    },
  },
});