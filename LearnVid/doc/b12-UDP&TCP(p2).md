# TCP & UCP (main)

## 1. Lớp Transport sử dụng 5 chức năng chủ đạo sau
### -   Session multiplexing (ghép phiên kết nối).
-   Mặc dù máy tính chúng ta có chỉ có 1 card mạng ra bên ngoài nhưng tại một thời điểm chúng ta có thể mở rất nhiều. Ví dụ : tại một thời điểm thì cả 3 đầu việc (3 segment bên dưới) đều có thể thực hiện cùng lúc 
![Alt text](<Screenshot 2023-09-03 at 18.45.25.png>)
### -   Segmentation (phân mảnh )
-    Server gửi cho máy trạm 1 file có kích thước là 10mb thì trong thời điểm đó 10mb này sẽ phân mảnh ra thành nhiều mảnh nhỏ có kích thước tối đa là 1480.![Alt text](<Screenshot 2023-09-03 at 18.48.10.png>)
### -   Threee-way handshake
-  Nhưng trước khi thực hiện quá trình truyền thông thì cần trải qua quá trình bắt tay 3 bước để thỏa thuận xem là kích thước segment tối đa nên sử dụng là bao nhiêu. Sau đó segment này được xử lí để gửi tới thiết bị đầu xa là TCP hoặc UDP. 
### -   Reliablity (đảm bảo quá trình truyền thông tin cậy)
-   Đối với TCP thì nó sẽ đảm bảo quá trình truyền thông tin cậy, còn với UDP thì dảm bảo quá trình truyền tải theo thời gian thực. Chẳng hạn quá trình truyền tải trong tình huống này sử dụng TCP thì segment chúng ta sẽ gắn thêm TCP header sau đó đẩy xuống lớp Network.![Alt text](<Screenshot 2023-09-03 at 18.56.27.png>) Tại lớp Network được gắn thêm IP header có rất nhiều thông tin nhưng quan trọng nhất là trường des và src IP . Sau dó đượ đẩy xuống lớp Data link sẽ gắn Ethernet header hoặc gắn thêm cấu trúc Data link khác trước khi mang vào môi trường truyền .![Alt text](<Screenshot 2023-09-03 at 18.56.11.png>) 
-   Dưới đây là 1 số trường của IP header : 
![Alt text](<Screenshot 2023-09-03 at 18.57.38.png>)
-    Cón nếu sử dụng UDP thì lúc này nó chỉ sử dụng một trường thông tin như sau ![Alt text](<Screenshot 2023-09-03 at 18.59.39.png>)

-   Theo trường hợp bên dưới thì tùy theo phần mềm mà nó sẽ quyết định nên sử dụng TCP hay UDP. Sử dụng TCP thì trước hết nó sẽ gửi đi yêu cầu bắt tay ba bước để thỏa thuận tham số mà cả 2 thiết bị đều hỗ trợ . Bước 1 : máy gửi sẽ gửi đi tín hiệu SYN để hỏi xem thiết bị đầu cuối đã sẵn sàng để gửi nhận hay không . Nếu máy nhận đã oke thì nó sẽ gửi lại tín hiệu SYN & ACK ngoài ra nó còn gửi ra tín hiệu SYN của riêng nó để hỏi máy truyền của chúng ta đã sẵn sàng. Và nếu máy truyền đã đủ tài nguyên RAM để phục vụ cho quá trình truyền thông này thì máy truyền sẽ hồi đáp về 1 gói tin ACK chấp nhận quá trình truyền thông. Quá trình bắt đầu 
![Alt text](<Screenshot 2023-09-03 at 19.07.49.png>)
-   Trước khi truyền dữ liệu qua cho máy nhận thì nó sẽ thực hiện phân mảnh dữ liệu thành nhiều segment và dánh số thứ tự. Khi gửi segment theo số thứ tự nếu nhận được thì máy nhận phải phản hồi với gói tin đánh số ACK tương ứng với gói tin gửi đi.  ![Alt text](<Screenshot 2023-09-03 at 19.11.23.png>)
Kể từ khi gửi 1 gói tin đi mà không nhận đuọc hồi đáp ACK thì nó sẽ chủ động gửi tiếp tục gói tin đó cho dến khi nhận được. Bằng cơ chế này thì tất cả segment từ máy gửi se được gửi an toàn đến máy nhận.
- Đối với UDP thì nó sẽ không trải qua quá trình bắt tay 3 bước. Nó sẽ tiến hành phân mành dữ liệu có kích thước tối đa là 1480byte rồi sau đó lần lượt gửi các segment 1 cách ồ ạt ![Alt text](<Screenshot 2023-09-03 at 19.15.02.png>)
Do không đánh số thứ tự cho các segment này mà nó không có khả năng phục hồi dữ liệu đã mất. Thông thường UDP không hoạt động độc lập mà nó sẽ thực hiện phối hợp TCP ![Alt text](<Screenshot 2023-09-03 at 19.16.21.png>) 
### -   Flow control (điều khiển luồng, điều tiếp luồng) (Phần sau)