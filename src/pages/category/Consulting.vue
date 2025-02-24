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
    <img src="/src/assets/img/slidebar/IT-policies-bk.jpg" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Tư vấn</h1>
         <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Consulting/assets_1269a57212df4631b866219ba2013fa8_cdff0fe7e82149dda184c9f771ded575.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Tư vấn kinh doanh</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Consulting/assets_1269a57212df4631b866219ba2013fa8_a73e68c4d8f249d09b64eaa1f8d958a0.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Chiến lược tiếp thị</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Consulting/assets_1269a57212df4631b866219ba2013fa8_dea710eee32a4ca1a21f1c78b3c18fb2.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Tư vấn công nghệ</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Consulting/assets_1269a57212df4631b866219ba2013fa8_442107d7f8a947fb82b7ea076016892d.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Huấn luyện & Tư vấn</h4>
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
                <img src="/src/assets/img/category/Consulting/assets_1269a57212df4631b866219ba2013fa8_4a1b09562fbe4bfc81aa72d6524e1b8b.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Cố vấn</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <!-- <img src="/src/assets/img/category/Design/marketing-nen-hoc-thiet-ke01.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Marketing Design</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div> -->
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
        Tôi có thể tìm thấy những loại dịch vụ tư vấn nào trên nền tảng này?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Nền tảng của chúng tôi cung cấp nhiều dịch vụ tư vấn đa dạng từ nhiều danh mục khác nhau, trải dài trên nhiều ngành công nghiệp. Từ các loại hình kinh doanh, tư vấn pháp lý và tài chính khác nhau đến các loại chiến lược và kế hoạch khác nhau, dịch vụ huấn luyện cá nhân và cố vấn, mỗi danh mục đều có các chuyên gia tư vấn tự do giàu kinh nghiệm sẵn sàng cung cấp lời khuyên cá nhân và các giải pháp hiệu quả phù hợp với nhu cầu và mục tiêu cụ thể của bạn.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Tôi có thể nhận được lời khuyên tư vấn cụ thể về ngành trên nền tảng này không?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Chắc chắn rồi. Nền tảng của chúng tôi tự hào có nhiều chuyên gia tư vấn chuyên về nhiều ngành khác nhau như công nghệ, tiếp thị, nhân sự, giáo dục, bán lẻ, v.v. Điều này đảm bảo bạn có thể tìm thấy lời khuyên chuyên môn được thiết kế tỉ mỉ theo những thách thức và cơ hội cụ thể trong ngành của bạn.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Làm thế nào để tôi chọn được chuyên gia tư vấn phù hợp với nhu cầu kinh doanh của mình?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Nền tảng của chúng tôi cung cấp hồ sơ chi tiết để giúp bạn đưa ra quyết định sáng suốt. Hãy xem xét kinh nghiệm của chuyên gia tư vấn, chuyên môn trong ngành của bạn, xếp hạng của chuyên gia tư vấn, đánh giá của khách hàng và mô tả dịch vụ chi tiết để hỗ trợ bạn đưa ra lựa chọn tốt nhất cho nhu cầu tư vấn của mình.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Tôi có thể nhận được gói tư vấn tùy chỉnh phù hợp với nhu cầu cụ thể của mình không?                     
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Chắc chắn rồi! Những người làm việc tự do trên nền tảng của chúng tôi thường cung cấp các gói tùy chỉnh. Chỉ cần liên hệ với một chuyên gia tư vấn với các yêu cầu cụ thể của bạn và họ sẽ điều chỉnh các dịch vụ của mình để đáp ứng nhu cầu riêng của bạn.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "Consulting",
    data() {

    }
}
</script>