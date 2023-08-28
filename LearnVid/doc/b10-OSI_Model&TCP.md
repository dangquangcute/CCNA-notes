# Phần 5: Mối tương quan giữa địa chỉ MAC và địa chỉ IP 

## 1. OSI Model: Ethernet frame 
-   Mỗi thiết bị được định danh bằng khái niệm là địa chỉ MAC. Mỗi card mạng sẽ sở hữu địa chỉ MAC và mỗi máy tính chúng ta được trang bị một card mạng chúng sẽ sở hữu một địa chỉ mac duy nhất 
-   Khảo sát địa chỉ Mac: nó nằm trong cấu trúc frame, đối với frame thì nó hoạt động ở mô hình OSI giúp xử lí Ethernet Header, nó sở hữu hai trường là địa chỉ Mac đích và Mac nguồn ![Alt text](<Screenshot 2023-08-28 at 21.28.33.png>)  
Địa chỉ Mac được viết dưới dạng 6 cặp số hexa 
-   Tuy nhiên các thiết bị trên hệ thống mạng muốn giao tiếp với nhau thì vẫn chưa thể dựa vào địa chỉ Mac đơn thuần được, chúng ta cần phải có địa chỉ luận lí gọi là ip address. Ip address nằm trong IP Header của đơn vị dữ liệu gọi là packet hoạt động tại lớp Network của mô hình OSI.
![Alt text](<Screenshot 2023-08-28 at 21.33.14.png>)

-   Trong trường hợp này mà muốn máy tính pc1 muốn gửi dữ liệu cho pc8 thì nó sẽ biên tập một gói tin với Src Mac là của nó và Dst Mac là của máy nhận. Lúc này nó sẽ trung chuyển được trên hạ tầng switch nó sẽ đẩy chính xác đến pc8. Tuy nhiên số lượng thiết bị đầu quá lớn khó quản trị thì chúng ta cần một cấu trúc địa chỉ 