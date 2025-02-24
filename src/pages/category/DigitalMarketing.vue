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
    <img src="/src/assets/img/slidebar/marketing.png" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Tiếp thị & Kỹ thuật số</h1>
        <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/DigitalMarketing/Search.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Tìm kiếm</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/DigitalMarketing/Social.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Xã hội</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/DigitalMarketing/Methods _ Techniques.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Phương pháp & Kỹ thuật</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/DigitalMarketing/Analytics _ Strategy.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Phân tích & Chiến lược</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col text-start">
                <img src="/src/assets/img/category/DigitalMarketing/Industry _ Purpose-Specific.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Ngành công nghiệp & <br> Mục tiêu cụ thể</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <!-- <div class="col ">
                <img src="/src/assets/img/category/Design/marketing-nen-hoc-thiet-ke01.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Marketing Design</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Design/Fashion _ Merchandise.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Thời trang hàng hóa</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Design/Packaging _ Labels.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Bao bì & Vỏ bọc</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div> -->
        </div>
    </div>


        <h2 class="mt-5">Các câu hỏi thường gặp?</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Dịch vụ tiếp thị Internet là gì?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Theo định nghĩa, tiếp thị kỹ thuật số (hay còn gọi là tiếp thị trực tuyến hoặc dịch vụ tiếp thị Internet) quảng bá thương hiệu, sản phẩm và dịch vụ của khách hàng thông qua Internet hoặc các kênh kỹ thuật số khác. Một chiến dịch tiếp thị kỹ thuật số thường được phân phối thông qua một thiết bị điện tử, chẳng hạn như máy tính, máy tính bảng, điện thoại hoặc phương tiện khác và tận dụng một hoặc nhiều kênh, chẳng hạn như phương tiện truyền thông xã hội, công cụ tìm kiếm, trang web, email và các kênh khác, tùy theo lựa chọn của nhà tiếp thị kỹ thuật số dựa trên mục tiêu của bạn, để nâng cao nhận thức về thương hiệu trong số khách hàng tiềm năng và hiện tại.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Một nhà tiếp thị kỹ thuật số làm gì?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Một nhà tiếp thị kỹ thuật số tìm ra các giải pháp sáng tạo để thúc đẩy nhận thức về thương hiệu và tạo khách hàng tiềm năng thông qua các kênh kỹ thuật số miễn phí hoặc trả phí, bao gồm email, công cụ tìm kiếm, phương tiện truyền thông xã hội, trang web và blog của công ty. Sự kết hợp chính xác sẽ phụ thuộc vào các mục tiêu cụ thể của khách hàng. Nhà tiếp thị kỹ thuật số tập trung vào các KPI (chỉ số hiệu suất chính) có liên quan để đo lường hiệu suất và tối đa hóa tiềm năng doanh thu. Một số công ty có các nhà tiếp thị kỹ thuật số nội bộ trong khi những công ty khác thích thuê ngoài, tìm kiếm các kỹ năng khác nhau ở các công ty môi giới hoặc người làm việc tự do, tùy thuộc vào sự kết hợp kênh của họ.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Các chiến dịch kỹ thuật số hoạt động như thế nào?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Một chiến dịch tiếp thị kỹ thuật số được lên kế hoạch và thực hiện tốt sẽ nhắm mục tiêu đúng đối tượng tiềm năng cho sản phẩm hoặc dịch vụ của bạn vào đúng thời điểm, điều đó có nghĩa là họ có nhiều khả năng mua hoặc đặt những gì bạn cung cấp. Nó linh hoạt hơn, hiệu quả hơn và tiết kiệm chi phí hơn nhiều phương pháp tiếp thị truyền thống và cho phép bạn cạnh tranh với những đối thủ lớn trong ngành của mình ngay cả khi bạn chỉ là một người chơi nhỏ. Nó cũng cung cấp phân tích chi tiết để bạn có thể đo lường mọi thứ từ số lượng khách truy cập, đến thời gian họ dành trên trang của bạn, họ có thực hiện bán hàng hay không và nhiều hơn thế nữa, bao gồm chi phí cho mỗi lần nhấp và ROI (lợi tức đầu tư)</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Tại sao tiếp thị kỹ thuật số lại quan trọng?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Ngày nay, vấn đề không còn là NẾU bạn có sự hiện diện kỹ thuật số mà là BẠN giỏi đến mức nào trong việc tận dụng tối đa sự hiện diện kỹ thuật số của mình để bạn có thể và duy trì được khả năng cạnh tranh. Đó là nơi tiếp thị Internet đóng vai trò quan trọng. Người tiêu dùng ngày càng trở nên tinh vi hơn. Họ có kỳ vọng cao hơn khi nói đến các thương hiệu mà họ tương tác và nhiều cách để tiếp cận họ, chẳng hạn như video, email, công cụ tìm kiếm và phương tiện truyền thông xã hội.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "Marketing",
    data(){

    }
}
</script>