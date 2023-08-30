# Phần 5: Mối tương quan giữa địa chỉ MAC và địa chỉ IP 

## 1. OSI Model: Ethernet frame 
-   Mỗi thiết bị được định danh bằng khái niệm là địa chỉ MAC. Mỗi card mạng sẽ sở hữu địa chỉ MAC và mỗi máy tính chúng ta được trang bị một card mạng chúng sẽ sở hữu một địa chỉ mac duy nhất 
-   Khảo sát địa chỉ Mac: nó nằm trong cấu trúc frame, đối với frame thì nó hoạt động ở mô hình OSI giúp xử lí Ethernet Header, nó sở hữu hai trường là địa chỉ Mac đích và Mac nguồn ![Alt text](<Screenshot 2023-08-28 at 21.28.33.png>)  
Địa chỉ Mac được viết dưới dạng 6 cặp số hexa 
## 2. Mac Address & IP Addres
-   Tuy nhiên các thiết bị trên hệ thống mạng muốn giao tiếp với nhau thì vẫn chưa thể dựa vào địa chỉ Mac đơn thuần được, chúng ta cần phải có địa chỉ luận lí gọi là ip address. Ip address nằm trong IP Header của đơn vị dữ liệu gọi là packet hoạt động tại lớp Network của mô hình OSI.
![Alt text](<Screenshot 2023-08-28 at 21.33.14.png>)

-   Trong trường hợp này mà muốn máy tính pc1 muốn gửi dữ liệu cho pc8 thì nó sẽ biên tập một gói tin với Src Mac là của nó và Dst Mac là của máy nhận. Lúc này nó sẽ trung chuyển được trên hạ tầng switch nó sẽ đẩy chính xác đến pc8. Tuy nhiên số lượng thiết bị đầu quá lớn khó quản trị thì chúng ta cần một cấu trúc địa chỉ phân lớp chức năng cho từng phòng ban. Cho nên lúc này chúng ta bắt buộc sử dụng cấu trúc của địa chỉ ip 
![Alt text](<Screenshot 2023-08-28 at 21.43.13.png>)
Như chúng ta thấy thì 2 bên sẽ sử dụng hai đường mạng khác nhau và mỗi thiết bị đều sử dụng một địa chỉ ip duy nhất 
-   Nếu chúng ta muốn chia một địa chỉ mạng thành nhiều địa chỉ nhỏ hơn thì chúng ta cần sử dụng loại bảng địa chỉ có phân cấp là dịa chỉ IP. Trong số các địa chỉ ip luận lí sử dụng nhiều nhất hiện này thì chúng ta có địa chỉ ipv4 như hình bên trên. 
-   Để hình dung tương quan về địa chỉ Mac và Ip. Khi đứng ở pc1 và pc8 khi 2 pc khác mạng với nhau muốn giao tiếp với nhau thì trên máy tính pc 1 chúng ta cần khai báo khái niệm là default gateway của router, pc8 cũng tương tự
![Alt text](<Screenshot 2023-08-28 at 21.51.08.png>)

-   Khi pc1 gửi 1 gói tin tới pc8 thì nó sẽ soạn thảo ra 1 bản tin là : src ip là của pc1, dst ip là của pc8, src Mac là của pc1, dst Mac là của Router hay còn gọi là Mac của Router nhờ việc xác nhận từ default gateway mà nó có thể chuyển đổi sang địa chỉ Mac tương ứng. Pc1 gửi gói tin tới switch sau đó nó xác định chính xác và gửi gói tin tới gateway.
![Alt text](<Screenshot 2023-08-28 at 21.52.56.png>)
-   Khi Router nhận được gói tin gửi đi từ pc1, nó sẽ đọc vào cái thông tin của bản tin ip đích. Nó sẽ làm thao tác định tuyến, nhìn vào ip đích này nó xác định muốn vào lớp mạng 10 này thì nó phải đẩy qua phân mạng bên phải. Trước khi gửi đi qua mạng bên phải thì nó sẽ gắn địa chỉ Mac với src Mac là chính nó và dst Mac là của pc8.
![Alt text](<Screenshot 2023-08-28 at 21.58.24.png>)
### => Đối với địa chỉ Mac thì nó chỉ có tác dụng trên từng vùng mạng, còn đối với ip thì nó có khả năng vận chuyển dữ liệu giữa các phân đoạn mạng với nhau.