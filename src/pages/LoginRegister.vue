<template>
  <!-- <div class="login-container"> -->
  <div class="auth-form">

    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Mật khẩu</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
  async login() {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      });
      const { token, user } = response.data;

      // Lưu token vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

    //   this.loginSuccess();

    // Hiển thị thông báo đăng nhập thành công
      Swal.fire({
        title: 'Thành công!',
        text: 'Đăng nhập thành công!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Chuyển hướng tới trang /home sau khi đóng alert
        this.$router.push('/home');
      });
    } catch (error) {
      this.errorMessage = error.response?.data?.message || 'Lỗi đăng nhập!';
    }
  }
}
};
</script>