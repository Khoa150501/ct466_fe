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
         <img src="/src/assets/img/slidebar/grap.jpg" style="width: 100%; height: 300px; border-radius: 10px; margin-top: 10px;">
    </div>
    <div class="container mt-5">
        <h1>Đồ họa & Thiết kế</h1>
    <div class="container mt-5 text-center">
        <div class="row">
            <div class="col ">
                <img src="/src/assets/img/category/Design/unnamed.png" alt="" class="img-resize ">
                <div class="text-start mt-2">
                    <h4>Thiết kế logo</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Design/How_to_design_an_app.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Thiết kế web & ứng dụng</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Design/16183666541NUZRHMEK4OVVRp.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Nghệ thuật & vẽ minh họa</h4>
                     <ul class="sub-list">
                        <li><a href="#">Danh thiếp & Văn phòng phẩm</a></li>
                        <li><a href="#">Thiết kế logo cho nhãn hàng</a></li>
                        <li><a href="#">Logo kinh doanh</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col ">
                <img src="/src/assets/img/category/Design/AdobeStock_91616961.jpg" alt="" class="img-resize ">
                              <div class="text-start mt-2">
                    <h4>Kiến trúc & xây dựng</h4>
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
        </div>
    </div>
   
    <h2 class="mt-5">Các câu hỏi thường gặp về Thiết kế đồ họa?</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Thiết kế đồ họa là gì?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Nói một cách đơn giản, thiết kế đồ họa là nghệ thuật và nghề thủ công tạo ra nội dung trực quan truyền đạt một khái niệm, ý tưởng hoặc thông điệp thương hiệu đến công chúng. Logo, tác phẩm nghệ thuật, bản vẽ, minh họa, thiệp, email và toàn bộ các thiết kế phụ trợ đều ở xung quanh chúng ta. Bạn có thể thấy chúng trên phương tiện in ấn và kỹ thuật số, trong các cửa hàng, nhà hàng và quán cà phê, trên các biển quảng cáo, sách và tạp chí, trong các ứng dụng chúng ta sử dụng, các trang web chúng ta truy cập và các sản phẩm vật lý và kỹ thuật số chúng ta mua. Trên thực tế, thiết kế đồ họa là một loại phương tiện truyền thông sử dụng các phương tiện trực quan để truyền tải thông điệp. Các nhà thiết kế sử dụng các loại vật liệu hoặc phần mềm vật lý khác nhau để kết hợp hình ảnh, đồ họa và văn bản làm các hình thức chính để thể hiện thông điệp này. Thiết kế đồ họa được sử dụng để bán hàng, xây dựng bản sắc thương hiệu hoặc thúc đẩy mọi người thực hiện các hành động cụ thể. Nó cũng là một hình thức nghệ thuật nhưng cuối cùng, các yếu tố khác nhau của biểu diễn đồ họa ảnh hưởng đến nhận thức và cảm xúc của chúng ta. Có nhiều loại thiết kế đồ họa khác nhau như 'nhận diện trực quan' liên quan đến các yếu tố trực quan của thương hiệu thông qua hình dạng, màu sắc và hình ảnh (ví dụ: thiết kế logo, kiểu chữ, hướng dẫn về phong cách thương hiệu) và 'tiếp thị và quảng cáo' được sử dụng trực tiếp để tạo khách hàng tiềm năng và doanh số thông qua bản in (bảng quảng cáo, tờ rơi, tờ rơi, quảng cáo in) hoặc kỹ thuật số (bài đăng trên phương tiện truyền thông xã hội, biểu ngữ, video). Có nhiều loại khác như thiết kế trang web, thiết kế công nghiệp và sản phẩm, thiết kế thời trang, sách và hình minh họa, thiết kế đồ họa chuyển động được sử dụng chẳng hạn bởi những người phát trực tuyến hoặc trong thiết kế trò chơi và nhiều loại khác.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Làm thế nào để thuê được nhà thiết kế ưng ý nhất?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Một sự hiện diện trực quan hấp dẫn là rất quan trọng cho dù bạn là một doanh nghiệp hay một thực thể phi thương mại. Đối tượng tiềm năng của bạn đã hình thành ý kiến ​​và quyết định có tương tác với bạn hay không dựa trên những gì họ thấy, rất lâu trước khi bạn có cơ hội nói hoặc viết điều gì đó. Vì vậy, điều bắt buộc là phải lựa chọn cẩn thận người làm việc tự do phù hợp để đáp ứng nhu cầu của bạn và giữ cho bạn trong phạm vi ngân sách. Có nhiều lĩnh vực khác nhau mà các nhà thiết kế đồ họa chuyên về, vì vậy nếu bạn muốn thuê đúng người tài để đáp ứng các yêu cầu của dự án cụ thể của mình, sau đây là một số mẹo và thủ thuật dễ làm theo. - Luôn nghiên cứu danh mục đầu tư của họ trên Fiverr và yêu cầu thêm ví dụ nếu cần; - Hãy suy nghĩ cẩn thận về phong cách và sở thích của bạn để bạn biết mình thích gì, không thích gì và thực sự muốn gì (màu sắc, đồ họa, hình ảnh, v.v.); - Viết một bản tóm tắt rõ ràng - tùy thuộc vào quy mô của dự án, bản tóm tắt của bạn có thể rất ngắn hoặc chứa nhiều chi tiết. Điều quan trọng là phải làm rõ các điểm quan trọng; - Xác định ngân sách và nói rõ với chính bạn và người làm việc tự do rằng bạn có thể kéo dài ngân sách đến mức nào; - Đưa ra thỏa thuận rõ ràng về thời hạn và sửa đổi, tôn trọng công việc của nhà thiết kế - nếu bạn hiểu rõ về các điểm trên thì sẽ không có bất ngờ nào xảy ra; - Nghĩ xa - một nhà thiết kế giỏi sẽ có thể giúp bạn toàn diện và phát triển tầm nhìn dài hạn cho sản phẩm hoặc dịch vụ của bạn.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Chi phí phải trả là bao nhiêu?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Không có câu trả lời đơn giản cho câu hỏi này vì thiết kế đồ họa không phải là một mặt hàng hay sản phẩm có cách chính xác để đo lường hoặc định giá. Điều tuyệt vời về Fiverr là bạn có thể tìm thấy một nhà thiết kế đồ họa tự do cho bất kỳ ngân sách nào, bắt đầu chỉ từ 5 đô la cho một gig và lên đến hàng trăm hoặc hàng nghìn đô la cho các yêu cầu phức tạp hơn, tốn thời gian và tài nguyên hơn. Tuy nhiên, có một số yếu tố sẽ ảnh hưởng đến giá cuối cùng của dự án như mức độ kinh nghiệm của người bán (từ người mới bắt đầu đến Người bán được đánh giá cao nhất và Người bán chuyên nghiệp), số lượng hoặc tùy chọn dịch vụ có trong gig, thời gian giao hàng, số lần sửa đổi và liệu có cần thêm bất kỳ phần bổ sung nào vào một thời điểm nào đó hay không. Trên thực tế, việc sửa đổi có thể là một lĩnh vực rất khó khăn đối với các dự án thiết kế đồ họa, vì vậy điều quan trọng là bạn phải có các yêu cầu rất rõ ràng để bắt đầu và cũng phải đồng ý với người bán về sản phẩm đầu ra của họ (ví dụ: họ sẽ cung cấp bao nhiêu phiên bản ban đầu) để tránh mọi hiểu lầm hoặc bất ngờ không mong muốn ở cả hai bên. Một nhà thiết kế có nhiều kinh nghiệm hơn sẽ tính phí cao hơn, tuy nhiên, họ cũng có thể giúp bạn xác định các yêu cầu của mình và tiết kiệm thời gian (và tiền bạc) về lâu dài bằng cách giúp bạn đi đúng hướng để đạt được mục tiêu của mình. Mặt khác, một người làm việc tự do mới có thể ít kinh nghiệm hơn hoặc đang cố gắng xây dựng danh tiếng của mình sẽ được định giá cạnh tranh hơn nhưng có thể không có kỹ năng hoặc sự trưởng thành về mặt chuyên môn của một giám đốc sáng tạo dày dạn kinh nghiệm.</p>
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Điều gì làm cho thiết kế đồ họa trở nên quan trọng?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Chúng ta sống trong một xã hội trực quan nên hình ảnh, bao bì, biển báo, hình minh họa, trang web, ứng dụng và phương tiện truyền thông xã hội đều cạnh tranh để thu hút sự chú ý của chúng ta, khiến việc trở nên nổi bật chứ đừng nói đến việc ghi nhớ giữa vô vàn các kích thích thị giác trở nên rất khó khăn. Nói một cách ngắn gọn, nhiệm vụ quan trọng nhất mà thiết kế đồ họa đảm nhiệm là giao tiếp. Giao tiếp các ý tưởng và thông điệp, với mục tiêu cuối cùng là gợi ra, thúc đẩy hoặc gợi lên một hành động hoặc cảm xúc (sẽ trở thành hành động trong tương lai). Vì vậy, một nhà thiết kế đồ họa giỏi sẽ xây dựng logo của bạn, tạo chiến dịch email hoặc văn phòng phẩm của công ty, làm mọi thứ có thể (được giao đúng yêu cầu) để giúp bạn khác biệt so với đối thủ cạnh tranh và truyền tải thông điệp tạo nên sự tin tưởng, uy tín và xây dựng thương hiệu và danh tiếng công ty nhất quán. Một dự án thiết kế được thực hiện tốt sẽ đảm bảo rằng sản phẩm cuối cùng, cho dù là tờ rơi hay bao bì sản phẩm của bạn, hay thậm chí là thiết kế không gian văn phòng hoặc đồng phục của nhân viên tuyến đầu của bạn, sẽ tóm tắt sứ mệnh và tầm nhìn của bạn và truyền đạt một cách rõ ràng và đơn giản những ý tưởng chính đằng sau công ty hoặc tổ chức của bạn và những gì nó đại diện. Khi bạn thuê một chuyên gia thiết kế đồ họa giỏi, tốt nhất là người mà bạn có thể tin tưởng trong nhiều dự án, họ sẽ đảm bảo rằng mọi hình ảnh đại diện cho sản phẩm và thương hiệu của bạn đều nhất quán về mặt hình ảnh, dễ nhận biết và truyền tải thông điệp rõ ràng. Cuối cùng, khi bạn tự hỏi "Khách hàng nhận ra mình quan trọng đến mức nào?", nếu câu trả lời là "rất quan trọng" thì thiết kế đồ họa cũng nên dành cho thương hiệu của bạn!</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    name : "GraphicsDesign",
    data(){

    }
}
</script>