<style scoped>
   .img-resize {
        width: 300px;
        height: 250px;
        object-fit: cover; 
        border-radius: 5px;
    }
    h4{
        font-weight: bold;
        margin-top: 10px;
    }
    .sub-list {
    list-style-type: none; /* Ẩn dấu chấm mặc định của list */
    padding-left: 0; /* Xóa padding mặc định của list */
    }

    .sub-list li {
        position: relative; /* Để icon mũi tên có thể định vị tương đối */
        padding-left: 20px; /* Tạo khoảng trống cho icon mũi tên */
        margin-bottom: 8px; /* Khoảng cách giữa các mục */
        transition: all 0.3s ease; /* Hiệu ứng mượt khi hover */
        border-radius: 5px;
    }
    .sub-list li a{
        color: rgb(105, 105, 105);
    }
    .sub-list li::before {
        content: "→"; /* Icon mũi tên */
        position: absolute;
        left: 0;
        opacity: 0; /* Ẩn icon ban đầu */
        transition: opacity 0.3s ease; /* Hiệu ứng mượt khi hover */
    }

    .sub-list li:hover {
        background-color: rgb(199, 199, 199);
    }

    .sub-list li:hover::before {
        opacity: 1; /* Hiển thị icon mũi tên khi hover */
    }
</style>
<template>
       <div class="container mt-5" >
         <img src="https://quixy.com/wp-content/uploads/2022/02/Well-paying-Tech-Jobs.jpg" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Lập trình & Công nghệ</h1>
        <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/Website Development.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Websites</h4>
                     <ul class="sub-list">
                        <li><a href="#">Phát triển Websites</a></li>
                        <li><a href="#">WordPress</a></li>
                        <li><a href="#">Bảo trì Website</a></li>
                        <li><a href="#">Shopify</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/Application Development.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Phát triển ứng dụng </h4>
                     <ul class="sub-list">
                        <li><a href="#">Web App</a></li>
                        <li><a href="#">Desktop Applications</a></li>
                        <li><a href="#">Phát triển Game</a></li>
                        <li><a href="#">Phát triển chatbot</a></li>
                        <li><a href="#">Browser Extensions</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/1718382865845.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Phát triển phần mềm</h4>
                     <ul class="sub-list">
                        <li><a href="#">Phát triển phần mềm</a></li>
                        <li><a href="#">Phát triển AI</a></li>
                        <li><a href="#">API & Integrations</a></li>
                        <li><a href="#">Phát triển Plugins</a></li>
                        <li><a href="#">Scripting</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/Evolution-of-Mobile-Apps.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Ứng dụng di động</h4>
                     <ul class="sub-list">
                        <li><a href="#">Phát triển ứng dụng di động</a></li>
                        <li><a href="#">Phát triển Cross-Platform</a></li>
                        <li><a href="#">Phát triển ứng dụng Android</a></li>
                        <li><a href="#">Phát triển ứng dụng IOS</a></li>
                        <li><a href="#">Bảo trì ứng dụng di động</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/1637330025270.png" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Website Platforms</h4>
                     <ul class="sub-list">
                        <li><a href="#">Wix</a></li>
                        <li><a href="#">Webflow</a></li>
                        <li><a href="#">GoDaddy</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/cyber-security-la-gi-01.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Hỗ trợ & An ninh mạng</h4>
                     <ul class="sub-list">
                        <li><a href="#">Hỗ trợ & IT</a></li>
                        <li><a href="#">DevOps Engineering</a></li>
                        <li><a href="#">An ninh mạng</a></li>
                        <li><a href="#">Chuyển đổi tập tin</a></li>
                    </ul>
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/What-Is-Blockchain-To-Cryptocurrency.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Blockchain</h4>
                     <ul class="sub-list">
                        <li><a href="#">Phát triển Blockchain & Giải pháp</a></li>
                        <li><a href="#">Bảo mật Blockchain</a></li>
                        <li><a href="#">Thiết kế Coin & mã hóa</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/ProgramingTech/Miscellaneous.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Khác</h4>
                     <ul class="sub-list">
                        <li><a href="#">QA & Review</a></li>
                        <li><a href="#">Học lập trình Online</a></li>
                        <li><a href="#">Kiểm tra người dùng</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>


        <h2 class="mt-5">Các câu hỏi thường gặp?</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Lập trình Web là gì?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Lập trình hoặc phát triển web sử dụng mã để tập trung vào chức năng của trang web và đảm bảo nó hoạt động và dễ sử dụng. Nó bao gồm đánh dấu, viết, bảo mật mạng và mã hóa ở phía máy khách và máy chủ. Các ngôn ngữ lập trình web phổ biến nhất là HTML, XML, JavaScript, PHP, ASP.Net và Python.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Làm thế nào để tôi chọn được lập trình viên tự do phù hợp cho dự án của mình?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Với rất nhiều dịch vụ lập trình, việc lựa chọn đúng lập trình viên là một thách thức. Hãy lập một bản tóm tắt rõ ràng, quyết định về ngân sách, thời hạn và phạm vi. Chọn một lập trình viên không chỉ dựa trên kỹ năng và kinh nghiệm của họ mà còn dựa trên mức độ bạn có thể làm việc và giao tiếp tốt như thế nào.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Tôi có cần phải chuẩn bị gì cho lập trình viên của mình không?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Có, tài liệu tốt và bản tóm tắt rõ ràng là rất quan trọng để đạt được kết quả mong muốn cho dự án của bạn. Hãy hình thành ý tưởng cấp cao ban đầu của bạn và động não cho đến khi bạn có được tầm nhìn rõ ràng. Tiếp theo, biến ý tưởng của bạn thành các yêu cầu chức năng chi tiết cho lập trình backend và nêu chi tiết các yêu cầu kỹ thuật của bạn (nền tảng, thiết bị, v.v.). Ngoài ra, hãy thêm các yêu cầu không chức năng, ví dụ như hiệu suất, bảo mật, tải và chỉ định rõ phạm vi của dự án.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Tôi có thể tìm thấy những loại dịch vụ nào trong Lập trình & Công nghệ?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Bắt đầu với phát triển web cho phía máy khách (frontend) và phía máy chủ (backend), danh mục này cũng cung cấp các chuyên gia về phát triển Wordpress và thương mại điện tử, ứng dụng di động hoặc máy tính để bàn, hỗ trợ & an ninh mạng, cũng như thử nghiệm người dùng và QA.</p>
      </div>
    </div>
  </div>
      <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Làm thế nào để tìm được nhà phát triển giỏi trên Fiverr?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Fiverr cung cấp nhiều lựa chọn nhà phát triển, vì vậy hãy tinh chỉnh các yêu cầu của bạn để xác định xem bạn có cần một nhà phát triển full-stack - thành thạo cả backend (phía máy chủ) và frontend (phía máy khách) hay một chuyên gia hẹp hơn. Nhận báo giá và thảo luận về nhu cầu của bạn với ít nhất 3 nhà phát triển để có quyết định sáng suốt..</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "ProgrammingTech",
    data(){

    }
}
</script>