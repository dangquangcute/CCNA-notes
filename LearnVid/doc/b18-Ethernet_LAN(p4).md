# Phần 4: cơ chế chuyển mạch của Ethernet Switch 
## 1. Tính năng switching
-   Chức năng chính của switch là chuyển mạch Switching. Nghĩa là quá trình switch nhận được frame trên 1 port và xử lí sau đó chuyển qua port khác nghĩa là những tiến trình như vậy gọi là chuyển mạch. Để thực hiện chức năng chuyển mạch thì switch dựa vào bảng chuyển mạch gọi là MAC Address table. ![Alt text](<Screenshot 2023-09-17 at 07.46.41.png>) Cột đầu tiền chứa danh sách các port, cột thứ 2 là địa chỉ MAC tương ứng. Tình huống là khi switch nhận được frame có địa chỉ MAC đích là B 
![Alt text](<Screenshot 2023-09-17 at 07.47.43.png>)
![Alt text](<Screenshot 2023-09-17 at 07.48.45.png>)
Nó sẽ tra bảng  MAC Address table xem là muốn đi đến địa chỉ MAC B thì nên đẩy bảng tin này qua port f0/2
![Alt text](<Screenshot 2023-09-17 at 07.50.24.png>)
## 2. Cách switch xây dựng bảng Address table tự động
-   Khi vừa được lắp đặt thì bảng Address table này sẽ trống hoàn toàn. Khi nhận được 1 gói tin thì switch sẽ thực hiện 2 thao tác đó là `học` địa chỉ Mac nguồn và `forward` địa chỉ Mac đích 
-   B1 : ![Alt text](<Screenshot 2023-09-17 at 07.54.20.png>)
-   B2 : Lúc này port đích là B, nó sẽ tìm trong bảng Address table và nó phát hiện là không có địa chỉ MAC B. Nó sẽ làm thao tác forward ra tất cả các port trừ port nhận vào ![Alt text](<Screenshot 2023-09-17 at 07.56.36.png>)
-    Một port của switch có thể học được rất nhiều địa chỉ MAC![Alt text](<Screenshot 2023-09-17 at 07.59.27.png>)Trong tình huống này port f0/1 sẽ học được 2 địa chỉ MAC 
-   Bảng chuyền mạch của MAC Address table chỉ có thời gian lưu trữ là 5p. Nghĩa là từ khi PC A gửi gói tin tới port f0/1 của switch mà sau 5p không có gói tin nào gửi đến nữa thì nó sẽ được xóa khỏi table, mục tiêu của quá trình này là làm tăng hiệu năng chuyển mạch của switch lên![Alt text](<Screenshot 2023-09-17 at 08.04.05.png>)
-   Show bảng Mac Address trên switch : ![Alt text](<Screenshot 2023-09-17 at 08.04.49.png>)