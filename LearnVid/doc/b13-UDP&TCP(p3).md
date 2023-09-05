# Cơ chế điều khiển luồng (Flow control) 
-   Lớp transport hỗ trợ 2 phương thức truyền thông nổi tiếng là TCP và UDP.
-   Ở phần trước chúng ta đã khảo sát qua ưu điểm và nhược điểm của 2 phương thức trên. Nếu TCP sở hữu nguyên tắc bắt tay 3 bước thì UDP lại không được hỗ trợ hay còn gọi là Connectionless. Tuy nhiên tốc độ truyền dữ liệu trong UDP lại diễn ra khá nhanh nhưng bất cứ dữ liệu nào trong quá trình truyền thông bị mất thì đồng nghĩa với việc là không có khả năng phục hồi lại segment bị mất này. Ngược lại với UDP thì TCP có tốc độ chậm hơn tuy nhiên nó sẽ đảm bảo quá trình truyền thông tin cậy trên hệ thống, cụ thể là trước khi TCP thực hiện quá trình tryền thông thì nó sẽ làm thao tác đánh số segment trước khi gửi đi. Nếu máy nhận nhận được dữ liệu thì nó sẽ gửi một gói tin ACK để báo đã nhận được dữ liệu. 
![Alt text](<Screenshot 2023-09-05 at 09.19.18.png>)

## Trường Window size dùng để phục vụ cho quá trình điều khiển luồng : 
![Alt text](<Screenshot 2023-09-05 at 09.37.12.png>)
-   Để hiểu hơn về quá trình điều khiển luồng chúng ta sẽ khảo sát những ví dụ như sau. Chẳng hạn trong quá trình bắt tay ba bước của 2 thiết bị sẽ thỏa thuận sử dụng giá trị window size = 1. Tất là tại 1 thời điểm máy sender chỉ có thể gửi 1 segment mà thôi. Máy gửi sẽ gửi gói tin số thứ tự 1, khi máy nhận nhận được gói tin bằng 1 thì máy nhận sẽ làm thao tác phản hồi ACK với số thứ tự là 2 nghĩa là nó muốn báo cho máy gửi biết là segment 1 đã được nhận thành công rồi. Sau khi nhận được ACK2 thì nó sẽ gửi tiếp gói tin số thứ 2 và các quá trình tiếp tục diễn ra cho đến khi nhận hết các segment. 
![Alt text](<Screenshot 2023-09-05 at 09.41.48.png>)
-   Vậy để cải thiện tốc độ truyền dữ liệu của TCP thì thay vì 2 thiết bị đầu cuối thỏa thuận sử dụng giá trị window size = 1 thì nó sẽ sử dụng giá trị window size = 3. Nghĩa là máy gửi có thể gửi đồng thời 3 segment rồi sau đó mới đợi hồi đáp ACK
![Alt text](<Screenshot 2023-09-05 at 09.49.56.png>)
-   Khi chúng ta muốn 2 thiết bị đầu cuối tự động điều chỉnh giá trị window size tăng hay giảm phụ thuộc vào đường truyền mạng đang nghẽn hay không. Để có thể làm được điều này thì TCP sử dụng cơ chế gọi là sliding windowing.
-   Dựa theo tình trạng máy sender hệ điều hành sẽ đánh giá xem bộ nhớ RAM và CPU hiện nay còn lại là bao nhiêu.
-   Dựa theo ví dụ bên dưới thì chúng ta thấy máy gửi khi gửi đi segment thì dánh giá trị window size là 3 trong khi máy nhận có window size là 2. Dẫn đến segment thứ 3 máy receiver không đủ tài nguyên để tình huống mất mát segment này. Do vậy lúc này máy nhận sẽ gửi ACK có số thứ tự là 3 để báo máy sender tiếp tục gửi segment số thứ tự 3 kèm theo giá trị window size của máy nhận là 2. Giá trị windowsize của mỗi segment được gửi đi để mong liệu rằng máy  nhận được giải phòng thì nó có thể tăng giá trị window size lên.
![Alt text](<Screenshot 2023-09-05 at 09.58.34.png>)
-   Vậy để tận dụng được tối đa bằng thông của hạ tầng mạng thì tham số window size sẽ được tăng hoặc giảm theo cấp số nhân. Ví dụ lần đầu mấy gửi thành công 3 segment thì lần thứ 2 nó sẽ tăng giá trị window size lên gấp đôi ( 2x3 = 6). Tương tự nếu thất bại thì nó sẽ giảm giá trị window size đi 1 nửa.
-   Để tổng kết lại cơ chế điều khiển luồng của TCP thì chúng ta sẽ khảo sát lại tình huống như sau. Số Seq number báo cho chúng ta biết là nó đã gửi dữ liệu được khoảng bao nhiêu. Và khi máy receiver nhận được segment đầu tiên thì nó sẽ gửi lại với tham số ACK = ( Seq number + 1 ) nghĩa là nó muốn nhận byte
 dữ liệu tiếp theo
 
![Alt text](<Screenshot 2023-09-05 at 10.08.48.png>)