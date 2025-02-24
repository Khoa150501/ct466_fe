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
    <img src="/src/assets/img/slidebar/Business.jpg" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Kinh doanh</h1>
         <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Business/Business Formation.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Đào tạo & Tư vấn</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Business/General and Administrative.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Hoạt động & Quản lý </h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Business/Legal Consulting .jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Dịch vụ pháp lý</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Business/Sales _ Customer Care.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Bán hàng & Chăm sóc khách hàng</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>

        <!-- <div class="row mt-5">
            <div class="col ">
                <img src="/src/assets/img/category/Design/what-can-a-3d-designer-do.jpg" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Thiết kế 3D</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
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
            </div>
        </div> -->
    </div>


        <h2 class="mt-5">Các câu hỏi thường gặp?</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Các dịch vụ cốt lõi mà một doanh nghiệp cần là gì?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Mỗi doanh nghiệp là một hệ thống có môi trường bên ngoài. Người quản lý doanh nghiệp vừa phải chỉ đạo các quy trình nội bộ vừa phải phản ứng với môi trường bên ngoài đó. Do đó, bạn cần các dịch vụ hỗ trợ hiệu suất của mình với tư cách là người quản lý hoặc chủ doanh nghiệp, chẳng hạn như trợ lý ảo và tư vấn kinh doanh, tài chính và nhân sự. Hơn nữa, doanh nghiệp của bạn tương tác với nhiều bên ngoài: khách hàng, đối tác kinh doanh, đối thủ cạnh tranh và cơ quan pháp lý. Để kinh doanh thành công, bạn cần tìm hiểu đối thủ cạnh tranh của mình bằng cách tiến hành nghiên cứu thị trường. Khi bạn có một đề xuất để thực hiện, bạn cần một kế hoạch kinh doanh và bài thuyết trình tuyệt vời để thuyết phục các đối tác kinh doanh và các bên liên quan của mình. Quản lý chuỗi cung ứng, dịch vụ bán hàng và chăm sóc khách hàng đều có thể giúp bạn cung cấp một sản phẩm tuyệt vời và giữ cho khách hàng của bạn hài lòng. Cuối cùng nhưng không kém phần quan trọng, việc có một cố vấn pháp lý bên cạnh là điều cần thiết để bảo vệ doanh nghiệp của bạn.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Tôi cần những dịch vụ kinh doanh nào cho công việc kinh doanh hàng ngày của mình?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Trước hết, doanh nghiệp của bạn cần bán hàng để tạo ra doanh thu. Do đó, bạn cần các dịch vụ bán hàng để giúp bạn có được khách hàng mới. Ngoài ra, dịch vụ chăm sóc khách hàng rất quan trọng để giữ chân khách hàng hiện tại và thuyết phục họ mua hàng trở lại. Nếu bạn cung cấp hàng hóa vật chất, bạn có thể cũng sẽ được hưởng lợi từ các dịch vụ quản lý chuỗi cung ứng. Đối với một cửa hàng trực tuyến, bạn có thể cân nhắc đến quản lý thương mại điện tử để giải quyết mọi vấn đề kỹ thuật và các hoạt động tiếp thị tốt nhất. Khi doanh nghiệp của bạn phát triển, sẽ có hai tác động chính. Đầu tiên, bạn cần một người mà bạn có thể giao phó các nhiệm vụ quản lý thường ngày và hỗ trợ các nhiệm vụ tốn thời gian khác nhau. Bạn có thể thuê các nhà cung cấp dịch vụ quản lý dự án và trợ lý ảo, những người sẽ làm việc trực tiếp với bạn để giữ cho doanh nghiệp của bạn đi đúng hướng.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Tôi cần những dịch vụ kinh doanh nào để lập kế hoạch dài hạn?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Mọi doanh nghiệp đều cần một chiến lược dài hạn. Bắt đầu bằng nghiên cứu thị trường giúp bạn xác định các phân khúc hấp dẫn. Ngay tại giai đoạn này, nhưng đặc biệt là trong giai đoạn lập kế hoạch tiếp theo, bạn nên cân nhắc các dịch vụ tư vấn kinh doanh và tư vấn tài chính. Hơn nữa, sau khi có chiến lược, bạn có thể thuê các nhà cung cấp dịch vụ lập kế hoạch kinh doanh và trình bày kinh doanh để biến chiến lược mới được hỗ trợ của bạn thành lộ trình. Bạn cũng cần những dịch vụ này để hình dung tốt ý tưởng kinh doanh của mình và bằng chứng về khái niệm khi đàm phán với các nhà đầu tư kinh doanh. Tùy chọn, bạn có thể cần thuê các dịch vụ pháp lý để tạo khuôn khổ pháp lý cho ý tưởng kinh doanh của mình. Các dịch vụ tư vấn nguồn nhân lực sẽ giúp bạn nêu rõ nhu cầu về nhân sự và hình thành chiến lược tuyển dụng vững chắc.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Sự khác biệt giữa tư vấn tài chính và tư vấn kinh doanh là gì?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Tư vấn kinh doanh là một thuật ngữ rộng hơn và có thể tùy chọn bao gồm tư vấn tài chính. Một cố vấn kinh doanh có thể hướng dẫn dự án kinh doanh của bạn từ giai đoạn lập kế hoạch và phát triển sớm nhất, giúp bạn định hình ý tưởng, đưa chúng vào giấy tờ và nếu cần, tiếp tục hiện thực hóa chúng một cách thường xuyên. Ngoài ra, một cố vấn kinh doanh có thể can thiệp vào một doanh nghiệp cụ thể đang gặp vấn đề, giúp xác định và triển khai chiến lược ổn định. Một cố vấn tài chính sẽ giúp theo cách tương tự, nhưng tập trung cụ thể vào các khía cạnh tài chính của doanh nghiệp bạn. Họ sẽ giúp bạn điều chỉnh dòng tiền, ngân sách, bảo hiểm và thuế của mình với chiến lược kinh doanh chung hoặc sắp xếp lại tài chính của bạn cho các giai đoạn trưởng thành hơn của doanh nghiệp. Một cố vấn tài chính cũng có thể giúp bạn tiết kiệm và/hoặc đầu tư tiền của mình một cách hiệu quả.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "Business",
    data(){

    }
}
</script>