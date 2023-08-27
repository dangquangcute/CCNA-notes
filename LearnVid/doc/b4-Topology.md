#   Các loại Topology

1.  Ứng dụng 

![Các loại topology](<../picture/Screenshot 2023-08-07 at 10.19.49.png>)

-   Phổ biến nhất trong 3 loại là Star topology. Do khi lắp đặt 1 thiết bị mới vào chỉ cần gắn vào trung tâm thì có thể truyền thông ngay với các thiết bị còn lại. Tuy có khả năng mở rộng dễ dàng nhưng có 1 nhược điểm  (Single point of Failure) => Để khắc phục nhược điểm ngta đã phát triển ra Extended Star
![Alt text](<../picture/Screenshot 2023-08-07 at 10.37.10.png>)
Cứ 3 điểm thì có 1 điểm tập trung, cứ điểm tập trung bẩt kì gặp sự cố sẽ không ảnh hưởng đến quá trình trao đổi dữ liệu còn lại mà không liên quan đến sự cố tập trung
 
-   Đối với Ring topology khi muốn bổ sung thiết bị thì kết nối đến các thiết bị khác sẽ bị gián đoạn. Tình huống :![Công ngệ stackwise](<../picture/Screenshot 2023-08-07 at 10.24.48.png>)
Công ngệ stackwise của cisco cho chúng ta gom tối đa 9 switch vật lý thành 1 switch vật lí (9x48port). Điều kiện sử dụng là 9 con switch này phải được kết nối theo dạng vòng. Tuy nhiên nó vẫn có nhược điểm là Multi point of failure (nếu 1 điểm gặp sự cố thì sẽ ảnh hưởng đến các phần còn lại ) => Người ta đã phát triển ra cơ chế dual-Ring 
![Dual Ring](<../picture/Screenshot 2023-08-07 at 10.34.29.png>)


-   Mô hình cuối cùng mà chúng ta khảo sát sẽ là Full-mesh Topology. Có đặc điểm nổi bật là nó sẽ có khả năng dự phòng tốt, nếu gặp sự cố có thể truyền qua các thiết bị trung gian khác. Tuy nhiên để triển khai 1 mô hình full mesh thì sẽ tốn rất nhiều chi phí. Như vậy để tiết kiệm về mặt chi phí cũng như đảm bảo được tính dự phòng , chúng ta có thể triển khải mô hình Partial-Mesh, những điểm nào quan trọng sẽ được kết nối đến tất cả các điểm còn lại, điểm kém quan trọng sẽ ít kết nối hơn nhưng nó vẫn sẽ cân bằng về mặt chi phí hơn.    ![Alt text](<../picture/Screenshot 2023-08-07 at 10.44.18.png>)
n : số lượng điểm kết nối