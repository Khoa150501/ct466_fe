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
    <img src="/src/assets/img/slidebar/free music making software.jpg" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Nhạc và Âm thanh</h1>
         <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Music&Audio/Music Production _ Writing.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Sản xuất & Viết nhạc</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Music&Audio/Audio Engineering _ Post-production.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Kỹ thuật âm thanh</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Music&Audio/Voice Over _ Streaming.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Lồng tiếng</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Music&Audio/Lessons _ Transcription.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Bài học & Phiên âm</h4>
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
                <img src="/src/assets/img/category/Music&Audio/DJing.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>DJing</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Music&Audio/Miscellaneous.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Sound Design</h4>
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
        Dịch vụ âm nhạc và âm thanh là gì?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Đây là những dịch vụ do các nhạc sĩ, ca sĩ, nhà soạn nhạc, nhà sản xuất, chuyên gia công nghệ âm nhạc và các chuyên gia rộng hoặc hẹp khác cung cấp. Cho dù bạn muốn đánh bóng album mới của mình, cần một đoạn nhạc quảng cáo hay giọng lồng tiếng cho khóa học của mình, tất cả đều có trong Âm nhạc & Âm thanh.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Làm thế nào để chọn được người làm việc tự do phù hợp cho dự án âm nhạc của tôi?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Nếu bạn muốn một kỹ sư phối âm, chuyên gia lồng tiếng hoặc nhạc công, Fiverr có người làm việc tự do phù hợp cho dự án âm nhạc của bạn. Quyết định nhu cầu, thời hạn và ngân sách của bạn, duyệt qua danh sách các chuyên gia, xem danh mục đầu tư và đánh giá của họ và luôn liên hệ với người bán trước khi đặt hàng.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Dịch vụ âm nhạc trực tuyến có những lợi ích gì?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Các chuyên gia về âm nhạc và âm thanh đều ở cùng một nơi, sẵn sàng phục vụ 24/7. Với Fiverr, bạn có thể tăng hoặc giảm quy mô dự án của mình mà không cần hợp đồng hay đàm phán dài dòng, hoàn thành công việc nhanh chóng và thay đổi nhà cung cấp hoặc làm việc với nhiều người làm việc tự do theo ngân sách và thời gian của bạn.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Fiverr cung cấp những loại dịch vụ Âm nhạc & Âm thanh nào?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Fiverr cung cấp dịch vụ cho các nhạc sĩ chuyên nghiệp bởi các nhạc sĩ chuyên nghiệp bao gồm phối nhạc, học nhạc, nhà sản xuất & nhạc sĩ và làm beat. Nếu bạn làm trong ngành quảng cáo và cần một đoạn nhạc quảng cáo, quảng cáo âm thanh hoặc lồng tiếng thì tất cả đều có ở đây trong mục Dịch vụ âm nhạc & âm thanh của những người làm việc tự do giàu kinh nghiệm.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "MusicAudio",
    data(){

    }
}
</script>