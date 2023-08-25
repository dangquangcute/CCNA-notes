# Phần 2 : Giới thiệu chức năng của từng phân lớp trong mô hình OSI (layer 5-7 )

## Session Layer
-   Nhờ lớp Session này mà chúng ta có thể mở được nhiều ứng dụng đồng thời mặc dù chỉ có 1 card mạng duy nhất, vừa có thể chời game, nghe nhạc,....![Alt text](<Screenshot 2023-08-25 at 06.57.30.png>)
-   Nhờ chức năng của lớp session này chia tài nguyên card mạng chúng ta ra thành nhiều slot thời gian và mỗi slot thời gian dành cho ứng dụng mạng đó truy cập đường truyền. Nhờ đó mà các ứng dụng mạng của chúng ta có thể truy cập mạng một cách bình đẳng với nhau

## Presentation Layer
-   Lớp Presentation sẽ đảm bảo cho truyền thông dữ liệu từ đầu cuối tới đầu cuối có thể đọc và hiểu được. Cuối file chúng ta sẽ có một đuôi file để nhận biết đây là file gì, nếu là file hình ảnh thì là png,jpg,..![Alt text](<Screenshot 2023-08-25 at 07.02.57.png>)Vô tình chúng ta tải 1 file mà không có đuôi định dạng thì sẽ không viết đó là file gì. Vì máy tính không biết nên dùng chương trình gì để đọc hiểu dược file đó. Do vậy lớp Presentation đảm bảo định dạng của file từ thiết bị này khi truyền sang thiết bị khác hoàn toàn có thể hiểu được và chuẩn hóa lại.
## Application Layer

-   Chúng ta có thể tiếp xúc với lớp này thông qua việc sử dụng các ứng dụng, lướt web, ứng dụng chat,.. ![Alt text](<Screenshot 2023-08-25 at 07.06.05.png>)
-   Mô hình gửi nhận mail của máy tính sử dụng ms Outlook : ![Alt text](<Screenshot 2023-08-25 at 07.10.25.png>)

-   Lưu ý: ở các ứng dụng mail. Khi người dùng sử dụng điện thoại để nhận mail thì sd giao thức IMAP, còn khi sd máy tính check mail thì có xu hướng sử dụng giao thức POP3. Giao thức POP3 sẽ lấy mail về lưu trữ cục bộ trên máy tính, cho dù không có internet vẫn có thể đọc được. Trong khi đó chúng ta sẽ dụng giao thức IMAP, thì nó sẽ móc nối tới mail server để lấy bản sao của mail đó về mà không xóa mail đó trên server. Do đó khi số lượng mail đạt trên 80% nó xảy ra hiện tượng chúng ta không gửi mail được hoặc người khác gửi mà chúng ta không nhận được mail do hộp mail không đủ dung lượng để lưu trữ mail. Do vậy thông thường để tránh tình huống này thì chúng ta sẽ sử dụng giao thức POP3 để lấy mail về.
-    Mô hình FTP : client sẽ đẩy dữ liệu đến server và ở đây chúng ta có thể chia sẻ tài nguyên lưu trữ của server này ra rất nhiều người dùng khác, bên cạnh đó cũng giúp người dùng này chia sẻ file ra nhiều người dùng khác thông qua điểm tập trung  
![Alt text](<Screenshot 2023-08-25 at 07.17.49.png>)
Ai mà biết được tài khoản đăng nhập tới ftp server này thì mới lấy được dữ liệu về

-    Web server : máy tính chúng ta sử dụng giao thức http để gửi request yêu cầu web server tải trang web về, lúc này máy tính sẽ biên dịch thông tin tải về thành trang web, nơi mà chúng ta thao tác với nó bằng giao thức http ![Alt text](<Screenshot 2023-08-25 at 07.24.41.png>)