# Phần 2 : Giới thiệu chức năng của từng phân lớp trong mô hình OSI (layer 1-4 )


## Physical layer
-   Chức năng chủ yếu của lớp này là truyền các bit 01 trên môi trường truyền.
 ![Alt text](<Screenshot 2023-08-22 at 06.04.54.png>)
-   Đối với môi trường truyền thông thường sử dụng cab. Chúng ta sẽ có môi trường cab đồng hoặc cab quang. Cab đồng chúng ta sẽ có 2 loại : Cab đồng trục (Coaxial Cable) và 
+   Cab đồng trục (Coaxial Cable) dùng để truyền dẫn các tín hiệu analog
+   Cab đồng hay còn gọi là cab ethernet LAN (Copper Wire) truyền thông tín hiệu digital 
+ Lớp physical sẽ xử lí những vấn đề liên quan đến vật lý . Đối với cab đồng sử dụng chuẩn ethernet LAN thì người ta quy định nếu chúng ta sử dụng chuẩn cab 100mb thì sử dụng điện áp 1v, còn nếu ta sử dụng chuẩn cab tốc độ 10mb thì mức điện áp sử dụng tối đa là 5v. Đối với cab đồng thì chiều dài tối đa là 100m và đầu kết cuối cab là RJ45
+ Như vậy trong một số tình huống chúng ta cần khoảng cách xa hơn thì bắt buộc sử dụng tới cab quang (Fiber Optic Cable) tuy nhiên nếu chúng ta sử dụng cab quang thì nên quyết định xài chuẩn cab single mode hay multi mode. Ngoài ra cần quan tâm đến chuẩn đầu cab quang ví dụ là : SC, LC, ...  
+ Chuẩn single mode : chúng ta có thể truyền dẫn với tốc độ cao hơn , tốc độ cao hơn (theo lý thuyết có thể lên đến 10km) .
-   Trong môi trường truyền không dây thì chúng ta cũng cần quan tâm tần số bước song mà chúng ta sử dụng là bn? Ví dụ wifi có thể sử 1 trong 2 hoặc cả 2 tần số là 2.4ghz hoặc 5ghz .
-   1 ví dụ khác trong lớp physical là : hub chuyển từ USB sang RJ45, đặc biệt là các thiết bị không hỗ trợ RJ45 như ipad. Khi chúng ta tải 1 gói có lưu lượng 10gb mà sử dụng mạng không dây thì sẽ rất mất thời gian. Vậy nên chúng ta cần cải thiện tốc độ thì chúng ta cần sử dụng bộ hub chuyển sang jack RJ45 bên trên để thay thế card mạng. Tuy nhiên để sản xuất ra hub chuyển này thì chúng ta cần nghiên cứu xem đầu cab USB có bao nhiêu chân và điện áp sử dụng là bao nhiêu, jack RJ45 bao nhiêu chân hỗ trợ mức điện áp là bao nhiêu  
![Alt text](<Screenshot 2023-08-22 at 06.08.01.png>)
## Data link 
-   Một số công ngệ sử dụng phổ biến hiện nay : Ethernet, PPPoE, PPP, HDLC, MPLS, Frame Relay
+   Ethernet : cho phép cta truyền dữ liệu hiệu quả trên môi trường truyền thông tin cậy với khoàng cách ngắn
+   Đối với khỏang cách xa thì cta sử dụng PPP, HDLC
+   Đối với các dòng moderm hiện nay trên thị trường muốn truy cập internet thì sử dụng công nghệ là PPPoE
+   Hiện nay 1 công nghệ khác khá nổi bật là công nghệ chuyển mạch nhãn đa giao thức MPLS thay thế cho công nghệ Frame Relay

=> Trong những công nghệ được liệt kê ở đây thì công nghệ Ethernet được sử dụng phổ biến nhất trong hệ thống mạng LAN , tiệm net hoặc hệ thống mạng doanh nghiệp

 ![Alt text](<Screenshot 2023-08-22 at 07.07.11.png>)
 

 - Chẳng hạn card mạng : hoạt động tại lớp 1 và 2 của mô hình OSI. Cụ thể ở lớp 1 thì card mạng sẽ truyền và nhận những bit 0101 trên môi trường truyền, sau khi card mạng nhận được những bit này thì nó sẽ không có giá trị cho đến khi mà nó phải biên dịch những bit 0101 thành những bit dữ liệu có thể đọc hiểu được, cứ 8 bit gom thành 1 kí tự
 ![Alt text](<Screenshot 2023-08-22 at 07.11.48.png>)
 -  Ngoài frame Ethernet thì chúng ta còn có 1 số cấu trúc frame khác như công nghệ HDLC của cisco. 
 -  Cấu trúc frame ethernet cho phép các thiết bị trong mạng LAN truyền thông hiệu quả với khoảng cách ngắn. Dấu hiệu để ta nhận biết đây là hệ thống mang ethernet LAN đó là các thiết bị trên hệ thóng mạng của chúng ta sẽ được định danh bằng khái niệm gọi là dịa chỉ Mac
 ![Alt text](<Screenshot 2023-08-22 at 07.18.42.png>)
 -  Nếu chúng ta có nhu cầu truyền dữ liệu với khoảng cách xa hơn giữa 2 side thì có thể triển khai những công nghệ khác chẳng hạn như : HDLC hoặc PPP sau này![Alt text](<Screenshot 2023-08-22 at 07.20.43.png>)
 -  Như ta thầy cấu trúc frame HDLC khác với Ethernet, nó chứa cả trường điều khiển luồng, điều khiển lỗi 
 
 
 => Do vậy HDLC phù hợp với môi trường truyền dẫn bằng cáp đồng không tin cậy trước đây. Sau này khi mà cáp quang trở nên phổ biến hơn môi trường truyền dẫn đáng tin cậy hơn chúng ta hoàn toàn có thể thay thế công nghệ HDLC bằng cách triển khai Ethernet trên môi trường kết nối 2 site 
## Network

-    Có 3 chức năng chủ yếu là : định tuyến gói tin, chọn đường đi tối ưu, quy định cấu trúc và định dạng của địa chỉ ip 
![Alt text](<Screenshot 2023-08-22 at 07.27.06.png>)

-   Vai trò định tuyến hướng dẫn đường đi gói tin,  quyết định đường đi tối ưu (dựa vào quan điểm về phương thúc định tuyến mà chúng ta sử dụng sau này ) Nếu chúng ta sử dụng OSPF thì nó sẽ dựa vào bằng thông quyết định đường nào tốt hơn. Còn nếu sử dụng giao thức EIGP thì nó dựa vào nhiều yếu tố hơn bên cạnh bằng thông còn có độ delay , độ tin cậy và tải của môi trường truyền  ![Alt text](<Screenshot 2023-08-22 at 07.29.08.png>)
## Transport
-   Lớp transport cung cấp những cơ chế điều khiển luồng, điều khiển lỗi, giao thức truyền thông tin cậy, cung cấp phương thức truyền thông dữ liệu thời gian thực ![Alt text](<Screenshot 2023-08-22 at 07.35.22.png>)
-   2 giao thức truyền thông phổ biến là : truyền thông theo thời gian thực UDP , truyền thông tin cậy TCP. 
-   Tùy theo ứng dụng mà chúng ta lựa chọn sử dụng. Đối với UDP dành cho ứng dụng đòi hỏi thời gian thực, độ trễ thấp : voice , truyền hình ,.. Những tác vụ khác đòi hỏi độ tin cậy cao hơn vd : mail,lướt web ,.. thì chúng ta sử dụng TCP.
 ![Alt text](<Screenshot 2023-08-22 at 07.41.44.png>)
 +  Đối với UDP nếu chúng ta có nhu cầu truyền 10mb thì 10mb sẽ được phân mạnh thành các segment có kích thước nhỏ, thiết bị đầu cuối sẽ truyền lần lượt tất cả các phân mảnh sang thiết bị đầu xa. Nhược điểm là udp có khả năng dẫn đến tình huống mất mát dữ liệu và không có khả năng phục hồi những dữ liệu đã mất
 +  Đối với TCP thì ngược lại, chúng ta muốn truyền thông hiệu quả và độ tin cậy cao thì phải chọn giao thức TCP này. Trước khi truyền thì nó sẽ phân mảnh dữ liệu ra thành nhiều segment, điểm khác biệt ở đây là trước khi truyền nó sẽ đánh số thứ tự cho các segment .Đặc biệt ở đây nố sẽ không gửi ồ ạt dữ liệu như UDP mà nó sẽ gửi lần lượt, thiết bị đầu xa khi nhận được thì phải báo nhận ACK thì máy tính chúng ta mới chuyển tiếp segment tiếp theo. Bằng cách này mà dữ liệu gửi từ A -> B đều được gửi nhận thành công