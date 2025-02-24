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
         <img src="/src/assets/img/slidebar/A4TT1.png" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Video & Hoạt hình</h1>
         <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Video Editing _ Post-Production.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Biên tập & Hậu kỳ</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Social _ Marketing Videos.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Video xã hội & Tiếp thị</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/UGC Video Vertical Bucket Image.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Thuyết trình</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Tutorials _ Education.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Video giải thích</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Animation.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Hoạt hình</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Product _ Explainer Videos.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Quảng cáo sản phẩm</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Motion Graphics.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Đồ họa chuyển động</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Video&Animation/Filmed Video Production.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Filmed Video Production</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
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
        Tại sao doanh nghiệp của tôi cần có video?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Trong các chiến lược tiếp thị ngày nay, không gì có thể vượt qua sức mạnh của video - 90% khách hàng nói rằng video giúp họ quyết định có nên mua hay không. Chúng giúp giới thiệu trực quan các sản phẩm và dịch vụ tiếp cận và thu hút khách hàng mới. Video truyền tải nhiều thông tin hơn trong thời gian ngắn hơn và dễ dàng hơn nhiều để khán giả đắm chìm vào. Chúng cũng giúp doanh nghiệp của bạn nổi bật so với đối thủ cạnh tranh bằng cách đưa khuôn mặt và tên vào thương hiệu của bạn, tạo sự tự tin và đáng tin cậy. Và thực tế là Google thích video chỉ là một lý do nữa để bắt đầu tạo các video kinh doanh đó!</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Doanh nghiệp của tôi cần loại video nào?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Tùy thuộc vào loại sản phẩm hoặc dịch vụ mà doanh nghiệp của bạn cung cấp, có rất nhiều video để lựa chọn. Video sản phẩm rất tuyệt vời để giới thiệu các tính năng và lợi ích của sản phẩm theo cách hấp dẫn. Video giải thích cũng phổ biến để dạy hoặc giải thích cách giải quyết vấn đề hoặc sự cố. Chúng cũng tuyệt vời để trình bày cách sử dụng sản phẩm hoặc giải pháp. Video giới thiệu, đào tạo và văn hóa công ty rất tuyệt vời cho các giải pháp làm việc bên trong trong doanh nghiệp của bạn và video chứng thực và quảng cáo hoàn hảo để quảng bá doanh nghiệp của bạn. Và đừng quên những video xã hội thú vị mà khách hàng thích xem!</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Những yếu tố tạo nên một video tuyệt vời là gì?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Để tạo ra một video thành công, bạn nên ghi nhớ những mẹo sau. Đầu tiên, hãy giữ video ngắn gọn. Nguyên tắc chung cho video là càng ngắn càng tốt và giữ video dưới 2 phút là điều cần thiết. Tiếp theo, bạn cần có phần giới thiệu thu hút sự chú ý. Video của bạn ngắn đến mức nào cũng không quan trọng - nếu bạn không thể thu hút sự chú ý của khán giả trong vài giây đầu tiên, họ sẽ bỏ qua. Bạn cũng nên cân nhắc đến nhạc nền, ánh sáng video, thêm phụ đề và chỉnh sửa video doanh nghiệp của mình một cách mượt mà. Và cuối cùng, bạn nên có lời kêu gọi hành động (CTA) quyết đoán để kết thúc một cách ấn tượng.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Những dịch vụ video và hoạt hình nào phổ biến nhất?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Có nhiều dịch vụ video khác nhau, nhưng dịch vụ phổ biến nhất là video giải thích và hoạt hình nhân vật. Trong danh mục video giải thích, bạn có thể chọn video giải thích bảng trắng mô phỏng đồ họa hoạt hình được vẽ tay trên bảng trắng. Video hoạt hình 2D và 3D cũng khá phổ biến trong việc tạo hình ảnh chuyển động ba chiều để giải thích sản phẩm hoặc dịch vụ của bạn. Video giải thích hành động trực tiếp được thực hiện bằng cảnh quay video thực tế, được mọi người yêu thích, và hoạt hình nhân vật mang lại sức sống cho các nhân vật hoạt hình và rất tuyệt vời để thu hút khách hàng mới cũng như sử dụng trên phương tiện truyền thông xã hội.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "VideoAnimation",
    data(){

    }
}
</script>