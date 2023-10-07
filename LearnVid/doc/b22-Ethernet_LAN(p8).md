# Phần 8 : tìm hiều về cấu trúc địa chỉ MAC

-   Bên trong hệ thống mạng LAN có thể chứa rất nhiều các thiết bị khác nhau cụ thể là 4 nhóm như sau :![Alt text](<Screenshot 2023-10-07 at 07.33.57.png>)
-   Đối với cấu trúc frame Ethernet![Alt text](<Screenshot 2023-10-07 at 07.37.32.png>).Trường FCS giúp chúng ta kiểm tra xem liệu gói tin có bị lỗi trong suốt quá trình truyền thông, nếu bị lỗi thì nó sẽ hủy gói tin còn ngược lại néu không không lỗi thì nó mới xử lí những trường thông tin còn lại
-   Thông thường chúng ta sẽ dựa vào 24bit đầu tiên để xem địa chỉ MAC của card mạng này do hãng nào sản xuất ra. Thông thường nsx sẽ liên hệ với tổ chức quản lý địa chỉ MAC để mua hay xin địa chỉ . Còn 24bit còn lại dùng để định danh thiết bị mà họ đã sản xuất ra
![Alt text](<Screenshot 2023-10-07 at 07.39.54.png>)
-   Kiểm tra địa chỉ MAC bằng cmd
![Alt text](<Screenshot 2023-10-07 at 07.43.55.png>)
-   Chúng ta có thể kiểm tra hãng sx ra bằng 6 con số đầu tiên của địa chỉ MAC   
![Alt text](<Screenshot 2023-10-07 at 07.44.32.png>)