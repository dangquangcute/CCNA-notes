# Tìm hiểu tham số Port nguồn, Port đích trong UDP và TCP.

## 1.TCP Header
![Alt text](<Screenshot 2023-09-05 at 11.25.33.png>)
-   Để hiểu hơn về khái niệm này thì chúng ta sẽ tiến hành khảo sát ví dụ như sau
-   Lúc này chúng ta đang có 1 con server vừa dùng để cài web server (port 80) vừa cài mail server (21). Vậy vấn đề ở đây là khi gói tin truy cập tới server, làm sao mà server biết là bản tin này đang truy cập tới dịch vụ web hay là dịch vụ truyền file ?
-   Vậy nên lúc này nó sẽ căn cứ vào 1 tham số gọi là port đích. Người ta quy định port từ 1 -> 1023 đã được định danh cho các dịch vụ quy định từ trước. 
-   Chẳng hạn ở ví dụ dưới đây Pc1 mở 2 phiên làm việc. Lúc này hệ điều hành sẽ định danh cho từng phiên làm việc với tham số port nguồn với những port ngẫu nhiên. Và port đích lần lượt là port 80 và 21 theo ví dụ bên dưới. Khi server nhận được segment có port là 80 thì nó sẽ đẩy cho dịch vụ web server để xử lí, còn nếu là port 21 thì sẽ đẩy cho FTP xử lí.
![Alt text](<Screenshot 2023-09-06 at 07.43.31.png>)
-   Để hiểu hơn về tham số port nguồn thì chúng ta thử khảo sát ví dụ sau. Tình huống là pc của chúng ta mở 2 giao diện web tới cùng 1 website, khi server nhận được gói tin từ server hồi đáp về thì làm sao mà nó biết gói tin này thuộc cửa sổ phiên làm việc nào ? 
![Alt text](<Screenshot 2023-09-06 at 07.46.37.png>)
-    Lúc này khi server gửi gói tin phản hồi về thì nó sẽ dựa vào tham số port nhận để gửi trả về đúng phiên làm việc
![Alt text](<Screenshot 2023-09-06 at 07.47.40.png>)

## 2.UDP Header
![Alt text](<Screenshot 2023-09-06 at 07.51.31.png>)
-   Tương tự thì UDP Header của chúng ta cũng chứa 2 trường thông tin quan trọng là 16bit port nguồn và 16 bit port đích. Đối với tham số port thì chúng ta hình dung nó cũng giống như là 1 loại địa chỉ tại lớp Transport. Cụ thể tại lớp Datalink thì chúng ta có địa chỉ mac nguồn và đích. Ở lớp 3 thì chúng ta có địa chỉ ip nguồn và đích. Thì với 2 tham số port đích và nguồn ở lớp Transport thì nó giúp hệ điều hành định danh cho từng phiên làm việc.  
-   Một số port dịch vụ thường gặp :
![Alt text](<Screenshot 2023-09-06 at 07.53.47.png>)
- Đặc biệt với dịch vụ DNS thì hoạt động trên 2 nền giao thức là TCP và UDP. Nếu phân giải tên miền ngoài internet thì thông thường sử dụng UDP. Còn khi mà các DNS server đồng bộ hóa dữ liệu cho nhau thì nó lại sử dụng TCP 