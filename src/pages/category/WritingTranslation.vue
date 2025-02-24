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
    <img src="/src/assets/img/slidebar//Writing for Translations Blog Header.png" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Viết & Dịch thuật</h1>
        <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Writing&Translate/Miscellaneous.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Viết nội dung</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Writing&Translate/Content Writing _ Editing.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Biên tập & Phê bình</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Writing&Translate/Book Publishing.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Xuất bản sách</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Writing&Translate/Translation _ Transcription.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Phiên dịch & Phiên âm</h4>
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
                <img src="/src/assets/img/category/Writing&Translate/Business Copy.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Bản sao kinh doanh & tiếp thị</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Writing&Translate/Career Writing.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Viết về nghề nghiệp</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <!-- <img src="/src/assets/img/category/Design/Fashion _ Merchandise.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Thời trang hàng hóa</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div> -->
            </div>
            <div class="col ">
                <!-- <img src="/src/assets/img/category/Design/Packaging _ Labels.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Bao bì & Vỏ bọc</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div> -->
            </div>
        </div>
    </div>


        <h2 class="mt-5">Các câu hỏi thường gặp?</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Tôi nên chọn người viết như thế nào?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Nội dung tuyệt vời hiện là điều bắt buộc đối với doanh nghiệp của bạn, vì vậy việc tìm đúng người viết là một trong những chìa khóa thành công. Xác định rõ ràng mục tiêu nội dung của bạn trước khi bạn bắt đầu tìm kiếm một người làm việc tự do, sau đó chọn đúng danh mục và nghiên cứu bằng cách đọc các bài đánh giá và xem danh mục đầu tư, kỹ năng và kinh nghiệm trước khi bạn chọn một vài người viết. Liên hệ với một số người bán mà bạn đã chọn và trực tiếp hỏi họ một số câu hỏi để đánh giá trình độ kiến ​​thức và chuyên môn của họ.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nội dung có thể giúp ích gì cho doanh nghiệp của tôi?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Nội dung có thể tạo nên hoặc phá vỡ doanh nghiệp của bạn, vì vậy điều quan trọng là bạn phải sử dụng nó trên tất cả các kênh của mình - trang web, phương tiện truyền thông xã hội, email, quảng cáo, v.v. - theo cách giúp ích và thúc đẩy doanh nghiệp của bạn. Một người viết nội dung giỏi không chỉ tạo ra văn bản hấp dẫn mà còn có thể đặt đúng câu hỏi trước để họ có thể chắc chắn tạo ra một bài viết hoặc quảng cáo hoặc bản sao nhỏ bán thương hiệu của bạn theo đúng cách cho đúng người.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Sự khác biệt giữa viết quảng cáo và viết nội dung là gì?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Kể chuyện là chìa khóa cho cả người viết quảng cáo và người viết nội dung, nhưng nó được sử dụng cho các mục đích khác nhau. Người viết quảng cáo hướng đến việc chuyển đổi và bán sản phẩm hoặc dịch vụ bằng câu chuyện. Trong khi đó, người viết nội dung hướng đến sự tương tác và xây dựng cam kết nhiều hơn và có thể đi nhiều hướng trước khi đề cập đến thương hiệu hoặc sản phẩm. Viết quảng cáo ra lệnh cho người đọc bằng lời kêu gọi hành động rõ ràng, trong khi người viết nội dung tạo ra sự tương tác phức tạp thông qua cuộc trò chuyện kéo dài hơn với khán giả.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Tại sao nội dung lại quan trọng?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Cho dù đó là nội dung trang web, bộ nhận diện thương hiệu, tài liệu bán hàng hay bất kỳ nội dung nào khác, thì đó là công cụ quan trọng nhất mà bạn có để kể một câu chuyện hấp dẫn. Mặc dù hình ảnh có thể nói lên hàng ngàn từ, nhưng bạn vẫn cần thực sự sử dụng các từ ngữ để thu hút khách truy cập và biến họ thành khách hàng (trung thành). Với rất nhiều sự lựa chọn về tài năng từ mọi nền tảng và ngành nghề khác nhau, việc đạt được nội dung được trau chuốt, được nghiên cứu kỹ lưỡng, luôn tỏa sáng và thu hút đúng đối tượng chưa bao giờ dễ dàng đến thế.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "WritingTranslation",
    data(){

    }
}
</script>