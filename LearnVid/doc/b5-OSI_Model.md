#   Giới thiệu tổng quan về mô hình OSI

## Open Systems Interconnection


### 1.  Đặc trưng
- Kết nối giao tiếp giữa các máy tính khác nhau , các loại swith được kết nối vào router. Mô hình OSI có thể bỏ qua các rào cản bên trên, giúp móc nối tới các máy tính lấy file ,...
- Cho nên quá trình nâng cấp bố sung thiết bị sau này trên hệ thống mạng không phức tạp lắm, chúng ta chỉ cần nắm rõ mô hình OSI này thì có thể vận hành được rất nhiều sản phẩm của các hãng khác nhau.
![Alt text](<../Screenshot 2023-08-10 at 05.16.02.png>)
-  Mô hình OSI gồm 7 phần lớp : 


    ![Alt text](<../Screenshot 2023-08-10 at 08.26.13.png>)


Problem : 2 máy tính đang sử dụng 2 loại ngôn ngữ mạng (ipv4 và ipv6). Chắc chắn là 2 Pc không thể móc nối đến nhau để giao tiếp và truyền dữ liệu.
![Alt text](<../Screenshot 2023-08-10 at 08.22.37.png>)

=> Điều kiện cần để giao tiếp : Chúng phải nói chuyện cùng ngôn ngữ, cùng 1 chồng giao thức   
Vd : Pc B vừa giao tiếp được ipv4 và ipv6
![ ](<../Screenshot 2023-08-10 at 08.29.19.png>)



-   Hiện nay chồng giao thức mà các thiết bị trên toàn Internet được sử dụng giao tiếp với nhau được gọi là chồng giao thức TCP/IP. Được gọi là chồng giao thức bởi nó được kết hợp từ nhiều giao thức khác nhau : 
![Alt text](<../Screenshot 2023-08-10 at 08.34.14.png>)
-  Giao thức là bộ quy tắc chuẩn chung mà các thiết bị mạng cần phải tuân theo thì mới có thể giao tiếp được với nhau.  
Chẳng hạn như lớp Transport bên dưới : ![Alt text](<../Screenshot 2023-08-10 at 08.39.18.png>)
Phải tuân theo 1 tiêu chuẩn là TCP thì mới giao tiếp được với nhau.
###  2.  Quy tắc và ứng dụng.
   -   Chúng ta cần nắm rõ vì sao mô hình OSI được phần thành 7 lớp công việc
   -   Một máy tính chúng ta khi muốn truyền dữ liệu đến một thiết bị đầu cuối khác thì cần giải quyết rất nhiều công việc. Một cơ quan không thể giải quýet hết lượng lớn công việc, nên người ta đã chia thành các phần lớp. Nghĩa là các công việc có tính chất chung người ta sẽ gom lại thành một phân lơp như vậy tạo thành 7 phân lớp của mô hình OSI ![Alt text](<../Screenshot 2023-08-10 at 08.49.04.png>)
#### Mô hình OSI mang lại những lợi ích gì ?
-   Giảm thiểu độ phức tạp trong quá trình vận hành hệ thống mạng.
![Alt text](<../Screenshot 2023-08-10 at 09.02.54.png>)
1.  Những đội chuyên về thi công hạ tầng mạng cab thì sẽ nghiên cứu sâu về lớp physical
2. Cấu hình hạ tầng switch thì nghiên cứu kĩ về lớp Data Link
3.  Nghiên cứu công nghệ liên quan đến định tuyến (vd : ta thi công 2 đường ra internet thì ta sẽ nghiên cứu để chia tải ra 2 đường này) Chúng ta có thể nghiên cứu các công nghệ liên quan đến lớp network, những giao thức định tuyến động chúng ta sẽ nghiên cứu sau.
4.  Còn nếu chúng ta quan tâm đến cấu hình lập lưu lượng, cấu hình firewall chúng ta có thể nghiên cứu kĩ đến lớp transport.
5. Việc nghiên cứu về hệ điều hành như : cài đặt Mail Server, Web Server, chúng ta có thể nghiên cứu đến các lớp ở trên cùng . Từ lớp 7 ->> lớp 5.

==> Như vậy quá trình vận hành hệ thống mạng của chúng ta sẽ trở nên 1 cách đơn giản hơn, chúng ta sẽ xây dựng thành những đội chuyên biệt. Từng đội như vậy sẽ phụ trách công việc của từng lớp mô hình OSI  

-   Lợi ích thường thấy nhất của mô hình OSI là chúng ta hay sử dụng mô hình để phân tích quy tác giao tiếp với nhau . Thông qua việc phân tích cơ chế hoạt động của các thiết bị trao đổi dữ liệu như thế nào mà chúng ta có thể khắc phục sự cố hệ thống mạng. Ví dụ như khi một máy tính không đi ra được Internet thì chúng ta kiểm tra
1.   Lớp physical : cắm cáp trên thiết bị đó chưa. 
2.  Nếu đã cắm cáp rồi thì chúng ta có thể kiểm tra kiểu đóng gói,
layer high như ethernet hay pppoe(công nghệ quay số hay dùng ở modem).  Nếu công nghệ truy nhập không phù hợp với môi trường truyền dẫn thì không bao giờ giao tiếp với Internet.
3. Nếu lớp physical đã ổn và lớp Data Link đã đảm bảo rồi mà máy tính vẫn không đi được Internet thì chúng ta có thể kiểm tra lớp Network xem đã có IP hay chưa. Địa chỉ này có trùng với thiết bị khác hay chưa 
4. Sau khi xác đinh là máy tính đã có IP rồi mà vẫn không đi được Internet thì chúng ta có thể kiểm tra firewall trên hệ thống mạng hay firewall trên thiết bị đầu cuối có chặn lưu lượng đó hay không, nếu có thì mở nó ra.
5. Cuối cùng là lỗi liên quan đến phần mềm thì chúng ta có thể gỡ cài đặt phần mềm đó ra rồi cài đặt lại từ đầu. 

==> Chúng ta có thẻ dựa vào mô hình này để khắc phục sự cố hệ thống thông qua việc hiểu cơ chế hoạt động của các thiết bị trên hệ thống dựa trên vào mô hình chuẩn hóa OSI này .

- Các chủ đề mà chúng ta sẽ tìm hiều tại các phân lớp tron mô hình OSI :   

![Alt text](<../Screenshot 2023-08-10 at 09.20.16.png>)



