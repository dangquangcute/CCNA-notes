# Network Character (P2)

<!-- ![kheckhec](b2-picture/Pic2.png)


[Link me to more info](google.com) -->
## Các phần còn lại (cost,secrity,Availability,Scalability,Reliability)

1.Chi phí triển khai ban đầu (khoản chi nhiều nhất) 
- Nếu chúng ta đầu tư một cách bài bản ngay từ ban đầu thì quá trình vận hành hệ thống mạng sẽ trở nên suôn sẻ , tiết kiệm rất nhiều các chi phí như bảo dưỡng, nâng cấp sau này.

2.Cơ chế bảo mật thông tin.
- Có thể tiển khai trên nhiều thiết bị và nhiều lớp.
- Đối với thiết bị đầu cuối như pc,laptop : sử dụng phần mềm diệt virus uy tín, liên tục cập nhật các bản vá mới nhật, cập nhật các bản hệ điều hành mới
- Đối với switch cần trang bị thêm các tính năng bảo mật : PortSecurity, DHCP Snooping. Chúng rất hữu dụng giúp ta chống được các nguy cơ tấn công trên hệ thống mạng mà không cần trang bị hệ thống firewall đắt tiền.
- Tuy nhiên để tối ưu dịch vụ bảo mật, bảo vệ server thì vẫn phải trang bị hệ thống firewall. Ví dụ chống lại cuộc tấn Ddos(từ chối dịch vụ).

3.  Độ sẵn sàng của hệ thống mạng.
- Problem: nếu chúng ta chỉ thuê 1 đường mạng ra ngoài internet thì khi nó gặp sự cố thì toàn bộ hệ thống mạng sẽ bị cô lập.
- Vậy để đảm bảo tính sẵn sàng cho nó thì chúng ta luôn chuẩn bị khoảng 2 đường mạng để khi nó gặp sự cố thì sẽ có đường mạng khác backup vào .
4.  Khả năng mở rộng của hệ thống mạng.
Problem: Tổ chức dịch vụ ban đầu chỉ có khoảng 100 người sử dụng đồng thời. Tuy nhiên khi phát triển mở rộng ra thì dòng thiết bị cũ không còn đáp ứng được nhu cầu hệ thống mạng. Bắt buộc phải gỡ bỏ thiết bị cũ -> Tốn rất nhiều chi phí. 
- Khi tổ chức lúc hệ thống mạng lúc đầu cần quan tâm và chọn ra thiết bị cao cấp có thể bao quát hết những vấn đề.
5.  Đảm bảo độ tin cậy.
- Problem: Có một FPT server lưu trữ, chúng ta sẽ tạo ra account cho người dùng đầu cuối. Bất kì ai biết được địa chỉ ip của FPT server or account của FPT server này thì mới truy cập được thiết bị. Do FPT là giao thức không được mã hóa nên dễ dàng bị tấn công bị crack pass.
-   Vậy nên chúng ta nên sử dụng sFPT thay vì FPT. Nó vẫn là 1 giao thức truyền file nhưng hỗ trợ thêm việc mã hóa . Bằng cách ta có thể mã hóa dữ liệu đăng nhập hoặc dữ liệu


#   Ảnh minh họa hoàn chỉnh
![Full options picture](<../picture/Screenshot 2023-08-07 at 10.09.21.png>)