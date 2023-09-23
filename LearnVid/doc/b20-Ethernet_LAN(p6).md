# Phần 6: cơ chế hoạt động của giao thức ARP(Address Resolution Protocol) phân giải địa chỉ IP thành MAC
-   Máy tính là 1 trong những thiết bị đầu cuối sử dụng giao thức ARP này để phân giải địa chỉ IP đích thành 1 địa chỉ MAC tương ứng
-   Tình huống :  tại máy tính A sử dụng công cụ ping để kiểm tra xem kết nối tới máy tính B đã thông suốt hay chưa. 
 ![Alt text](<Screenshot 2023-09-24 at 06.28.21.png>)
 Lúc này nó sẽ tạo ra gói tin: 
  ![Alt text](<Screenshot 2023-09-24 at 06.31.02.png>)
  Trước khi gửi gói tin này đến hệ thống Ethernet LAN cụ thể là tới Switch thì nó phải gắn trường Ethernet Header gồm MAC nguồn và MAC đích. MAC nguồn lúc này là của PC A nhưng đứng ở góc độ máy A thì nó sẽ không biết MAC của PC B và nó sẽ căn cứ vào địa chỉ IP đích để phần giải thành địa chỉ MAC tương ứng ![Alt text](<Screenshot 2023-09-24 at 06.35.42.png>)
  Để tìm được địa chỉ MAC tương ứng thì PC A sẽ soạn ra gói tin ARP request với MAC nguồn là A và đích là broadcast. Để check xem là máy tính nào trên đường mạng có IP khớp thì hồi đáp lại  ![Alt text](<Screenshot 2023-09-24 at 06.38.28.png>)
  Khi bản tin được gửi đến Switch thì Switch sẽ căn cứ vào địa chỉ MAC đích và đẩy gói tin dến tất cả các tất cả các port trừ port nhận vào. Những máy khác cũng nhận được nhưng gói tin hỏi là ai có IP khơps với IP trong gói tin nên nó sẽ không hồi đáp về PC A. Nhưng đối với PC B nó có IP trùng khớp thì sẽ soạn ra gói tin ARP reply với MAC nguồn là chính nó và MAC đích là MAC A![Alt text](<Screenshot 2023-09-24 at 06.43.22.png>)
  Khi PC A nhận được gói tin phản hồi về thì nó sẽ biết được địa chỉ MAC tương ứng với 192.168.1.2 và nó sẽ gắn vào trong tình huống này là MAC B.
-    Khi đã soạn được gói tin hoàn chình thì gói tin sẽ được đẩy ra Switch và Switch sẽ dựa vào bảng MAC Address table và nó sẽ đẩy ra port tương ứng ![Alt text](<Screenshot 2023-09-24 at 06.46.45.png>)
-   Để thuận tiện cho quá trình trao đổi dữ liệu sau này thì tại máy tính A nó sẽ lưu trữ địa chỉ vào bảng ARP cash table. ![Alt text](<Screenshot 2023-09-24 at 06.48.31.png>)