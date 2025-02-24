<template>

    <div class="register-form">
        <h2>Đăng ký</h2>
        <form id="registerForm">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Mật khẩu" required>
            <input type="text" id="username" placeholder="Tên người dùng" required>
            <button type="submit">Đăng ký</button>
        </form>
        <div class="message" id="message"></div>
    </div>

</template>
    <style>
        /* body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        } */
        .register-form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .register-form h2 {
            margin-bottom: 20px;
            font-size: 24px;
            text-align: center;
        }
        .register-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .register-form button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
        .register-form button:hover {
            background-color: #218838;
        }
        .message {
            margin-top: 15px;
            text-align: center;
            color: #333;
        }
    </style>
<script>

export default{
    name : "Register",
    data (){

    }
}

</script>