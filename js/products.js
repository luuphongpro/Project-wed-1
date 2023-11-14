function InitProduct(productId, category, subcategory, img, name, price, description) {
  this.productId = productId
  this.category = category
  this.subcategory = subcategory
  this.img = img
  this.name = name
  this.price = price
  this.description = description
}
// all products
let productArr = [
  new InitProduct("01", "vanhoc", "", "./image/vanhoc/2f8f1ac443b9f472b5b568738f4584df.jpg.webp", "Hai mươi tư con mắt ", "25.000", "Hai mươi tư con mắt là câu chuyện xoay quanh tuổi trẻ của cô giáo Ooishi đến khi cô già đi và trở lại ngôi trường nơi cô từng gắn bó và tâm huyết từ ngày đầu đến dạy lớp học đầu tiên có 12 học trò. Không gian vùng biển đảo Seto yên bình cùng người dân lao động chăm chỉ và những đứa trẻ thuần khiết trong thoáng chốc bị xáo trộn bởi sự hiện diện của cô giáo - một modern girl theo lời người dân bàn tán. Cô giáo được tụi trẻ đặt cho biệt danh Hòn Đá Nhỏ đã nhanh chóng chiếm được tình cảm của người dân nhờ lòng nhiệt thành và tình yêu thương cao cả dành cho những đứa trẻ phải sống trong hoàn cảnh thiếu thốn. Cuốn sách mang đến giá trị hiện thực và nhân văn sâu sắc về tình cô trò thiêng liêng, trở thành một trong những tiểu thuyết về đề tài phản chiến hay nhất của văn học Nhật."),
  new InitProduct("02", "vanhoc", "", "./image/vanhoc/780acb45d807395a6c58968f48780215.jpg.webp", "Ngẩng đầu mà đi", "67.000", "Tiến về phía trước đi, thế giới này không quan tâm đến sự yếu đuối của bạn đâu!\nBạn ăn cơm một mình, mỗi lần đều ăn ở cùng một quán, gọi cùng một món ăn.\n Bạn dạo phố một mình, bần thần nhìn một bộ quần áo trong tủ kính rất lâu, nhưng cuối cùng không thử.\nBạn một mình âm thầm làm việc đến bán mạng, bụng đói thì ăn nốt mẩu bánh mì, uống nốt cốc sữa sót lại từ buổi sáng, để rồi sau đó lại một mình dẫm lên cái bóng của chính mình để về nhà.\nNếu bạn nghĩ bản thân mình như vậy là tội nghiệp, là mệt mỏi, là đáng thương đến bật khóc… thì hãy dừng lại và suy nghĩ thử xem.\nỞ cái tuổi vẫn còn gập ghềnh chưa trải đủ sự đời, không nhà, không xe, đi làm vẫn phải chen chúc để kịp chuyến xe bus chật chội, làm việc vẫn phải nhìn sắc mặt của người khác, nói cười chẳng thể theo ý mình… Và tất cả những gì bạn làm được chỉ là khóc thôi sao?!\nThế giới này vốn sẽ không vì nỗi buồn của bất kỳ ai mà dừng lại.\nCuộc sống cũng sẽ không vì ai rơi nước mắt mà sẽ đối xử nhẹ nhàng hơn.\nĐừng cúi đầu nhìn xuống cái bóng dưới chân mình nữa, hãy thử ngẩng đầu lên mà xem!\nBạn ăn cơm một mình … chính là để đợi một người thật lòng muốn dẫn bạn đi ăn mỗi ngày.\nBạn không thể mua những thứ mình thích ngay lúc này… nhưng không có nghĩa là sau này cũng vậy.\nBạn làm việc đến bán mạng… nhưng rồi sẽ có một ngày mọi nỗ lực của bạn được đền đáp mà thôi.\nĐúng vậy, chỉ cần tiếp tục ngẩng đầu kiêu hãnh bước đi, thì trên đời này chẳng có gì có thể làm khó được bạn mãi.\nVẫn là chàng trai Lư Tư Hạo cùng giọng văn nhẹ nhàng nhưng sâu lắng đã chinh phục hàng triệu trái tim trong những tác phẩm trước, “Đừng cúi đầu mà khóc, hãy ngẩng đầu mà đi” dù chẳng thể khiến con đường bạn đang đi bớt gập ghềnh hơn, nhưng sẽ là cuốn sách tuyệt nhất để dẫn đường cho tuổi trẻ của bạn và tôi, những tuổi trẻ đang chênh vênh lạc lối chẳng biết đi về đâu."),
  new InitProduct("03", "vanhoc", "", "./image/vanhoc/b4495afbfb1db7b8702345dc9ad0ab39.jpg.webp", "Dế mèn phiêu lưu ký", "67.000", "“Biết ước mơ và hành động, Dế mèn của tôi chắc chắn là bạn trung thủy với thế hệ tuổi thơ của bạn.” - Tô Hoài\n“Một con dế đã từ tay ông thả ra chu du thế giới tìm những điều tốt đẹp cho loài người. Và con dế ấy đã mang tên tuổi ông đi cùng trên những chặng đường phiêu lưu đến với cộng đồng những con vật trong văn học thế giới, đến với những xứ sở thiên nhiên và văn hóa của các quốc gia khác. Dế Mèn Tô Hoài đã lại sinh ra Tô Hoài Dế Mèn, một nhà văn trẻ mãi không già trong văn chương...” - Nhà phê bình Phạm Xuân Nguyên.\n“Ông rất hiểu tư duy trẻ thơ, kể với chúng theo cách nghĩ của chúng, lí giải sự vật theo lô gích của trẻ. Hơn thế, với biệt tài miêu tả loài vật, Tô Hoài dựng lên một thế giới gần gũi với trẻ thơ. Khi cần, ông biết đem vào chất du ký khiến cho độc giả nhỏ tuổi vừa hồi hộp theo dõi, vừa thích thú khám phá.” - TS. Nguyễn Đăng Điệp."),
  new InitProduct("04", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/8c96ae330e030fd8f0a71123b1cf45ff.jpg.webp", "Tam quốc diễn nghĩa 1", "64.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích."),
  new InitProduct("05", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/7529808cf692ee843c7f98d36099f1eb.jpg.webp", "Tam quốc diễn nghĩa 2", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích."),
  new InitProduct("06", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/a3410287170ec8aff2dbee52d33bae72.jpg.webp", "Tam quốc diễn nghĩa 3", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích."),
  new InitProduct("07", "amthuc", "", "./image/amthuc-nauan/3a4be908133c374e0de3555a3580fc04.jpg.webp", "Khởi sự ăn chay", "89.000", "“Khởi sự ăn chay” không chỉ là một cuốn sách hướng dẫn nấu ăn, càng không phải đơn thuần là tuyển tập các món chay. Cuốn sách là sự dẫn dắt đầy cảm hứng, sáng tỏ và khoa học dành cho bạn, từ tác giả Đức Nguyễn - một người ăn chay văn minh và khoẻ mạnh. Bạn có thể tìm thấy trong cuốn sách này lời giải đáp cho những băn khoăn cơ bản nhất khi bắt đầu ăn chay. Bạn cũng có thể ồ lên thích thú khi phát hiện ra ăn chay quả là một nghệ thuật, thứ nghệ thuật giờ đây được sáng tỏ dưới góc nhìn khoa học dinh dưỡng. Và rồi bạn háo hứng khám phá những món chay ngon, lành, đẹp như một bài thơ. Bạn sẽ thấy hành trình ăn chay thật vui và thú vị!\n“Đó là hành trình tìm đến sự cân bằng và bình yên giữa ẩm thực và cuộc sống, giữa những lựa chọn cá nhân đến những mục tiêu bền vững hơn cho chính bạn, cho môi trường hay cho Trái Đất. Dù thế nào đi nữa, hãy thử lần giở bất cứ trang sách nào, hẳn bạn sẽ đồng ý với tôi, rằng mỗi trang sách đều là một pho tâm huyết của tác giả - với trọn vẹn tấm lòng, tri thức và tình yêu của anh ấy, là dành cho bạn!” - Food Blogger Phan Anh (Esheep)\n“Trái với “Về Nhà Ăn Cơm” là tập hợp những món ăn chay thuần Việt đậm chất mâm cơm gia đình thì “Khởi Sự Ăn Chay” tập trung vào các món chay đơn giản, nguyên liệu dễ tìm và thời gian nấu nhanh gọn giúp những người mới tìm hiểu về việc ăn chay cũng có thể dễ dàng vào bếp chế biến chỉ trong tích tắc. Đặc biệt hơn nữa Đức áp dụng đúng nguyên lý 14 ngày để xây dựng một thói quen mới để đưa ra thực đơn giúp độc giả làm quen được với việc ăn chay lành mạnh hơn chỉ trong hai tuần. Cuốn sách thực sự phù hợp cho những ai đang tìm hiểu về ăn chay, đang bối rối không nên bắt đầu từ đâu hay chỉ đơn giản muốn bổ sung cho thực đơn hằng ngày những món ăn lành mạnh.” - Nguyễn Quỳnh Nga - tác giả cuốn sách Best Seller “Eat Clean - Thực Đơn 14 Ngày Thanh Lọc Cơ Thể Và Giảm Cân”."),
  new InitProduct("08", "amthuc", "", "./image/amthuc-nauan/7b686c6565d66e41c0c8333a0a6d60a7.jpg.webp", "Những món chay ngon và dinh dưỡng", "75.000", "Giờ đây nhu cầu ăn chay là một phần không thể thiếu trong cuộc sống của nhiều người. Hàng tháng, vào những ngày rằm hay lễ lớn, việc ăn chay càng trở nên phổ biến. Trong những dịp như vậy, chúng ta có thể tổ chức tiệc chay với những món ăn được chế biến đa dạng, cầu kỳ và nhiều dinh dưỡng hơn. Món ăn chay hiện nay không đơn thuần là những món ăn đơn giản với những nguyên liệu chủ yếu từ rau củ, đậu nành, đậu hũ lặp đi lặp lại như trước nữa. Với những nguyên liệu mới, phong phú và cách chế biến đa dạng, món chay đã trở thành món ăn cao cấp, sang trọng với hương vị mới mẻ và được trình bày đẹp mắt.\nCuốn sách này giới thiệu với các bạn các món chay mới, ngon và dễ làm. Bạn có thể chế biến các món này cho các bữa tiệc chay, buffet chay hay làm món ăn chơi đều thích hợp."),
  new InitProduct("09", "amthuc", "", "./image/amthuc-nauan/8e9a77053eda544cd928e12bfab26620.jpg.webp", "Chất xanh của sự sống", "91.000"),
  new InitProduct("10", "amthuc", "", "./image/amthuc-nauan/1092b207189a713b51357096746c284e.jpg.webp", "Khóa học nấu ăn tại gia", "105.000"),
  new InitProduct("11", "amthuc", "", "./image/amthuc-nauan/9466350a1a4eadecaf658ffb101bd116.jpg.webp", "Dinh dưỡng từ rau củ", "43.000", "Cuộc sống hiện đại ngày nay, do nhiều nguyên nhân khác nhau, rất nhiều người, nhất là người ở độ tuổi trung niên và người cao tuổi thường mắc bệnh cao huyết áp, bệnh tim, tiểu đường…Vì vậy họ luôn quan tâm đến một chế độ ăn uống lành mạnh, đầy đủ dưỡng chất cho cơ thể mà không ảnh hưởng tới sức khỏe. Bộ sách \"Thực phẩm chữa bệnh\" sẽ là một món quà vô cùng ý nghĩa dành tặng cho chính bản thân của mỗi người, để tiếp thêm nguồn kiến thức, sinh lực nuôi dưỡng một \"sức khỏe vàng\" tốt nhất có thể.\nViệc cân bằng dinh dưỡng cho cơ thể mỗi người là điều thiết yếu, đặc biệt đối với rau - củ - quả tươi là điều không thể bỏ qua. Vì những thực phẩm chúng ta ăn hàng ngày không chỉ ảnh hưởng đến sức khỏe thể chất, mà còn tác động đến trạng thái lành mạnh về cảm xúc, tinh thần. Nhận thức rõ về chế độ dinh dưỡng đang áp dụng và đặc tính chữa bệnh của các loại thực phẩm sẽ giúp bạn có những điều chỉnh cần thiết để đáp ứng nhu cấu cơ thể, tạo nên sự thay đổi kỳ diệu nhằm duy trì và cải thiện tình trạng sức khỏe.\nNhững loại thực phẩm chữa bệnh này luôn là nguồn dinh dưỡng tự nhiên dồi dào nhất và chứa những bài thuốc quý đối với cơ thể con người, đặc biệt đối với các chị em phụ nữ thì đây còn là nguồn thực phẩm làm đẹp quan trọng. Vì vậy, một chế độ ăn uống khoa học và an toàn thì rau xanh và các loại hoa quả là nguồn thực phẩm không thể thiếu.\nRau củ - trái cây - đậu hạt chứa nhiều các vitamin, khoáng chất, chất chống oxy hóa, chất xơ và các hợp chất dinh dưỡng thực vật chống lại bệnh tật. Đồng thời, chúng là lựa chọn đầu tiên của chế độ ăn hàng ngày để phòng ngừa bệnh béo phì và các bệnh mãn tính như bệnh tim, ung thư và tiểu đường, cũng như các vấn đề về tiêu hóa, thị giác…"),
  new InitProduct("12", "amthuc", "", "./image/amthuc-nauan/a9600e6e032a8b98e3c5b0d4eb1aa4cc.jpg.webp", "Ẩm thực truyền thống Việt Nam", "66.000", "Ẩm thực Việt Nam, dù là những món ăn gia đình hay những món ăn đặc trưng của ẩm thực đường phố thì vẫn mang những giá trị to lớn trong đời sống của người Việt. Ẩm thực Việt ngày nay đã vượt qua khỏi những biên giới và được chào đón ở nhiều nơi trên thế giới. Chúng ta có quyền tự hào về điều đó. Thưởng thức ẩm thực cũng giống như dấn thân vào một cuộc hành trình mà mỗi người đều có cảm nhận riêng. “ẨM THỰC TRUYỀN THỐNG VIỆT NAM” giúp bạn tìm hiểu và khám phá văn hóa ẩm thực Việt Nam từ buổi sơ khai đến nay. Đó là cả một quá trình lịch sử mà ông cha ta đã khai thác tự nhiên và cùng với nó là thực đơn bữa ăn hàng ngày bình dị của biết bao thế hệ con người.\nKhông chỉ thế cuốn sách còn giúp bạn tìm hiểu về văn hóa ẩm thực của từng vùng miền trên đất nước Việt Nam, từ nông thôn đến thành thị, từ miền ngược đến miền xuôi, cả miền núi lẫn đồng bằng. Dù ở đâu thì các món ăn cũng được hình thành trên cơ sở điều kiện tự nhiên của từng vùng miền và tạo thành những nét văn hóa ẩm thực."),
  new InitProduct("13", "amthuc", "", "./image/amthuc-nauan/c1a91bc8031ee7d2a341204614e9de02.jpg.webp", "Bếp ấm nhà vui", "84.000", "Cuốn sách là tập hợp những bài viết tản mản về nhiều món ăn đặc trưng của người dân Nam Bộ, đặc biệt là miền Tây. Qua những món ăn như ba khía, canh chua, chè kiểm, bánh ướt ngọt, khoai mì nước dừa cùng với giọng văn nhẹ nhàng, tình cảm, tác giả cho người đọc thấy được những nét văn hóa ẩm thực đặc trưng của người dân miền Nam Bộ. Từ đó thấy được rõ nét hơn đời sống, con người nơi đây. Đồng thời, người viết cũng muốn chuyển tải một thông điệp rằng đàn ông vào bếp là một việc đầy thú vị: “Tôi vô bếp một phần vì đam mê, một phần vì muốn những món ăn như là món quà thơm thảo. Sự ấm áp và cái lạnh lẽo lúc nào cũng từ căn bếp mà ra. Nên từ căn bếp, tôi luôn tâm niệm phải giữ bằng được niềm vui của nhà mình ”. Trích dẫn: - Góc bếp đối với tôi vì thế mà trở thành thiêng liêng. Đi xa, nơi tôi nhớ nhất là bếp nhà mình. Buồn, tôi thèm được trở về góc bếp, ngồi ôm lấy người phụ nữ đời tôi, nấu một món gì đó mà cả hai cùng thích thật ngon. Thả những ưu phiền theo khói trắng, nghe khối bình yêu đang tụ lại rồi lớn dần trong từng miếng ăn mình đang thưởng thức, trong ánh nhìn êm dịu của người mình yêu. Tôi thích tiếp khách ở bếp. Nhất là với những người đã thân. Gian bếp có một khả năng đưa người gần gũi người hơn. Câu chuyện giản dị, ấm áp hơn, người thương người hơn. - Không hề ngoa khi cho canh chua Nam Bộ là món ăn được lòng nhiều người nhất. Bởi cách nêm nếm hài hòa. Bởi hương vị thanh tao mà phong phú. Bởi nguyên liệu đa dạng và đủ đầy dinh dưỡng. Bởi cả sự đa sắc đa vị trong độ biến hóa khôn lường của món canh chua ngỡ quá chi là đơn giản. Chúng tôi đã có những đêm nằm “ước ao khát khao” về món ăn này. Đó là những ngày trên giảng đường sư phạm. Những bữa cơm miễn phí của nhà nước với hai, ba chén cơm xộn xạo nửa sống, nửa chín. Món canh cải “toàn quốc” cùng dăm miếng thịt đầu kho lỏng bỏng đã khiến đám sinh viên chúng tôi luôn nghĩ về cái ăn trướ việc học. Những đêm nằm trong bóng tối khu ký túc xá, cả đám lúc nào cũng nói chuyện về cái ăn. Và món ăn được nhắc nhớ nhiều nhất vẫn là món canh chua trứ danh hảo hảo.“Lần này về tao kêu mẹ tao nấu cho nồi canh chua cá lóc để ăn cho ngán luôn. Khỏi vô đây nằm thèm”, “Cá kèo nấu canh chua mới đã. Gắp một con, chấm nước mắm, tuốt một phát sạch trơn. Ta nói nó đã gì đâu á”, “Bà ngoại tao mà nấu canh chua cá bông lau với bông so đũa là tụi bây ăn rụng rún luôn đó”. Cứ thế, giấc mơ của đứa nào trong bọn tôi cũng thơm thơm lãng đãng vị canh chua. – Thế giới mắm của miền Tây Nam Bộ phải nói là vô cùng phong phú và hấp dẫn. Nếu ở miền ngoài, mắm đồng nghĩa với mặn. Mặn như mắm. Ăn mắm là sự tằn tiện của cả một thời thiếu túng. Mắm cơ bản không phải là lựa chọn khi đã về với cuộc sống đủ đầy thơm thảo. Thì ở đàng trong, mắm được làm từ cá tép tươi ngon. Lượng muối vừa phải thêm nhiều phụ gia đã tạo ra không phải những hũ, những thùng mà là những lu, những khạp mắm lớn thơm ngon. Mắm ăn quanh năm. Mắm ăn cho thỏa thích. Mắm trên mâm cơm hai vợ chồng mới cưới. Mắm trên bàn tiệc đãi anh em bạn bè. Và một trong những xuất phẩm nổi tiếng từ mắm là món mắm kho. Có thể gọi là món bình dân, có thể gọi là món cầu kỳ và dù ở mức độ nào, mắm kho luôn là món ăn gợi thèm gợi nhớ."),
  new InitProduct("14", "amthuc", "", "./image/amthuc-nauan/d73fa50b1651556494bb29900d2b4c72.jpg.webp", "Các món cháo ăn dặm", "35.000", "Cuốn sách Các Món Cháo Ăn Dặm của khoa Dinh dưỡng bệnh viện Nhi đồng II sẽ giúp các bạn có nhiều chọn lựa khi chế biến món ăn dặm cho đứa con tah6n yêu. Do khoa Dinh dưỡng tích lũy rất nhiều kinh nghiệm chăm sóc trẻ em. Mỗi tah1ng họ tư vấn và điều trị cho hàng ngàn trường hợp trẻ bị thiếu dinh dưỡng và rối loạn dinh dưỡng do không ăn uống theo một chế độ hợp lý. Các bác sĩ, điều dưỡng ở đây luôn trăn trở làm sao để mọi phụ huynh đều biết cách nuôi con tốt và mọi trẻ em đều được nuôi dưỡng hợp lý để phát triển toàn diện cả thể xác lẫn tinh thần.\nCuốn sách tập hợp kỳ công nghiên cứu, cân đong đo đếm tỉ mỉ lượng ca lo, chất đạm, chất béo, lượng can xi, sắt... của từng loại thực phẩm để phối hợp chúng khi nấu nướng một cách hợp lý. Đặc biệt, trong thời kỳ ăn dặm, trẻ ăn gì và ăn như thế nào luôn được lưu ý nhất.\nCuốn sách Các Món Cháo Ăn Dặm của khoa Dinh dưỡng bệnh viện Nhi đồng II sẽ giúp các bạn có nhiều chọn lựa khi chế biến món ăn dặm cho đứa con tah6n yêu. Do khoa Dinh dưỡng tích lũy rất nhiều kinh nghiệm chăm sóc trẻ em. Mỗi tah1ng họ tư vấn và điều trị cho hàng ngàn trường hợp trẻ bị thiếu dinh dưỡng và rối loạn dinh dưỡng do không ăn uống theo một chế độ hợp lý. Các bác sĩ, điều dưỡng ở đây luôn trăn trở làm sao để mọi phụ huynh đều biết cách nuôi con tốt và mọi trẻ em đều được nuôi dưỡng hợp lý để phát triển toàn diện cả thể xác lẫn tinh thần.\nCuốn sách tập hợp kỳ công nghiên cứu, cân đong đo đếm tỉ mỉ lượng ca lo, chất đạm, chất béo, lượng can xi, sắt... của từng loại thực phẩm để phối hợp chúng khi nấu nướng một cách hợp lý. Đặc biệt, trong thời kỳ ăn dặm, trẻ ăn gì và ăn như thế nào luôn được lưu ý nhất."),
  new InitProduct("15", "amthuc", "", "./image/amthuc-nauan/f3d43c5c3bcf3216534599f4e0c923ad.jpg.webp", "Khởi sự ăn chay", "73.000"),
  new InitProduct("15", "amthuc", "", "./image/amthuc-nauan/f89d8a0ce10e8f43e45ef64a1330f1c3.jpg.webp", "Combo 5 cuốn Dinh dưỡng chữa bệnh", "73.000"),
  new InitProduct("16", "amthuc", "", "./image/amthuc-nauan/f195a4a9e7dbdc7cd1bb1f685306e0a6.jpg.webp", "Blog ẩm thực - Ngô Thanh Hòa", "156.000"),
  new InitProduct("17", "suckhoe", "", "./image/yhoc-suckhoe/3dc460b6be295805a8973c4645dbe0d8.jpg.webp", "Ăn uống khoa học & 60 bệnh thường gặp", "56.000", "Cuốn sách nhỏ này sẽ hướng dẫn các bạn cách ăn uống khoa học, hợp lý với từng loại bệnh thường gặp như cảm nắng, cảm nóng, ung thư, nhiễm độc chì, hen phế quản, sưng phổ. Cuốn sách gồm 3 phần:\nPhần 1: Giới thiệu đặc điểm của 60 loại bệnh thường gặp cùng lời khuyên nên ăn gì, kiêng gì với từng bệnh.\nPhần 2: Giới thiệu cách chế biến một số món ăn hỗ trợ chữa bệnh và bồi bổ sức khỏe khi mắc bệnh.\nPhần phụ lục: Giới thiệu chế độ ăn uống trong bệnh viện để hỗ trợ chữa bệnh và đặc điểm dược lý các loại thực phẩm thường dùng."),
  new InitProduct("18", "suckhoe", "", "./image/yhoc-suckhoe/8aa6149e6cdd208acd4147aa0f80786b.jpg.webp", "Y học thiết thực", "39.000", "Trong thời đại mà thuốc là vật phẩm hỗ trợ sức khỏe vô cùng phổ biến, ai ai cũng uống một loại thuốc nào đó, thì việc uống thuốc đúng cách trở nên rất quan trọng. Với những người uống thuốc mà bỏ qua bước tìm hiểu, hoặc tùy tiện thiết kế quy trình uống thuốc cho bản thân mà không qua tham vấn, thuốc có thể chẳng mang lại lợi ích gì cả. Dù là thuốc trị tiểu đường hay thuốc giảm đau, thuốc chống dị ứng hay thuốc kháng virus, mọi loại thuốc đều có những cơ chế và quy tắc riêng mà ta cần hiểu và tuân thủ để thuốc phát huy được tác dụng tốt nhất.\nNắm được những điều cơ bản cho việc uống thuốc của ta cũng không quá phức tạp, bởi cuốn cẩm nang HIỂU CƠ THỂ KHI UỐNG THUỐC sẽ cho bạn thấy những điều cần biết về một số loại thuốc thường gặp nhất một cách rõ ràng, dễ hiểu. Với những ví dụ sinh động và dẫn chứng khoa học xác đáng, đây là cuốn sách không thể thiếu trong tủ thuốc gia đình của mọi nhà.\nPark Han-seul ôm giấc mơ lớn mà nhập học trường dược, nhưng rồi anh nhận ra rằng mình lưu tâm đến người sử dụng thuốc hơn là thuốc. Từ đó, anh tập trung vào việc \“chuyển ngữ\” các tri thức chuyên môn ra ngôn ngữ hằng ngày, và học thêm về các lĩnh vực đa dạng không liên quan trực tiếp tới ngành dược. Anh đã trở thành một cây bút đáng tin cậy trên mặt báo, chuyên phổ cập các tri thức chuyên môn y dược đến mọi người mọi nhà.\nHiện tại Park Han-seul vẫn vừa viết vừa công tác trong cương vị một dược sĩ tại bệnh viện."),
  new InitProduct("19", "suckhoe", "", "./image/yhoc-suckhoe/74b2627512b53cb835c5907966aecd69.jpg.webp", "Yoga & sức khỏe", "77.000", "“Giải phẫu học về giãn cơ” giống như một bản chụp X - quang cho từng động tác giãn cơ, hoàn thiện hơn. Bạn không chỉ có được hình ảnh minh họa đầy sinh động của các cơ khi hoạt động, mà còn nhận thấy rõ cách thức điều chỉnh tư thế trong khi tập để thay đổi trọng tâm tác động lên cơ bắp và độ khó, các động tác được biến thể giúp tăng tính an toàn và hiệu quả cho bài tập. Trọng tâm là Giãn cơ – cuốn sách nêu ra chi tiết trình tự và lợi ích của mỗi bài tập cũng như những lưu ý an toàn và các biến thể phù hợp theo cấp độ từng người.\nMỗi bài tập chỉ rõ cách thức giãn cơ, khi nào nên giãn cơ, các cơ được tác động chủ yếu và thứ yếu, các vùng cơ bắp nào được kích hoạt phụ trợ. Các chương trình giãn cơ đưa ra ba mức độ khó, trong đó có các động tác giãn cơ nhẹ có thể được dùng trong hỗ trợ phục hồi sau những cơn đau và chấn thương. Một chương mới về giãn cơ động bao gồm các bài tập hiệu quả nhất cho khởi động trong thể thao, còn một chương khác hướng dẫn cách tùy chỉnh chương trình tập luyện dựa trên nhu cầu riêng của từng người, kèm theo đó là chương trình giãn cơ tĩnh thụ động đã được chứng minh là có tác dụng hạ đường huyết.\nĐặc biệt, với các vận động viên chuyên nghiệp, cuốn sách có ích cho 23 môn thể thao (chạy bộ, bơi lội, đạp xe, võ thuật, bóng đá, bóng rổ, chơi golf, ) giúp các vận động viên tăng cường tính linh hoạt, đồng thời hạn chế những chấn thương trong tập luyện.\nDù với mục tiêu tăng sự linh hoạt, cải thiện hiệu suất trong thể thao hay giảm đau và căng cơ, “Giải phẫu học về giãn cơ” chính là quyển sách hướng dẫn trực quan các kỹ thuật giãn."),
  new InitProduct("20", "suckhoe", "", "./image/yhoc-suckhoe/b5d764c631a35d501974bdb692a297b0.jpg.webp", "Combo 2 cuốn Ngủ ít vẵn khỏe & Ăn ít vẫn khỏe", "135.000", "Sức khỏe là một vấn đề tất yếu mà mỗi người đều phải quan tâm. Thế nhưng với đời sống xã hội hiện nay, mặc dù vội vã hay bận rộn đến đâu mà chúng ta vẫn có cách để sống khỏe mạnh và thoải mái. Vậy làm thế nào để Ăn Ít Để Khỏe và Ngủ Ít Vẫn Khỏe thì hai cuốn sách sau sẽ giải đáp thắc mắc cho bạn.\nSức khỏe là một vấn đề tất yếu mà mỗi người đều phải quan tâm. Thế nhưng với đời sống xã hội hiện nay, mặc dù vội vã hay bận rộn đến đâu mà chúng ta vẫn có cách để sống khỏe mạnh và thoải mái. Vậy làm thế nào để Ăn Ít Để Khỏe và Ngủ Ít Vẫn Khỏe thì hai cuốn sách sau sẽ giải đáp thắc mắc cho bạn.\nNgủ ít vẫn khỏe\nGửi tới bạn – người đang vướng phải những phiền muộn sau:\n- Ngủ bao lâu cũng không hết cảm giác mệt mỏi\n- Luôn thức dậy buổi sáng trong trạng thái uể oải\n- Dễ bị tỉnh giấc, trằn trọc cho tới nửa đêm\n- Không đủ thời gian dành cho giấc ngủ\n- Trải qua mỗi ngày với quỹ thời gian eo hẹp.\n Mức độ tốt và xấu của giấc ngủ không thể chỉ đo bằng “thời gian”. Giấc ngủ sẽ được quyết định bởi phép nhân: “Thời gian” x “Chất lượng”.\n Nếu có thể lĩnh hội “Phương pháp ngủ ngon trong 5 tiếng” được giới thiệu trong cuốn sách này, cho dù thời gian dành cho giấc ngủ của bạn có ngắn đi chăng nữa, cũng sẽ không có chuyện bạn phải trải qua một buổi sáng khổ sở, không tỉnh táo, mệt mỏi vẫn còn chưa biến mất, và làm việc kém hiệu quả do cả ngày trong trạng thái buồn ngủ.\n “Phương pháp ngủ ngon trong 5 tiếng” của cuốn sách này truyền đạt tới bạn đọc kỹ thuật sở hữu tính hợp lý cả về y học lẫn sinh lý học để trở thành “người ngủ ngắn”.\n Phương pháp ngủ ngon trong 5 tiếng tức là, cho dù bạn chỉ ngủ trong một thời gian ngắn thôi, cả não bộ và cơ thể vẫn có cảm giác tràn đầy sinh khí, đôi mắt và tinh thần hoàn toàn trong trạng thái tỉnh táo. Nhờ đó, mọi hoạt động trong ngày đều đạt hiệu quả cao nhất. Xin được giới thiệu bí quyết giúp bạn có một giấc ngủ sâu và ngắn, nâng cao tối đa “chất lượng” giấc ngủ.\n Bên cạnh đó, kỹ thuật “Thức dậy lúc 5 giờ sáng” mà tác giả sẽ đề cập tới chính là phương pháp cải thiện giấc ngủ vô cùng hiệu quả dành cho những người thường ngủ khoảng 7 tiếng một ngày, giúp họ rút ngắn thời gian ngủ theo kiến thức y học đúng đắn và khoa học.\nĂn ít để khỏe\nTrong tất cả những nghiên cứu về “gen tuổi thọ” được thực hiện thí nghiệm trên động vật những năm gần đây đều chỉ ra rằng việc giảm 40% lượng thức ăn có thể kéo dài 1,5 lần tuổi thọ. Không chỉ dừng lại ở đó, việc giảm bữa ăn còn tạo nên một diện mạo đầy sức sống, cải thiện nòi giống, vẻ bề ngoài cũng trở nên trẻ trung và tươi đẹp hơn.\nMức độ trẻ trung thể hiện sức khỏe nội tại của bạn. Nếu các cơ quan bên trong cơ thể hoạt động trơn tru, máu tuần hoàn tốt, thì da sẽ căng bóng, eo cũng thon gọn. Vẻ bề ngoài bị lão hóa là bằng chứng của việc có mỡ trong nội tạng và cơ thể đang dần hình thành hội chứng chuyển hóa (metabolic syndrome). Khi ấy dù có tô vẽ, trang điểm cầu kỳ thế nào cũng không thể tạo ra được vẻ đẹp thật sự.\nKể từ khi công bố phương pháp ăn “Mỗi ngày một bữa”, bác sĩ Yoshinori Nagumo đã tham gia chia sẻ ở nhiều nơi trên thế giới, trở thành Chủ tịch danh dự của Hiệp hội Y học Chống lão hóa quốc tế. Cuốn sách “Ăn ít để khỏe” là tài liệu đầu tiên của ông về phương pháp ăn “Mỗi ngày một bữa”. Trong cuốn sách này, ông sẽ đưa ra những căn cứ chứng minh phương pháp này là phương pháp tự nhiên nhằm bảo vệ sức khỏe và trình bày cụ thể hơn về cách xây dựng nếp sống mỗi ngày ăn một bữa."),
  new InitProduct("21", "suckhoe", "", "./image/yhoc-suckhoe/ca033f8888a7ac515e04e32b82cda1d1.jpg.webp", "Sổ tay sức khỏe cho người cao tuổi", "348.000", "Đây chính là một chút kiến thức cần thiết cho hành trang của đời người, dù là đang ở đoạn giữa hay là đoạn cuối. Trong sách này bác sĩ Nguyễn Ý Đức đã liệt kê ra đủ các loại bệnh và các câu chuyện về sức khỏe của quý vị cao niên có thể gặp phải trong đời sống thường nhật."),
  new InitProduct("22", "suckhoe", "", "./image/yhoc-suckhoe/dd23eb4cba603c428869f8700c647fa5.jpg.webp", "Những phương pháp phục hồi sức khỏe tự nhiên", "127.000", "Tôi muốn chia sẻ với các bạn những khám phá vĩ đại của cuộc đời tôi. Sự khám phá này là như sau: Vâng, tôi đã không chết mà tôi có thể sống rất lâu trong khỏe mạnh vô bệnh tật và hầu như không già đi. Hãy để cho sự bất tử có thể không bao giờ đạt được nhưng sự trẻ trung thì sẽ không bao giờ mất đi.\nCon người là một thực thể được cấu tạo rất phức tạp. Chúng ta vẫn còn biết rất ít về bản thân mình. Khoa học cũng biết rất ít về con người y học hiện đại thì hầu như không hiểu biết gì về con người. Sự phát triển hiện nay của ngành y không gợi ra được tinh thần lạc quan.\nSẽ phải trải qua vài chục năm nữa, khi mà những bác sĩ chui vào chỗ cuối cùng của con đường hầm không lối thoát, bởi vì họ không biết sẽ viết cho người bệnh đơn thuốc gì và giới thiệu cho người bệnh loại thuốc men nào. Các dược phẩm dần mất đi hiệu lực của mình còn bác sĩ thì cảm thấy hoàn toàn bất lực. Nếu như y học đã có dù chỉ là chút xíu sự hiểu biết về những khả năng thật sự của con người. Lẽ nào, các bác sĩ đã khép tôi án tử hình từ những ngày đầu tuổi thơ của tôi? Không lẽ họ không để lại cho tôi một cơ hội nào để sống khi họ đã từ chối tôi bằng niềm tin chắc chắn rằng tôi sẽ không sống được đến năm 20 tuổi.\nGiờ đây, ở phía sau tôi là những khám phá trường kỳ thú vị mang đầy tính khác thường. Nhưng điều cơ bản nhất là sự chiến thắng bản thân, chiến thắng bệnh tật và chiến thắng sự già nua của đời người. Tôi cố gắng chia sẻ một cách hào phóng toàn bộ cuộc sống bằng những khám phá của mình với mọi người. Tôi không mệt mỏi kêu gọi: Hãy tin vào bản thân, vào cơ thể mình. Đừng cam chịu bệnh tật. Hãy biết rằng các bạn có thể giành chiến thắng thậm chí là trước cái chết nếu như các bạn thật sự muốn điều này. Tôi đã làm được điều này, có nghĩa là các bạn cũng có thể làm được. Tôi không chỉ thoát chết, khỏi bệnh mà còn thiết lập ra chế độ cải thiện sức khỏe có thể giúp cho nhiều người thoát khỏi bệnh tật và bắt đầu sống một cách cao quý trọn vẹn. Họ sẽ được trẻ trung, khỏe mạnh, hạnh phúc mà không bị phụ thuộc vào tuổi trẻ. Nếu như chúng ta kiểm tra bản thân và bắt đầu khám phá những khả năng còn được giấu kín trong cơ thể thì sự sống trên trái đất này có thể kéo dài đến 100 thậm chí đến 120-130 tuổi ngay trong thời gian gần nhất. Điều này là hoàn toàn có thật bởi con người theo phép sinh học đã được lập trình trong khuôn thời gian sống rất dài. Tuy nhiên sự kéo dài cuộc sống ở đây không phải là sự kéo dài của tuổi già, mà là sự kéo dài của tuổi trẻ – tuổi thanh xuân. Kinh nghiệm của riêng tôi nói lên rằng điều này là hoàn toàn có thể."),
  new InitProduct("23", "kientruc", "", "./image/kientruc-xaydung/7e09db7b6dcf18d4b2e5f7a35f9d6f07.jpg.webp", "Lý thuyết thiết kế kiến trúc nhà ở", "89.000", "Lý thuyết thiết kế Kiến trúc nhà ở nhằm trang bị cho sinh viên các kiến thức cơ bản về kiến trúc nhà ở bao gồm các khái niệm, các loại hình nhà ở, đặc điểm, yêu cầu và những nguyên lý chung trong công tác thiết kế. Môn học cũng giúp sinh viên hiểu rõ hơn mối quan hệ giữa kiến trúc với kỹ thuật, công nghệ và trang thiết bị hiện đại cho các loại hình nhà ở, đồng thời là tài liệu cung cấp các kiến thức cơ bản cũng như kiến thức bổ trợ trong các đồ án môn học lý thuyết thiết kế kiến trúc nhà ở năm thứ hai và năm thứ ba ngành Kiến trúc.\nCác kiến thức này cũng là nguồn thông tin bổ trợ cho sinh viên năm cuối trước khi làm tốt nghiệp. Lý thuyết thiết kế kiến trúc nhà ở tập trung đề cập tới phương pháp luận thiết kế nhà ở, lồng ghép các hình ảnh minh hoạ và những tình huống thực tế thường gặp trong thực tế. Các nội dung đều gắn liền với cuộc sống đã và đang diễn ra trên cơ sở của các hình vẽ, hình ảnh, sơ đồ mang tính minh hoạ cũng như tổng hợp các vấn đề với mong muốn giúp người đọc có khả năng tiếp cận tốt nhất."),
  new InitProduct("23", "kientruc", "", "./image/kientruc-xaydung/1653826ae8e8f3922f25f3aef18b317b.jpg.webp", "Cấu tạo kiến trúc", "57.000", "Cấu tạo Kiến trúc là một môn khoa học cơ sở trọng yếu của ngành thiết kế kiến trúc, nghiên cứu về cách cấu kết nên một ngôi nhà hay công trình từ các bộ phận lớn nhất cho đến các chi tiết nhỏ nhất dựa trên một số nguyên tắc và yêu cầu nhất định, đảm bảo tính bền vững, chắc chắn và ổn định cho công trình.\nTuy nhiên cấu tạo kiến trúc không phải đơn thuần chỉ đáp ứng tính bền vững mà còn phải đảm bảo hợp lý, thích dụng, tiết kiệm và mỹ quan.\nCuốn sách \"Cấu tạo kiến trúc\" được biên soạn nhằm:\n- Phục vụ cho việc thiết kế sáng tác kiến trúc.\n- Lựa chọn các giải pháp cấu tạo sao cho phù hợp với hình dáng, kích thước công trình và các chi tiết kiến trúc. Thực chất là việc nghiên cứu tạo ra bộ khung xương chịu lực cho công trình, lớp vỏ bao che và các chi tiết kiến trúc với các liên kết, mối nối hợp lý nhất.\n- Thể hiện các bản vẽ kỹ thuật kiến trúc từ sơ bộ đến chi tiết: mặt bằng, mặt cắt và các chi tiết kiến trúc.\nCuốn sách được sử dụng làm giáo trình chính trong giảng dạy môn Cấu tạo kiến trúc của Bộ môn Cấu tạo và Trang thiết bị công trình - Trường Đại học Kiến trúc Hà Nội. Ngoài ra, nó còn được dùng làm tài liệu tham khảo cho các cán bộ làm công tác tư vấn thiết kế và các cán bộ kỹ thuật có liên quan."),
  new InitProduct("24", "kientruc", "", "./image/kientruc-xaydung/b9ca307f522e5297e39c768b64b1d8a1.jpg.webp", "Tư duy & tổ hợp kiến trúc", "44.000", "Tư duy và tổ hợp kiến trúc là cuốn sách mà GS. KTS. Đặng Thái Hoàng dày công sưu tầm và giới thiệu tới bạn đọc.\nNội dung đưa ra các hình ảnh minh họa và một số quan niệm thiết kế một cách dễ hiểu, là phương pháp hữu hiệu nhất về quan niệm thiết kế để giúp đỡ người đọc và cho bản thân người thiết kế.\nHiểu rõ về quan niệm thiết kế có thể giúp chúng ta đơn giản hóa và suy diễn những vấn đề: Thông tin nhiều và tư liệu không thành thuộc. Công năng sử dụng của kiến trúc là nhân tố cần suy nghĩ quan trọng nhất trong quá trình thiết kế. Chúng ta có thể xây dựng một sơ đồ khép kín để đánh giá hiệu quả của ứng dụng trong thiết kế. Các yếu tố thiết kế tập hợp lại với nhau, căn cứ tính chất xử lý và phân loại, có thể đơn giản hóa công tác thiết kế một cách có lợi và trong giai đoạn đầu tiên của thiết kế bổ trợ cho tư duy phương pháp thiết kế.\nTập sách này cần thiết về mọi phương diện.\n“Cái nhìn được đặt trên vị trí đầu tiên trong trật tự của cảm giác” - Goeth"),
  new InitProduct("25", "kientruc", "", "./image/kientruc-xaydung/c2d154b034d8bd196f9974b562c69e58.jpg.webp", "Lịch sử đô thị thể hiện qua kiến trúc", "69.000", "Qua việc giới thiệu những công trình kiến trúc tiêu biểu, tác giả đã giới thiệu với bạn đọc khái quát về địa lý và lịch sử nước Pháp, cũng như quá trình hình thành và phát triển thủ đô Paris cổ kính, tráng lệ."),
  new InitProduct("26", "kinhte", "dautu", "./image/kinhte/dautu/34eba95a71f80cb240963e1fa7a98ce4.png.webp","Làm giàu từ chứng khoán", "79.000", "Trải qua mọi loại hình thị trường, cuốn sách bán chạy nhất của William J. O’Neil – How to Make Money in Stocks hay Làm giàu từ chứng khoán, đã đem lại bí kíp thành công cho hơn 2 triệu nhà đầu tư. Hệ thống đầu tư CAN SLIM của O’Neil đã được kiểm chứng trong thực tế về khả năng giảm thiểu rủi ro và tối đa hóa lợi nhuận. Kết quả từ nghiên cứu 12 năm của Hiệp hội các nhà đầu tư cá nhân Mỹ đối với 50 chiến lược đầu tư tốt nhất, cho thấy hệ thống CANSLIM của O’Neil là chiến lược có thành tích hàng đầu. CANSLIM đem lại lợi suất 2.763,3% trong 12 năm so với con số 14,9% của S&P 500. CANSLIM được coi là một trong số những hệ thống đầu tư tốt nhất tại Việt Nam. Sách phù hợp cho những ai mới bắt đầu để học phân tích kỹ thuật và phân tích cơ bản."),
  new InitProduct("27", "kinhte", "dautu", "./image/kinhte/dautu/c12f6fca49de9767c6c167c0030f7985.png.webp","Pay Back Time - Ngày đòi nợ", "113.000", "NGÀY ĐÒI NỢ – Payback Time là cuốn sách bán chạy nhất New York Time được tác giả Phil Town sử dụng những ngôn ngữ đơn giản, dễ hiểu và lồng ghép những ví dụ thực tế giúp cho người đọc tiếp cận với những kiến thức về đầu tư chứng khoán một cách dễ dàng.\nBên cạnh đó với những kiến thức và trải nghiệm của bản thân, chúng tôi đã đưa cuốn sách gần gũi hơn với bạn đọc Việt Nam. Cuốn sách sẽ hướng dẫn bạn từ cách thức lựa chọn, đánh giá cổ phiếu, cho đến xây dựng cho mình một danh mục các cổ phiếu sẽ mua, mức giá mua–bán nào là hợp lý, cùng với những nguyên tắc mà bạn phải tuân theo… và cứ thực hành như vậy cho tới khi bạn trở nên giàu có.\n“Một cuộc sống hạnh phúc được bắt đầu từ những quyết định đầu tư khôn ngoan”. Ngay ngày hôm nay, hãy bắt đầu quyết định đầu tư khôn ngoan của bạn bằng việc trang bị một hệ thống và phương pháp đầu tư hoàn chỉnh đã được chứng minh hiệu quả tuyệt đối qua thời gian được trình bày trong cuốn sách này. Bởi vì: Kiếm một số tiền lớn từ đầu tư chứng khoán chính là cách “trả thù” tốt nhất cho tương lai tài chính của bạn vốn đã bị cướp đi trước đây."),
  new InitProduct("28", "kinhte", "dautu", "./image/kinhte/dautu/nghethuatdautu/c9f7f81d70f0b7ae4b0976fe292df862.png.webp","Nghệ thuật đầu tư - Dhandho", "156.000", "Khi nhắc tới đầu tư giá trị, chúng ta không thể không nhắc đến người đàn ông lỗi lạc, người được ví như một “Warren Buffett đời thứ hai”, đó là Mohnish Pabrai.\nThuộc diện sinh sau đẻ muộn lại không được đào tạo bài bản về tài chính nhưng nhưng Mohnish Pabrai đã trở thành một nhà đầu tư vô cùng thành công. Ông được xếp vào hàng ngũ những nhà đầu tư giá trị nổi danh thế hệ mới cùng Phil Town, Guy Spier, Seth Klarman; những con người kế thừa một cách xuất sắc phương pháp đầu tư của các bậc “tiền bối” Benjamin Graham, Warren Buffett và Charlie Munger. Mohnish được biết tới bởi cách tiếp cận cực kì thành công trong dài hạn với thành tích đáng nể: đạt lãi kép tới 18.8%/năm suốt giai đoạn khó khăn của thị trường chứng khoán Hoa Kỳ từ 1999-2008 (thị trường chung chỉ mang lại mức lợi nhuận khoảng 1%) và biến 1 triệu đô la ban đầu của trong quỹ đầu tư của mình (năm 1999) tăng trưởng thành 400 triệu đô la ngày nay.\nLối tiếp cận truyền thống của hầu hết các nhà đầu tư trên thực tế luôn là “Rủi ro cao, lợi nhuận cao” nhưng với Mohnish Pabrai thì không nhất thiết phải như vậy. “Rủi ro thấp, lợi nhuận cao” đó là tất cả những gì ông tìm kiếm.\nMohnish Pabrai thông qua cuốn sách nổi tiếng của mình - “Nghệ Thuật Đầu Tư Dhandho – The Dhandho Investor” sẽ từng bước chỉ ra cho chúng ta những đặc điểm và cách thức đầu tư mà ông đã áp dụng rất hiệu quả trong thực tế. Và thật là may mắn những “túi khôn” và trí tuệ của Mohnish sẽ đến và đi thẳng vào đầu chúng ta bằng lối viết và kể chuyện đơn giản, dễ hiểu.\n“Ngửa thì tôi thắng, sấp thì tôi chẳng thiệt bao nhiêu” đó chính là nguyên tắc lặp đi lặp lại trong cuốn sách thông qua hàng loạt các thí dụ về những ngành nghề, những doanh nhân, và những cơ hội kinh doanh khác nhau. Bạn sẽ hiểu được nguyên nhân vì sao những người Patel, một dân tộc thiểu số Ấn Độ di cư sang Mĩ năm 1970, với số dân vô cùng ít ỏi, lại có thể vươn lên chiếm tới 50% thị phần ngành nghề kinh doanh nhà nghỉ (Motel) tại Mỹ, vì sao doanh nhân Richard Branson lại đạt được thành công lớn với tập đoàn Virgin, vì sao “Vua” thép Ấn Độ Lakshmi Mittal lại là ông hoàng trong lĩnh vực của mình.\nHãy tập trung nghiên cứu và đầu tư vào những công ty bán những sản phẩm mà tất cả mọi người cần; hãy đầu tư vào những công ty có xác suất thay đổi và buộc phải thay đổi ít nhất, những công ty có rủi ro thấp và tính bất định cao; hãy biết chờ đợi và đặt cược lớn khi lợi thế nghiêng về phía mình; hãy cược ít, cược lớn và cược không thường xuyên; hãy mua khi những người khác tuyệt vọng. Đó là tất cả những gì bạn cần phải làm khi đầu tư theo phong cách của Mohnish Pabrai."),
  new InitProduct("29", "kinhte", "khoinghiep", "./image/kinhte/khoinghiep/d6d8afbcf77c37f8aeed48e8b3dde0d4.jpg.webp", "Khởi nghiệp tinh gọn - The Lean Startup", "94.000", "Cuốn sách \"Khởi nghiệp Tinh gọn\" (The Lean Startup) trình bày một mô hình khởi nghiệp vang danh toàn cầu, giúp thay đổi toàn bộ cách thức xây dựng công ty và tung ra sản phẩm mới trên thị trường.\n“Khởi nghiệp” - hai tiếng đơn giản đó có sức hút mạnh mẽ với bất kỳ ai, không chỉ đối với những người đang ấp ủ một dự án kinh doanh, mà ngay cả những ông chủ đang muốn tìm kiếm một sản phẩm hay một ý tưởng mới để “tái khởi nghiệp”, nói cách khác là tái tạo lại mô hình kinh doanh của mình. Tuy nhiên, từ ý tưởng đến thành công là điều không dễ!\nNhiều dự án khởi nghiệp thất bại không phải vì ý tưởng không tốt, chiến lược kém hay tầm nhìn sai, mà cốt lõi của mọi vấn đề nằm ở chỗ chúng ta không có được một mô hình và phương pháp để khởi nghiệp thành công. Vì khởi nghiệp không giống với thành lập và điều hành một công ty theo dạng truyền thống, nên nó cần một mô hình và phương pháp quản trị riêng.\n“Khởi nghiệp Tinh gọn” không chỉ cung cấp những kiến thức nền tảng về phương pháp đã được áp dụng bởi rất nhiều tên tuổi lẫy lừng trong lĩnh vực khởi nghiệp sáng tạo này; mà còn trang bị những phương pháp giúp tăng khả năng thành công, đồng thời cũng giảm thiểu tối đa rủi ro trên hành trình khởi nghiệp hoặc phát triển sản phẩm mới, tái tạo doanh nghiệp của các doanh nhân.\nĐặc biệt, cách tư duy và những phương pháp trong cuốn sách này không chỉ áp dụng cho những siêu tập đoàn toàn cầu, mà còn áp dụng rất phù hợp cho những doanh nghiệp nhỏ, hay siêu nhỏ. Dù ở quy mô nào hay đang ở đâu trên hành trình kinh doanh, đã đến lúc chúng ta cần phải tư duy một cách TINH GỌN!"),
  new InitProduct("30", "kinhte", "khoinghiep", "./image/kinhte/khoinghiep/khoinghiepbanle/af723178d57ecd7da0083e0c00e0ae0d.png.webp", "Khởi nghiệp bán lẻ", "79.000", "TOP 1 SÁCH KHỞI NGHIỆP CHỨA ĐỰNG KINH NGHIỆM TRONG 10 NĂM KINH DOANH CỦA MỘT NGƯỜI TỪNG QUẢN LÝ 65 CỬA HÀNG BÁN LẺ.\nBạn sẽ tìm thấy trong quyển sách:\nCách đơn giản để tìm kiếm ý tưởng kinh doanh và huy động vốn để khởi nghiệp.\n- Phương pháp phân tích nhu cầu khách hàng và đề ra mô hình kinh doanh chuẩn xác.\n- 10 tiêu chí cốt lõi để lựa chọn mặt bằng kinh doanh & 10 kinh nghiệm để thiết kế cửa hàng vừa thu hút vừa tiết kiệm đến 70% chi phí.\n- Đặc biệt nhất là 7 bí quyết nhà nghề độc đáo được trình bày từ dễ đến khó để bạn có ngay một cửa hàng lúc nào cũng đông khách!\nVà nhiều kinh nghiệm quý giá khác, đã và đang được áp dụng tại chính các cửa hàng của tác giả.\nQuyển sách này dành cho:\n- Các bạn đang kinh doanh online và cửa hàng offline.\n- Các chủ shop muốn nâng cao hiệu quả hoạt động của cửa hàng.\n- Nhà sản xuất muốn mở showroom bán sản phẩm của mình.\n- Hay bất kỳ ai yêu thích kinh doanh và ấp ủ giấc mơ làm giàu bền vững.\nKhởi Nghiệp Bán Lẻ là quyển sách không thể thiếu cho những ai muốn quản lý cửa hàng và làm giàu bằng ngành bán lẻ."),
  new InitProduct("31", "kinhte", "khoinghiep", "./image/kinhte/khoinghiep/thinkandgrowrich/01ce6f8396894e14476f7ccbf27a5f51.jpg.webp", "Think and grow rich", "148.000", "13 Nguyên Tắc Nghĩ Giàu Làm Giàu là cuốn sách “chỉ dẫn” duy nhất chỉ ra những nguồn lực bạn phải có để thành công. Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu thêm cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất. Những ý tưởng trong cuốn sách Think and Grow rich – 13 nguyên tắc nghĩ giàu, làm giàu bắt nguồn từ những động lực tốt đẹp: “Thành công cá nhân” và “Quan điểm suy nghĩ tích cực”.\nCuốn sách chứa đựng nhiều hơn những gì mà cuốn sách giải thích về sức mạnh của những nguyên tắc. Phần hấp dẫn nhất của cuốn sách chính là những điều phi thường, những thông điệp trong cuốn sách được viết ra từ rất lâu nhưng vẫn mang tính “thời đại”. Ông đã bàn về những quan niệm như quản lý nhóm, dịch vụ chăm sóc khách hàng hoàn hảo, những công cụ hữu hình, trí tuệ tập thể và mục tiêu cần được viết ra trước khi hành động."),
  new InitProduct("32", "kinhte", "kynangkinhdoanh", "./image/kinhte/kynangkinhdoanh/3d80b70cadb852a8787aa3d2fc8f5f4a.png.webp", "Cải tiến trước phát kiến sau", "111.000", "Cải tiến trước Phát kiến sau – Một cuốn sách tuyệt vời khác Sergio Zyman mang đến góc nhìn toàn diện trong quá trình cải tiến tư duy, định vị thương hiệu và trải nghiệm người dùng trước khi sáng tạo những điều mới mẻ với chi phí khổng lồ.\nĐi qua từng chương trong quyển sách này, độc giả sẽ hiểu được: \n- Tại sao cần quên đi “phát kiến” mà hãy tập trung vào “cải tiến” và cải tiến liên tục.\nLàm thế nào để tìm ra và tận dụng bản sắc cốt lõi thương hiệu để duy trì TOP OF MIND – Nhận diện thương hiệu hàng đầu trong tâm trí khách hàng.\n- Quy trình xây dựng khung cạnh tranh đặc trưng của thương hiệu nhất quán và liên tục.\n- Tư duy: Không bao giờ GIẢM GIÁ vì GIẢM GIÁ sẽ phá hủy “giá trị” thương hiệu.\n-Phương pháp nâng cấp liên tục trải nghiệm người tiêu dùng trong chuỗi giá trị để khách hàng luôn hào hứng, say mê nói về thương hiệu và mua hàng nhiều hơn khi nhìn thấy sản phẩm của bạn. \n-8 cải tiến quan trọng mà bất cứ công ty nào cũng cần thực hiện: Cải tiến tư duy; Cải tiến đích đến kinh doanh; Cải tiến không gian cạnh tranh; Cải tiến phân khúc khách hàng; Cải tiến định vị thương hiệu; Cải tiến trải nghiệm người tiêu dùng; Cải tiến liên tục trong triết lý kinh doanh và những việc làm hàng ngày\n-Tại sao cần thực hiện ngay kế hoạch cải tiến khép kín hoặc bạn sẽ bị đối thủ vượt mặt."),
  new InitProduct("33", "kinhte", "kynangkinhdoanh", "./image/kinhte/kynangkinhdoanh/6b705297c7bb3fdffdd4b38e06229b78.jpg.webp", "Bí mật tư duy triệu phú", "129.000", "\"Ai cũng có một cuộc sống, ai cũng làm việc cần cù, ai cũng ước mơ được thành công, nhưng không mấy ai may mắn học được cách tư duy độc đáo và tầm nhìn của những tỷ phú lừng danh đã tiết lộ trong cuốn sách giá trị này\"\nTrong cuốn sách này T. Harv Eker sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất."),
  new InitProduct("34", "kinhte", "kynangkinhdoanh", "./image/kinhte/kynangkinhdoanh/b145dbecca1a04e9200fb5c1595364cc.jpg.webp", "Dạy con làm giàu", "79.000", "Người giàu không làm việc vì tiền. Họ bắt tiền làm việc cho họ. Chấp nhận thất bại là bước đầu của thành công? Quyền lực của sự lựa chọn! Những bài học không có trong nhà trường. Hãy đọc bộ sách Dạy con làm giàu và bắt đầu từ hôm nay “để không có tiền vẫn tạo ra tiền”…\nBộ sách gồm các tập:\nTập 1: Để không có tiền vẫn tạo ra tiền\nTập 2: Sử dụng đồng vốn\nTập 3: Hướng dẫn đầu tư\nTập 4: Con giàu con thông minh\nTập 5: Để có sức mạnh tài chính\nTập 6: Những câu chuyện thành công\nTập 7: Ai đã lấy tiền của tôi?\nTập 8: Để có những đồng tiền tích cực\nTập 9: Những bí mật về tiền bạc mà bạn không học ở nhà trường\nTập 10: Trước khi bạn thôi việc\nTập 11: Trường dạy kinh doanh\nTập 12: Lời tiên tri của cha giàu\nTập 13: Nâng cao chỉ số IQ tài chính"),
  new InitProduct("36", "kinhte", "marketing", "./image/kinhte/marketing/3aec051e7a7a279f56e4d6fe29f1fc3e.png.webp", "Marketing giỏi phải kiếm được tiền", "89.000", "Marketing giỏi để kiếm được tiền (Tự gốc: the end of advertising as we know it) là nền tảng cơ bản ngày ngày soi sáng và là kim chỉ nam cho tất cả các hoạt động marketing.  Nếu bạn là chủ doanh nghiệp, hoặc nếu bạn là quản lý marketing, những người làm marketing hoặc là người mới khởi nghiệp hoặc chỉ là một người yêu thích muốn hiểu marketing là gì, thì bạn sẽ không phí phạm bất cứ một giây phút nào khi bạn mua, đọc để tìm hiểu cuốn sách này và tư tưởng của nó."),
  new InitProduct("37", "kinhte", "marketing", "./image/kinhte/marketing/93b34eb7fc665b4f9c7a8c4960f32e94.png.webp", "22 quy luật bất biến trong Marketing", "77.000", `22 Quy luật Bất biến trong Markerting với những quy luật cơ bản này sẽ hướng dẫn bạn cách tránh những sai lầm từ ngay giai đoạn đầu lên kế hoạch marketing. Đây là những quy luật cơ bản có khả năng chi phối nhất định đến sự thành công cũng như thất bại trong công việc kinh doanh. Các quy luật này bổ sung và hỗ trợ chặt chẽ cho nhau, tạo một mắc xích bền vững trong marketing, giúp bạn học hỏi được nhiều bài học và kinh nghiệm hữu ích để áp dụng thành công trong công tác marketing của mình.`),
  new InitProduct("38", "kinhte", "marketing", "./image/kinhte/marketing/hinh.u4939.d20170929.t095103.1139.jpg.webp", "Phiêu lưu trong thế giới Marketing", "89.000", `Philip Kotler được cả thế giới biết đến là “cha để của marketing hiện đại”. Trong hơn 50 năm qua ông đã dạy ở Trường Quản lý Kellogg, Đại học Northwestern, Evanston, Illinois. Quyển sách này, với 49 bài viết của chính tác giả, như một mô tả hoàn chỉnh về con đường đưa Philip Kotler từ một tiến sĩ kinh tế ở MIT trở thành bậc thầy về marketing. Nhưng quan trọng hơn hết những bài viết giới thiệu với các độc giả những ý tưởng mới cho khoa học và thực hành marketing; quan điểm về tương lai của marketing và ngành bán lẻ; tư duy về marketing con người, nơi chốn, ý tưởng và điều thiện, cũng như marketing viện bảo tàng, sưu tập tranh; mối quan tâm và đề xuất của ông về giảm đói nghèo, tham nhũng, bất bình đẳng thu nhập; những cuộc phiêu lưu của ông đến Ý, Nhật, Ấn Độ, Brazil….`),
  new InitProduct("39", "kinhte", "marketing", "./image/kinhte/marketing/nguyenlymarketing/bde038e735b3d2461d4347e0223d41b3.jpg.webp", "Nguyên lý Marketing", "101.000", "Cuốn sách có thể được xem như là giáo trình kinh điển dành cho bất cứ ai muốn nghiên cứu lĩnh vực marketing, bởi nó chứa bên trong gần như tất cả những gì bạn cần biết về marketing – từ định nghĩa, lý luận, các nguyên tắc, cho đến ứng dụng, ví dụ thực tế. Sách cũng không ngừng được chỉnh sửa, tái biên soạn, cập nhật thêm thông tin, trường hợp nghiên cứu mới cho phù hợp với tình hình kinh tế không ngừng thay đổi.\nNgoài các khái niệm cốt lõi của lĩnh vực marketing được tổng kết qua thời gian, hai tác giả Philip Kotler và Gary Armstrong tập trung vào phân tích công việc marketing trong bối cảnh kinh tế đầy thách thức hiện nay.\nCuốn sách trình bày thông tin marketing nền tảng theo một hình thức sáng tạo và dễ hiểu, đầy đủ những dẫn chứng, minh họa được lấy từ thực tiễn sống động của thương trường. Sau mỗi chương sách đều có phần tóm tắt rất cô đọng, giúp người đọc củng cố lại kiến thức tiếp thu được trong chương đó. Đồng thời, sách cũng có phần thảo luận và ứng dụng nhằm mở rộng hiểu biết của độc giả về lĩnh vực này."),
  new InitProduct("40", "kinhte", "nhansu", "./image/kinhte/nhansu/02b295989648ac5cee5ef45d8df29f4f.jpg.webp", "Nghệ thuật quản lý nhân sự", "79.000", `Là người lãnh đạo, muốn quản lý thành công và hiệu quả, phải có niềm tin kiên định và phương pháp rõ ràng trong việc tuân thủ nguyên tắc quản lý. Mỗi khi nắm bắt được vấn đề cốt lõi của việc quản lý: cách dùng người, phát hiện tài năng, bồi dưỡng tính tự giác, độc lập cho nhân viên, tạo điều kiện để họ phát huy sở trường là bạn đã thể hiện được kỹ năng cũng như nghệ thuật quản lý.
  Nghệ Thuật Quản Lý Nhân Sự trình bày dễ hiểu những điểm quan yếu nhất trong phương pháp quản lý nhân sự: cách ra lệnh, chọn giải pháp, giải quyết trở ngại, đề xuất thưởng phạt, khích lệ nhân viê kèm theo những ví dụ cụ thể thường xảy ra trong thực tế. Vận dụng tinh tế, đúng lúc những phương pháp này, bạn sẽ nắm được bí quyết quản lý, dễ dàng tạo dựng thành công cho cá nhân lẫn doanh nghiệp.`),
  new InitProduct("41", "kinhte", "nhansu", "./image/kinhte/nhansu/2d45594f8df4e549317d3624ddd88e3f.jpg.webp", "Kỹ năng quản lý nhân sự chuyên nghiệp", "67.000", `“Kỹ năng quản lý nhân sự chuyên nghiệp” là một cuốn sách quan trọng cho các nhà quản lý muốn giúp các thành viên trong nhóm học hỏi, phát triển và nhận ra tiềm năng của họ.
  Trong cuốn sách này, Whitney Johnson – người từng có 20 năm huấn luyện, đầu tư và tư vấn, đã giới thiệu các cách để trở thành một trong những nhà quản lý giỏi và xây dựng đội ngũ nhân viên làm việc hiệu quả và năng suất.`),
  new InitProduct("42", "kinhte", "nhansu", "./image/kinhte/nhansu/sachthucdaynhanvien/9367de1f333d1c04c73a15c65642a5c3.jpg.webp", "Thuật Tuyển dụng & Sa thải", "129.000", `Tuyển dụng và sa thải là hai trong số những nhiệm vụ quan trọng và khó khăn nhất của nhà quản lý. Quyết định lựa chọn cá nhân nào và sa thải nhân viên nào là bài toán đau đầu và đầy áp lực, bởi nó quyết định sự thành công của doanh nghiệp trong tương lai. Theo thống kê của các chuyên gia về nhân sự, những kĩ năng tuyển dụng tốt nhất chỉ mang lại 66% thành công và một phần ba số người bạn tuyển dụng sẽ không gắn bó với công ty lâu dài. Cùng với đó, mối thương cảm và sự hèn nhát là hai yếu tố chính khiến nhà quản lý trì hoãn quyết định sa thải một nhân viên không hiệu quả. Bạn hoàn toàn có thể khắc phục những điểm yếu này và cải thiện hiệu quả tuyển dụng của mình bằng cách vận dụng 21 ý tưởng trong cuốn sách này.`),
  new InitProduct("43", "kinhte", "nhansu", "./image/kinhte/nhansu/sachthucdaynhanvien/bc86b7eaa87e5acc0492ab75c7c0e65c.jpg.webp", "Thuật thúc đẩy nhân viên", "125.000",`Với tư cách một nhà quản lý, một trong những trách nhiệm quan trọng nhất của bạn là khuyến khích nhân viên dưới quyền nỗ lực hết sức mình trong công việc. Các nhà quản lý biết cách tạo ra những môi trường tích cực, khuyến khích khen thưởng sẽ làm giảm tỉ lệ vắng mặt và thay đổi nhân sự đồng thời tăng đáng kể năng suất và chất lượng công việc. Với kinh nghiệm của bản thân, Brian Tracy sẽ cung cấp cho độc giả 21 bí kíp súc tích, mạnh mẽ và vô cùng hiệu quả để gia tăng hiệu suất của bất kì cá nhân hoặc nhóm làm việc nào gồm:
  - Đảm bảo rằng nhân viên luôn muốn đến nơi làm việc và đam mê với công việc của họ.
  - Thử thách họ bằng các nhiệm vụ và để họ được toàn quyền quyết định các vấn đề liên quan đến nhiệm vụ đó.
  - Đáp ứng nhu cầu của họ để họ cảm thấy vừa độc lập trong công việc vừa là một phần của tổng thể lớn hơn.
  - Giảm thiểu nỗi sợ hãi thất bại và gia tăng ham muốn thử sức ở mỗi nhân viên. - Loại bỏ những trở ngại khiến nhân viên còn chần chừ.
  - Cung cấp các thông tin phản hồi thường xuyên mà họ cần để thành công.`),
  new InitProduct("44", "kinhte", "nhansu", "./image/kinhte/nhansu/toidahoa/9d22a5e1ddecc655bdf99be84c6f1fb7.jpg.webp", "Tối đa hóa năng lực nhân viên", "155.000",`Cuốn sách gồm 4 chương tương ứng với 4 bí kíp bỏ túi dành cho bạn. Với cuốn Tối Đa Hoá Năng Lực Nhân Viên, bạn sẽ học được cách làm chủ và thực hành việc quản lý người tài mỗi ngày. Bạn sẽ khám phá ra cách thức những niềm tin của bạn về công việc và bản chất con người, cùng những hành vi hàng ngày của bạn ở nơi làm việc ảnh hưởng như thế nào đến khả năng và động lực để làm việc của nhân viên.
  Cuốn sách sẽ đưa bạn trải qua từng chiến lược đơn giản nhưng vô cùng hiệu quả:
  Đánh giá tiềm năng mỗi nhân viên;
  Thu hút, đánh giá các ứng viên dựa trên các tiêu chí thực sự quan trọng và lựa chọn đúng người cho mỗi vị trí;
  Thực hiện việc đào tạo một cách thường xuyên thông qua công việc;
  Đánh giá cách thức nhân viên của bạn đang làm việc và thường xuyên đưa ra những phản hồi tích cực;
  Tích cực khuyến khích nhân viên lập kế hoạch nghề nghiệp và thăng tiến;
  Truyền tải những kiến thức không chính thức thông qua việc giao công việc, hướng dẫn và kể bài học kinh nghiệm;
  Hoàn thiện khả năng hướng dẫn nhân viên và nắm bắt cơ hội để phát triển khả năng này;
  Làm việc như một hình mẫu về sự phát triển bản thân không ngừng và hơn thế nữa.
  Nhắm đến đối tượng là các nhà quản lý các cấp và khắc hoạ những điển hình trên thực tế, cuốn cẩm nang không thể thiếu này lý giải tại sao những nhà quản lý, chứ không phải là phòng Nhân sự, phải đi đầu trong việc thu hút, nuôi dưỡng, và giữ những người làm việc hiệu quả nhất, đáng để thăng chức nhất… với những kỹ năng thực tiễn mà họ cần để làm tốt việc đó mỗi ngày.`),
  new InitProduct("45", "kinhte", "quantri-kinhdoanh", "./image/kinhte/quantri-kinhdoanh/6da5ef70fe8ec52184d8c2b49cf84b3a.jpg.webp", "Siêu sao công sở", "89.000", `Trong cuốn sách này, tác giả Glenn Shepard chỉ ra những ai đang làm việc (không phân biệt vị trí - cấp bậc) luôn có thể nâng cao hiệu suất và tiến xa hơn trong sự nghiệp qua những hướng dẫn thực tế dưới đây: 
  - Đặt câu hỏi đúng: Tại sao bạn cần phải trở thành một nhân viên chủ chốt (không thể thiếu)? Khi trả lời được câu hỏi này, sự nghiệp của bạn sẽ bước sang một trang mới. 
  - Hợp tác và làm việc với Sếp cũng như thấu hiểu họ, những giá trị kỳ vọng từ Sếp dù họ thuộc thế hệ 6X, 7X, 8X hay 9X.
  - Thể hiện sự xuất sắc trong công việc bằng cách trở thành một người làm việc hiệu suất, đưa bản thân trở thành người ít phải sửa đổi và học cách để mắc sai-lầm-đúng.
  - Xây dựng tác phong làm việc chủ động, chuyên nghiệp và chịu trách nhiệm cho sự nghiệp mà bạn muốn đạt được. 
  - Trở thành người giải quyết vấn đề chứ không phải tạo ra vấn đề cho công ty. … và còn rất nhiều cách thức sẽ được bật mí giúp bạn trở thành Siêu Sao nơi công sở. `),
  new InitProduct("46", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/giaotiep/67fe9a959a0ed3a4a3f1e6a24dc52b4e.jpg.webp", "Tiếng anh giao tiếp trong 30 ngày", "78.000", `Học Tiếng Anh Giao Tiếp Chỉ Trong 30 Ngày
  Bạn thấy nói là kỹ năng khó nhất khi học tiếng Anh? Bạn muốn phát âm thật chuẩn, dùng từ chính xác, nói đúng ngữ pháp, lưu loát và tự nhiên như người bản ngữ? Hơn nữa, bạn còn muốn đạt được những mục tiêu này trong thời gian ngắn nhất? Nếu vậy thì Học tiếng Anh giao tiếp chỉ trong 30 ngày là cuốn sách rất hữu ích đối với bạn.
  Với kinh nghiệm nhiều năm sống và làm việc ở các nước nói tiếng Anh, chúng tôi đã nỗ lực thu thập và chọn lọc một số từ vựng cùng khoảng 2.500 câu thoại cần thiết nhất, thường gặp nhất nhằm giúp bạn nhanh chóng sử dụng được tiếng Anh, diễn đạt chính xác những điều mình muốn nói trong nhiều tình huống. Ngoài ra, để hỗ trợ bạn trong quá trình học, chúng tôi còn cung cấp cho bạn một số kiến thức liên quan đến văn hóa và sinh hoạt hàng ngày của người bản xứ.
  Hy vọng rằng sau 30 ngày học với giáo trình này, kỹ năng nói tiếng Anh của bạn sẽ có sự tiến bộ đáng kể và bạn hoàn toàn tự tin khi giao tiếp bằng tiếng Anh.
  Các đặc điểm nổi bật của sách:
  - 30 chủ đề sát thực tế cuộc sống
  Sách giới thiệu 30 chủ đề gắn liền với thực tế cuộc sống nhằm giúp bạn nhanh chóng thích nghi với hoạt động học tập, làm việc cũng như những hoạt động khác tại các nước nói tiếng Anh.
  - Giới thiệu sơ lược nội dung bài học
  Ở đầu mỗi bài học là phần giới thiệu ngắn gọn nội dung bài học để bạn có cái nhìn khái quát về những chủ đề sẽ được trình bày, từ đó dễ dàng nắm bắt từ vựng và các câu thoại liên quan.
  - Từ vựng cần thiết
  Phần này liệt kê một số từ vựng trong bài kèm phiên âm, nghĩa tiếng Việt cùng một vài hình minh họa nhằm giúp bạn phát âm chính xác và dễ nhớ nghĩa của từ. Đây là những từ vựng bạn cần biết để sử dụng trong giao tiếp hằng ngày.
  - Những câu thoại thông dụng
  Đây là phần cốt lõi của mỗi bài học. Mỗi bài sẽ cung cấp cho bạn hơn 80 câu thoại kèm phần chú giải các cụm từ và điểm ngữ pháp cần lưu ý. Nhờ đó, bạn sẽ nói tiếng Anh lưu loát và tự nhiên như người bản ngữ.
  - Bổ sung kiến thức
  Với phần này, bạn sẽ được trang bị thêm một số kiến thức liên quan đến văn hóa của người bản ngữ để hiểu rõ hơn về cuộc sống và thói quen sinh hoạt của người dân ở các nước nói tiếng Anh.
  - Bảng theo dõi tiến độ
  Bảng ở trang 6 và 7 giúp bạn theo dõi tiến độ học tập của bản thân để không ngừng cố gắng nhằm đạt được mục tiêu đã đặt ra: hoàn thành các bài học trong sách sau 30 ngày và có thể tự tin sử dụng tiếng Anh trong giao tiếp.
  
  Tiếng Anh cho người bắt đầu:
  Mô tả sản phẩm:
  
  Sách Tiếng Anh Cho Người Mất Gốc Cô Trang Anh:
  - Học ngữ pháp từ con số 0.
  - Hiểu tiếng anh theo cách đơn giản nhất.
  - Đầy đủ 4 kỹ năng: Nghe - Nói - Đọc - Viết.
  - Học giao tiếp theo chuyên đề ngữ pháp.
  - Bài tập luyện tập hướng tới từng kỹ năng.
  
  1. Nội Dung Sách:
  - Sách bao gồm 30 units, trong đó mỗi bài lại được chia thành các phần: Nghe - Nói - Đọc - Viết và Ngữ Pháp.
  - Toàn bộ cuốn sách được giải chi tiết. Ngoài bài giảng và hỏi - đáp tại website, các bạn sẽ được HỖ TRỢ LIVESTREAM trong nhóm Tiếng anh cho người mất gốc / Sách Tiếng anh cho người mới bắt đầu.
  - File nghe đính kèm được thu âm bởi chính GIÁO VIÊN BẢN XỨ.
  - Định hướng cuốn sách đi từ việc lấy lại ngữ pháp Tiếng anh cho người mất gốc song song với việc phát triển đầy đủ các kỹ năng tiếng anh, giúp cho người mới bắt đầu sử dụng Tiếng Anh tự tin hơn trong công việc cũng như trong cuộc sống hàng ngày.
   
  2. Đối Tượng Học:
  - Học sinh từ lớp 8 trở lên.
  - Người mất gốc hoặc người mới bắt đầu học Tiếng Anh.
  - Học sinh, sinh viên đang chuẩn bị tham gia các bài khảo sát, bài thi, kỳ thi quan trọng.
  - Thầy cô giáo làm tài liệu tham khảo.`),
  new InitProduct("47", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/giaotiep/269f2bcd9594dcf8f23bbcd7db557422.jpg.webp", "Tiếng anh giao tiếp thật dễ dàng", "134.000", `Easy English Conversation – Giao tiếp tiếng Anh thật dễ dàng
  Nếu bạn nghĩ rằng bạn không cần thiết phải học tiếng Anh vì hiện tại không có nhu cầu. Tôi sẽ đồng ý nếu bạn đang nói đến tiếng Anh học thuật, còn tiếng Anh trong giao tiếp hàng ngày thì bạn nên học, nó không hề khó như bạn nghĩ. Giả sử, khi bạn nhìn thấy một status bằng tiếng Anh trên facebook hoặc một vài câu chỉ dẫn trên các sản phẩm bạn đang dùng, bạn có tò mò muốn biết về thông tin đó không?
  Bạn thân mến, tiếng Anh thực sự rất cần thiết trong cuộc sống ngày nay. Bạn cũng sẽ thấy việc học tiếng Anh dễ dàng hơn nhiều khi bạn tìm thấy một phương pháp hoặc một cuốn sách phù hợp với khả năng và nhu cầu của bạn. Đó cũng là lí do vì sao cuốn sách “Easy English Conversation – Giao tiếp tiếng Anh thật dễ dàng” này ra đời.
  Bạn cảm thấy rằng
  • Bạn không có năng khiếu học tiếng Anh
  • Bạn không biết cần học những gì để có thể nói tiếng Anh trôi chảy
  • Bạn không thể nổi những từ vựng, câu tiếng Anh.
  Có bao giờ bạn tự đặt câu hỏi rằng “Khi mình mới sinh ra thì tiếng Việt cũng là một ngoại ngữ, nhưng tại sao bây giờ mình có thể đọc và nói tiếng Việt rất thành thạo?”. Bạn hãy thử tìm câu trả lời cho câu hỏi này nhé!
  Cuốn sách “Easy English Conversation – Giao tiếp tiếng Anh thật dễ dàng” sẽ giúp bạn
  • Tự tin nói và hiểu đúng tiếng Anh
  • Ghi nhớ nhanh với phương pháp Sơ đồ tư duy
  • Học dễ dàng qua các tình huống giao tiếp thực tế
  • Từng bước hình thành những mẫu câu giao tiếp cơ bản
  • Làm chủ từ vựng, cấu trúc câu trong từng ngữ cảnh
  • Cải thiện khả năng phát âm tiếng Anh đúng chuẩn
  • Luyện ngữ điệu trong giao tiếp tiếng Anh như người bản ngữ
  • Học nhẹ nhàng, dễ dàng áp dụng.
  Nội dung cuốn sách bao gồm những câu thoại tiếng Anh về những chủ đề tiếng Anh giao tiếp thông dụng nhất trong cuộc sống hàng ngày. Điều đặc biệt là những kiến thức này được trình bày dưới dạng sơ đồ tư duy giúp người học có thể dễ dàng tổng hợp kiến thức đã học và nâng cao khả năng ghi nhớ nhanh gấp 3 lần so với cách học thông thường.
  Bạn sẽ học tiếnsg Anh dễ dàng như thế nào với cuốn sách này?
  • Ghi nhở mẫu câu tiếng Anh theo sơ đồ tư duy
  • Nâng cao vốn từ vựng và cụm từ liên quan theo chủ đề
  • Mở rộng những mẫu câu trong mỗi chủ đề
  • Thực hành giao tiếp theo các hình ảnh cho sẵn
  • Tích hợp app, luyện nghe dễ dàng ngay trên điện thoại.
  Điều tôi cần bạn làm với cuốn sách này là hãy đặt cho mình một lịch học hàng ngày, kèm theo đó là tính kỷ luật. Vì những ai thành công đều phải kiên trì và đề cao kỷ luật của bản thân`),
  new InitProduct("48", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/giaotiep/ae7c5b24790b7bf01597a3c7e90f1c1d.jpg.webp", "Tiếng anh cho người mới bắt đầu", "106.000"),
  new InitProduct("49", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/giaotiep/e219ac06bdafddb52dca74aed43f3e43.jpg.webp", "Đột phá nghe hiểu tiếng anh", "59.000", `Tiếp nối sự thành công của Hacking your English Speaking, cuốn sách Hacking your English Listening của tác giả Hoàng Ngọc Quỳnh được thiết kế đặc biệt nhằm giúp các bạn cải thiện khả năng nghe – hiểu tiếng Anh.
  Hacking your English Listening dành cho những ai?
  Cuốn sách này dành cho tất cả những bạn đang gặp khó khăn trong khả năng nghe tiếng Anh
  Bạn mới học tiếng Anh và không biết phải bắt đầu luyện nghe tiếng Anh theo phương pháp nào.
  Bạn đã học tiếng Anh từ rất lâu rồi nhưng khả năng nghe – hiểu tiếng Anh thực tế vẫn còn chưa tốt
  Bạn cảm thấy chán nản với việc học tiếng Anh, thậm chí là muốn từ bỏ. Bạn muốn tìm lại động lực học và phương pháp luyện nghe tiếng Anh hiệu quả.
  3 trở ngại khiến bạn gặp khó khăn khi nghe – hiểu tiếng Anh sẽ được giải đáp trong cuốn sách Hacking your English Listening
  Trở ngại 1: Phát âm
  Cách phát âm của người bản ngữ nói tiếng Anh rất khác so với cách mà bạn vẫn nói tiếng Anh hàng ngày khiến bạn bị “lạc” khi nói tiếng Anh chuẩn và không thể bắt kịp những gì họ nói.
  =>> Giải pháp cho bạn:
  Bạn cần học cách nhấn trọng âm
  Bạn cần học và thành thạo cách nối âm và cách nói giản lược từ trong tiếng Anh.
  Làm quen và thành thạo sử dụng các lingking patterns/ reduction patteens để có thể nghe – hiểu tiếng Anh dễ dàng hơn.
  Chương 2 và 3 của cuốn sách Hacking Your English Listening sẽ giúp bạn giải quyết hết tất tần tật những trở ngại về phát âm trên.
  Trở ngại 2: Từ vựng
  Khi lượng từ không đủ thì sẽ rất khó nghe – hiểu dù bạn có luyện tập nghe đi nghe lại 1 bài hội thoại nhiều lần.
  =>> Giải pháp cho bạn:
  Chương 4 của cuốn sách sẽ giúp bạn học được ít nhất 500 từ vựng theo các topic thông dụng nhất, giúp khả năng nghe -hiểu trong các tình huống khác nhau được cải thiện đáng kể.
  Trở ngại 3: Sự tập trung
  Bạn quá lo lắng về việc phải nghe – hiểu, hoặc bạn nghĩ về nhiều thứ khác nhau là những khó khăn lớn ảnh hưởng đến sự tập trung khi nghe.
  =>> Giải pháp cho bạn:
  Chương 3 và 4 của cuốn sách sẽ giúp bạn tăng cường khả năng tập trung khi nghe tiếng ANh thông qua việc thực hành Nghe và chép lại.
  Trở ngại 4: Bạn chưa tìm được phương pháp luyện nghe thực sự phù hợp với mình
  Cách luyện nghe không đúng chính là luyện nghe thụ động bởi điều này khiến bạn dần dần không có phản xạ nghe – hiểu tiếng Anh.
  =>> Giải pháp dành cho bạn: Bạn cần luyện tập nghe một cách chủ động, hiểu những gì mình nghe được, từng chút một. Cách này sẽ giúp bạn thấm nhuần từ vựng, phát âm và các cấu trúc ngữ pháp.
  Chương 3 và 4 của cuốn sách sẽ giúp bạn từng bước luyện nghe chủ động một cách dễ dàng.
  Trở ngại 5: Tài liệu luyện nghe
  Nếu bạn chọn tài liệu quá khó hoặc quá dễ thì sẽ không thể cải thiện khả năng luyện nghe của mình.
  =>> Giải pháp dành cho bạn: Hãy chọn tài liệu luyện nghe phù hợp với khả năng của mình (Bạn nghe được khoảng 70 – 80% tài liệu đó). Hoặc bạn có thể chọn những tài liệu “Siêu khó” để thách thức khả năng nghe của mình, tuy nhiên chỉ nên sử dụng khi bạn đã hiểu sơ lược về nội dung của bài nghe.
  Trở ngại 6: Thiếu động lực
  Khi nghe không hiểu, bạn sẽ rất chán nản, mất động lực và từ bỏ.
  =>> Giải pháp dành cho bạn: DONT GIVE UP TOO QUICKLY!
  Đừng từ bỏ quá sớm, hãy thực hành theo cuốn sách Hacking your English Speaking với những phương pháp khoa học, bạn sẽ thấy thành quả mỗi ngày và có thêm nhiều động lực để nghe hiểu tiếng Anh tốt hơn.`),
  new InitProduct("50", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/ielts/0fb4f2e57faced01c633225f9a2e680f.png.webp", "IELTS Academic Speaking Band 5.0 - 6.5", "134.000", `How to crack the IELTS Speaking test Part 1
  Cuốn sách tập trung vào 20 chủ đề thường gặp trong IELTS Speaking, với những tips hữu ích nhằm giúp các thí sinh có thể đạt được các band điểm mong muốn, phổ biến với các mức 6.0, 7.0 và 8.0. Các câu trả lời mẫu trong sách cũng xoay quanh cuộc sống thường ngày, tạo cảm giác quen thuộc, gần gũi với người đọc, mở ra hướng tư duy gắn liền với thực tiễn cuộc sống.
  Không chỉ tập trung vào việc dẫn lối tư duy, cuốn sách còn cung cấp rất nhiều mẫu câu, từ vựng, ngữ pháp đa dạng – là những tips “ăn điểm” với giám khảo, tạo nên bước đột phá trong từng band điểm.
  Cuối cùng, nhằm giúp người học có thể củng cố các kiến thức đã học ở phần ví dụ, How to crack the IELTS Speaking test – Part 1 còn cung cấp thêm bài tập với nội dung và dạng bài đa dạng, giúp các sỹ tử ôn luyện thêm các kĩ năng nghe, nói, đọc, viết, từ đó giúp chặng đường vượt vũ môn thêm dễ dàng.
  Cuốn sách đã nhận được nhiều lời khen ngợi từ các KoLs trong lĩnh vực giảng dạy và có được sự ủng hộ nhiệt tình của độc giả ngay từ khi giới thiệu những trang sách đầu tiên, hứa hẹn sẽ trở thành một tài liệu must-have đối với các thí sinh đang ấp ủ giấc mơ chinh phục IELTS.
  Mọi điều cần biết cho band 6, 7 và 8 IELTS Speaking.
  20 chủ đề thường gặp trong IELTS Speaking với những tips hữu ích nhằm giúp các thí sinh có thể đạt được các band điểm 6.0, 7.0 và 8.0.
  Cung cấp các mẫu câu, từ vựng, ngữ pháp đa dạng – là những tips “ăn điểm” với giám khảo, tạo nên bước đột phá trong từng band điểm.
  Cung cấp thêm phần bài tập với nội dung và dạng bài đa dạng, giúp các sỹ tử ôn luyện thêm các kĩ năng nghe, nói, đọc, viết.`),
  new InitProduct("51", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/ielts/8df64930dea385a0a274b31ab253238b.jpg.webp", "Cambridge - IELTS Academic 14 with Answers", "159.000", `Cambridge IELTS 14 – Cuốn sách thứ 14 trong bộ sách huyền thoại
  Cambridge IELTS từ nhà xuất bản Cambridge, với 2 phiên bản Academic và General Training đã chính thức lên kệ tại Công ty Cổ phần Sách Việt Nam.
  Với đầy đủ 4 kỹ năng listening, reading, writing, speaking cùng với answer keys, Cambridge IELTS 14 sẽ cung cấp những kiến thức đầy đủ từ cấu trúc bài thi, các modul cần thiết, bài mẫu hay các kĩ năng cần thiết giúp bạn có thể sẵn sàng bước vào kì thi IELTS với những trải nghiệm tốt nhất, sát với thực tế nhất.`),
  new InitProduct("52", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/toeic/8accf7f9f83f7eb77bdb54f6975f1ef2.jpg.webp", "Từ vựng TOEIC - Economy", "131.000", `“New Economy TOEIC” vol 1 – 5 là bộ sách dành cho việc luyện thi TOEIC. 
  Bộ sách có 5 mức độ từ 1 đến 5 với độ khó tăng dần theo mức độ. 
  Bạn sẽ được cung cấp một lượng kiến thức vững để giải quyết các vấn đề trong bài thi TOEIC. 
  Trọn bộ “New Economy TOEIC” sẽ giúp bạn cải thiện rõ rệt trình độ của mình. 
  Bên cạnh đó, bạn cũng nên xây dựng cho bản thân phương pháp học tập đúng đắn. Có như vậy, bạn mới đạt được kết quả tốt nhất trong TOEIC. 
  TOEIC là quá trình ôn luyện thử thách đòi hỏi bạn phải kiên nhẫn và nỗ lực thật nhiều. `),
  new InitProduct("53", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/ielts/601dcc9980060707344f2514ef51cd81.jpg.webp", "Perfect Vocabulary for IELTS", "118.000", `Perfect IELTS Vocabulary hội tụ đầy đủ các yếu tố mà một người học IELTS, đặc biệt là những người tự học đang tìm kiếm. Cuốn sách trang bị cho người học lượng từ vựng cực “khủng” (chỉ với hơn 200 nghìn với một cuốn sách 600 trang) sử dụng cho cả bốn kỹ năng Nghe, Nói, Đọc, Viết trong kỳ thi IELTS.
  Từ vựng tổng hợp trong sách dành cho người học từ trình độ cơ bản đến nâng cao. Với kết cấu đơn giản và rõ ràng, người học từ trình độ sơ cấp hoàn toàn có thể làm quen và tự học.
  Không chỉ sử dụng như một tài liệu tham khảo trong quá trình tự học, hay đối với những ai không có nhiều kinh phí học ở các trung tâm, Perfect IELTS Vocabulary còn vô cùng phù hợp với bạn nào đang sắp thi IELTS, thời gian học tập không có nhiều và muốn cải thiện nhanh chóng vốn từ vựng của mình.
  Học đầy đủ và sử dụng được các kiến thức trong cuốn sách này thì yên tâm bản thân đã có vốn từ vựng kha khá rồi nên lúc bắt tay vào giải đề IELTS sẽ không bị bỡ ngỡ vì gặp nhiều từ khó nữa.
  1. Nêu ra các ưu điểm nổi bật nhất của cuốn sách? Đưa ra 1 số ví dụ trong sách để minh họa những ưu điểm nổi bật đó.
  - Gồm các chủ điểm từ vựng chia làm 10 nhóm (Environment, Education, Culture, Art, Technology, Transportation, Health, Media, Leisure, Social Life) với hệ thống từ vựng từ cơ bản đến nâng cao.
  - Với mỗi từ/cụm từ, sách đều trình bày kèm theo ví dụ và phần giải thích để người học làm quen với cách dùng của những từ/cụm từ đó.
  - Không chỉ đơn thuần là học từ vựng đơn lẻ, sách còn cung cấp thêm cả các cách diễn đạt khác cho từng từ (paraphrasing). Ví dụ, từ “safe” có thể được diễn đạt lại bằng cụm “free from danger”,
  - Bên cạnh việc mở rộng nội dung câu theo nhiều cách dựa trên câu cho trước, sách còn cung cấp cả từ/cách diễn đạt trái nghĩa. Ví dụ, từ một câu:
  The government project supporting the arts was very successful.
  -> Cách diễn đạt sát nghĩa: The art show’s full booking was considered a goal accomplished by the government.
  -> Cách diễn đạt trái nghĩa: Some art projects are bound to fail because they are insufficiently budgeted by the government.
  - Bổ sung các từ vựng liên quan đến chủ đề, qua đó hỗ trợ việc học IELTS Listening và Reading, đồng thời tránh sử dụng từ trùng lặp khi trả lời trong phần thi IELTS Writing và Speaking.
  - Giúp người học sử dụng thành thạo từ vựng học thuật sau khi hoàn thành cuốn sách. Từ đó áp dụng từ vựng vào văn cảnh, tình huống cụ thể nhằm hiểu rõ cách vận dụng vào thực tế.
  2. Học xong sách thì người học nhận lại được gì?
  - Hiểu chính xác hơn về nghĩa của từ.
  - Trang bị vốn từ vựng chuyên biệt cho kỳ thi IELTS.
  - Học từ vựng nhưng còn biết cách triển khai ý để nói và viết. Cái này là điểm cộng cực kỳ lớn nên không cần phải mất công mua quá nhiều sách.`),
  new InitProduct("54", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/toeic/dbf1d4e714bac1486c05b16080603aff.JPG.webp", "Hackers TOEIC - Listenning", "89.000", `Đối tượng phù hợp nhất với cuốn sách là các bạn sinh viên sắp ra trường (cả sinh viên đại học và sinh viên cao đẳng) cũng như những người có mong muốn làm việc tại các tập đoàn có yếu tố nước ngoài.
  Khi học sách này, người học phải có sẵn nền tảng kiến thức đôi chút, người mất gốc mà học cuốn này thì khó theo được. Tuy nhiên, so với những người hướng tới điểm thi TOIEC cao trên 700 thì kiến thức cuốn này lại quá dễ. Trình độ thích hợp nhất là những người đang ở ngưỡng TOEIC 400-500 cần bứt phá lên TOIEC 450-650.
  Cuốn này chỉ tập trung vào kĩ năng nghe (phần 1 – 4) trong bài thi TOEIC, muốn học thêm kĩ năng đọc (phần 5 – 7) thì phải mua thêm cuốn Hackers TOEIC Start Reading. Nhưng nếu người học chỉ có nhu cầu nâng cao kĩ năng nghe thì cuốn này khá chi tiết (từ kiến thức đến bài tập áp dụng đều có cả, không chỉ sách dạy riêng ngữ pháp, cũng không phải sách luyện đề).
  Hackers TOEIC Start Listeing sẽ giúp cho người đọc:
  - Củng cố ngữ pháp và từ vựng cơ bản. Kiến thức được nâng dần theo cấp độ.
  - Bài tập được chia theo dạng bài chi tiết, đảm bảo hướng dẫn hầu như mọi dạng bài sẽ xuất hiện trong bài thi TOEIC Listening thực sự. Ví dụ Part 1 (phần 1) sẽ tập trung hướng dẫn cách làm theo dạng ảnh: ảnh chỉ có người, ảnh chỉ có vật, ảnh có cả người và vật,…
  - Cuốn sách cũng đồng thời chuẩn bị bài tập để người học có thể ứng dụng kiến thức đã học ngay lập tức.
  - Cung cấp đáp án kèm lời giải chi tiết. Phần này sẽ ở đằng sau sách cũng như ở ngay phần ví dụ trong từng dạng bài.
  - Hướng dẫn lộ trình học hiệu quả cho nhiều đối tượng với trình độ học khác nhau, xuất hiện ở phần đầu sách để giúp người học định hướng được ngay từ đầu.
  
  Để từ đó giúp người đọc:
  - Có kiến thức về từ vựng và ngữ pháp ở trình độ trung cấp, có thể thi được TOEIC 450-650.
  - Nắm được mẹo làm bài của 4 phần đầu (Listening) trong bài thi TOEIC.
  - Phát hiện và kịp thời tránh được những lỗi sai dễ mắc phải.`),
  new InitProduct("55", "ngoaingu", "tienganh", "./image/ngoaingu/tienganh/toeic/img530.u4939.d20170411.t095015.436881.jpg.webp", "Từ vựng luyện thi TOEIC", "94.000", `Từ vựng luyện thi TOEIC
  Cuốn sách được biên soạn nhằm cung cấp và bổ sung những từ vựng phổ biến nhất trong các bài thi TOEIC giúp người học có thể tăng điểm TOEIC, nhanh chóng nắm bắt được hệ thống các từ vựng, phát âm chuẩn trong kỳ thi TOEIC.`),
  new InitProduct("56", "ngoaingu", "tiengduc", "./image/ngoaingu/tiengduc/3cf0fd706974e1822aad8357563bb6ed.jpg.webp", "Các từ loại tiếng Đức", "105.000", `Mỗi dân tộc có một ngôn ngữ riêng, có ngôn ngữ nói, có ngôn ngữ viết. Tiếng Đức và tiếng Việt hoàn toàn khác nhau, nhưng ngôn ngữ giao tiêp hằng ngày của hai dân tộc chắc chắn cũng có những nét tương đồng. Đặc biệt trong ngôn ngữ giao tiếp dân gian, giao tiếp của tầng lớp trí thức, tầng lớp trên, ngôn ngữ của những người nghệ sĩ, chúng ta cũng tìm được nhiều đièu thú vị về tính tương đồng của chúng.
  Soạn giả cố gắng tập hợp những câu nói mang đặc tính nêu trên trong ngôn ngữ Đức. Hy vọng cuốn sách này bổ ích đối với những bạn đã và đang học tiếng Đức.`),
  new InitProduct("57", "ngoaingu", "tiengduc", "./image/ngoaingu/tiengduc/5ef373f702b1fb1315728074cb922f18.jpg.webp", "Tự học tiếng Đức qua hình", "99.000", `Sách cung cấp trên 8.000 từ, cụm từ cùng 3.000 hình màu minh họa. Các từ và cụm từ được sắp xếp theo chủ đề gắn liền với các lĩnh vực quan trọng trong cuộc sống.
  Thông qua những hình ảnh sinh động, bạn sẽ có thêm hứng thú và động lực trong quá trình học, nhờ đó bạn thuộc từ nhanh và nhớ từ lâu hơn.
  Tất cả các từ vựng đều có phần phiên âm để giúp bạn phát âm chính xác. Bên dưới phiên âm là chỗ trống để bạn tự viết nghĩa bằng ngôn ngữ mình thích.
  Mục Các cách diễn đạt cần thiết (Die Wichtigsten Sätze) trang bị cho bạn những mẫu câu quan trọng nhất, kèm theo đó là danh mục khoảng 2.000 động từ để hỗ trợ bạn đặt câu.
  Sách cũng trình bày ngắn gọn kiến thức ngữ pháp trong phần Tóm tắt ngữ pháp tiếng Đức (Deutsche Kurzgrammatik). Bảng chỉ mục ở cuối từ điển giúp bạn tra tìm từ vựng một cách nhanh chóng.
  Đây là tài liệu phù hợp với cả người mới bắt đầu học ngoại ngữ (trình độ A1) lẫn người ở trình độ cao hơn (B2).`),
  new InitProduct("58", "ngoaingu", "tiengduc", "./image/ngoaingu/tiengduc/52b36d18552f625f927f985dc8de573d.jpg.webp", "Tự học tiếng Đức cho người mới bắt đầu", "167.000", `Ưu điểm của giáo trình là giúp bạn làm quen với việc sử dụng tiếng Đức ngay từ lúc bắt đầu. Tuy nhiên, chúng tôi cũng cung cấp cho bạn các chú giải cần thiết về cách sử dụng từ, các điểm ngữ pháp quan trọng để bạn có thể tạo ra câu cần thiết trong tình huống khác nhau. Quyển sách tập trung vào 4 kỹ năng chính yếu: nghe, nói, đọc, viết. Nếu như bạn tự học, thì bạn lại càng phải luyện tập nghe băng nhiều hơn vì nó giúp cho bạn có dịp làm quen với cách sử dụng tiếng Đức của chính người bản xứ. 
  CẤU TRÚC CỦA GIÁO TRÌNH TỰ HỌC TIẾNG ĐỨC Quyển sách gồm 24 bài học cộng với phần tham khảo nằm cuối sách. Nhất thiết bạn phải sử dụng sách kèm theo băng để đạt được kết quả tốt nhất. Quyển sách cũng cung cấp cho bạn những lời hướng dẫn cần thiết, bài tập áp dụng và các ký hiệu quan trọng mà bạn cần chú ý cẩn thận. Trình tự của mỗi bài học Mỗi bài học được phân chia thành các mục được miêu tả bên dưới đây. Tuy nhiên có một số phần chúng tôi chú ý lập lại nhằm giúp người học hiểu rõ hơn một số điểm quan trọng của ngữ pháp tiếng Đức. Đây hoàn toàn không phải là sự trùng lặp.`),
  new InitProduct("59", "ngoaingu", "tiengduc", "./image/ngoaingu/tiengduc/a33d1ed5a19571bd342df067564aab07.jpg.webp", "Tiếng Đức dành cho học sinh", "78.000", `Tiếng Hàn Tổng Hợp sơ cấp 2 là cuốn sách tiếp theo dành cho người học tiếng Hàn trình độ sơ cấp.
  Sau khi hoàn thành các bài học ở cuốn Giáo trình tiếng Hàn tổng hợp dành cho người Việt Nam – Sơ cấp 1, người học sẽ tiếp tục nâng cao trình độ sơ cấp của mình với cuốn Giáo trình tiếng Hàn tổng hợp – Sơ cấp 2.
  Cuốn sách này đặt mục tiêu nâng cao năng lực giao tiếp tổng hợp cho người Việt học tiếng Hàn thông qua việc trau dồi các biểu hiện và cấu trúc cơ bản, luyện các bài tập ứng dụng với các hoạt động đa dạng, tìm hiểu văn hoá Hàn Quốc có trong các tình huống giao tiếp.`),
  new InitProduct("60", "ngoaingu", "tienghan", "./image/ngoaingu/tienghan/1cf20b680e19f017dd6e73ad5b28c2cd.jpg.webp", "Tiếng Hàn ứng dụng 1", "135.000", `Visang Education là tổ chức giáo dục và xuất bản hàng đầu Hàn Quốc. Visang chuyên xuất bản sách giáo khoa, các chương trình học trực tuyến và trực tiếp dành cho đối tượng phổ thông và người đi làm, thu hút hàng chục triệu học viên tại Hàn Quốc.
  Một trong những thương hiệu nổi tiếng của Visang là MasterKorean và MasterTOPIK được nhiều học viên Việt Nam biết đến là chương trình đào tạo số 1 về tiếng Hàn, luyện thi TOPIK (chứng chỉ đánh giá năng lực tiếng Hàn) được Chính phủ Hàn Quốc công nhận.
  Learn and use immediately Visang Korean textbooks (gọi tắt là Klass) – Tiếng Hàn ứng dụng học nhanh, thực hành ngay là bộ giáo trình gồm 4 cuốn nằm trong chương trình dạy học MasterKorean, đã được Việt hóa để dành riêng cho người học Việt Nam.
  Bộ sách được chia thành 2 trình độ: sơ cấp và trung cấp, mỗi trình độ gồm 2 cuốn với nhiều chủ đề đa dạng cùng hình ảnh sinh động, gắn liền với cuộc sống thường nhật.
  Learn and use immediately Visang Korean textbooks là bộ công cụ hoàn thiện giúp nâng cao khả năng nghe/nói tiếng Hàn thực hành ở trình độ Sơ cấp và Trung cấp thông qua các phần:
  - Từ vựng: Luyện nói tiếng Hàn thông qua việc sử dụng các từ vựng thông dụng, thường xuất hiện trong cuộc sống hàng ngày
  - Ngữ pháp: Bộ sách cung cấp các kiến thức ngữ pháp cơ bản do tổ chức TOPIK và Viện ngôn ngữ học quốc gia Hàn Quốc biên soạn
  - Luyện nói: Có nhiều dạng bài tập phong phú để rèn luyện kĩ năng nghe/nói phù hợp với từng trình độ
  - Luyện đọc: Ôn tập lại bài đọc có sử dụng từ vựng và ngữ pháp đã được nêu trong bài, nắm bắt các tình huống đa dạng trong sử dụng tiếng Hàn
  - Thực hành hội thoại thực tế thông qua các trò chơi và luyện tập với bạn bè
  - Tự đánh giá năng lực tiếng Hàn và ôn tập thường xuyên các kiến thức đã học
  Theo thống kê, hiện có hơn 5.200 công ty Hàn Quốc được thành lập với hơn 1,5 triệu nhân viên người Việt tại Việt Nam, tuy nhiên số lượng nhân viên thành thạo tiếng Hàn lại thiếu trầm trọng. Thời gian sắp tới, Master Korean sẽ liên kết với trang web tuyển dụng tìm kiếm việc làm Master Korean Jobs để kết nối người học tiếng Hàn có nhu cầu tìm việc làm với các doanh nghiệp Hàn Quốc đang có nhu cầu tuyển dụng nhân sự tại Việt Nam và Learn and use immediately Visang Korean textbooks chính là giáo trình được chọn cho chương trình này.`),
  new InitProduct("61", "ngoaingu", "tienghan", "./image/ngoaingu/tienghan/4bfb3597f8191dbd93ea5f8c1505826e.jpg.webp", "Ngữ pháp tiếng Hàn bỏ túi", "119.000", `“Ngữ pháp tiếng Hàn Bỏ Túi” là cuốn sách tuyệt vời cho người học tiếng Hàn
  Các ngữ pháp trong cẩm nang “Ngữ pháp tiếng Hàn Bỏ Túi” được sắp xếp theo thứ tự bảng chữ cái tiếng Hàn để tiện cho người sử dụng trong việc tra cứu. Mỗi ngữ pháp xuất hiện trong cuốn cẩm nang đều được liên kết với một ngữ pháp trong tiếng Việt, giúp người đọc có thể hình dung được ý nghĩa khái quát của ngữ pháp.
  Bên cạnh việc hướng dẫn sử dụng ngữ pháp và giải thích ý nghĩa, mục đích sử dụng cũng như chỉ rõ các tiếng huống mà ta có thể sử dụng ngữ pháp đó, chúng tôi cũng đưa ra các ví dụ cụ thể trong các ngữ cảnh phong phú, kèm theo dịch nghĩa tiếng Việt cho mỗi ngữ pháp.
  Nhờ cách biên soạn đầy đủ nhưng ngắn gọn này, người sử dụng cẩm nang sẽ chỉ mất vài giây để tìm kiếm một ngữ pháp, hiểu được ý nghĩa cũng như cách sử dụng của ngữ pháp; và ngay lập tức có thể áp dụng ngữ pháp này trong giao tiếp hay học tập và làm việc.
  Ngoài mục đích tra cứu, “Ngữ pháp tiếng Hàn Bỏ Túi” cũng hoàn toàn phù hợp để sử dụng như một cuốn giáo trình ngữ pháp bỏ túi: bạn có thể chọn lấy cho mình mỗi ngày một ngữ pháp bất kỳ trong cẩm nang để rèn luyện và trau dồi khả năng sử dụng tiếng Hàn linh hoạt của mình.
  Những người biên soạn cuốn “Ngữ pháp tiếng hàn Bỏ Túi”, hi vọng rằng đây có thể trở thành một cuốn sách hữu dụng cho quá trình học tập, nghiên cứu tiếng Hàn và luôn xuất hiện trong cặp sách của các bạn – những người đang theo học thứ ngôn ngữ này.`),
  new InitProduct("62", "ngoaingu", "tienghan", "./image/ngoaingu/tienghan/7e916c586b830f51dbee304cc77c521d.jpg.webp", "3500 từ vụng tiếng Hàn theo chủ đề", "354.000", `Bạn học thân mến, Để có thể học tiếng Hàn giỏi, trau dồi vốn từ vựng tiếng Hàn là yêu cầu bắt buộc với bất kì ai học ngôn ngữ này. Khi học tiếng Hàn, người học đối mặt với 2 phần bắt buộc và cần thiết để phục vụ mục tiêu thi chứng chỉ tiếng Hàn hay dùng tiếng Hàn thực tế. Đó chính là Ngữ pháp tiếng Hàn và từ vựng tiếng Hàn. Ngữ pháp tiếng Hàn với mỗi cấp độ khác nhau bạn sẽ học các ngữ pháp khác nhau và thường khó dần theo cấp độ. Các ngữ pháp được mở rộng và nâng cao hơn từ sơ cấp đến trung cao cấp. Tuy nhiên từ vựng tiếng Hàn lại rất đa dạng và thường rất khó nhớ. Các loại từ như từ đồng âm trái nghĩa, từ mượn gốc Hán, từ mượn gốc tiếng Anh đều gây khó khăn cho người học. Chưa kể đến tiếng lóng, các từ vựng tiếng địa phương mà người học có thể bắt gặp trong giao tiếp hàng ngày với người Hàn Quốc.
  Phân loại từ vựng theo chủ đề, học từ vựng theo cụm từ có liên quan đều là các công cụ hỗ trợ học từ vựng trong tiếng Hàn mà nhiều bạn đã áp dụng thành công. Và một số các phương pháp học từ vựng được đánh giá là có hiệu quả tốt nhất bao gồm:
  1. Chép đi chép lại nhiều lần Nhiều người cho rằng việc chép đi chép lại từ mới nhiều lần sẽ giúp họ học từ mới nhanh hơn. Đặc biệt cách học này thích hợp áp dụng trong các cuộc ôn luyện thi gấp rút, người học cần nhồi nhét một lượng từ lớn trong khoảng thời gian ngắn. Tuy nhiên nếu áp dụng phương pháp này, bạn nên kết hợp vừa chép vừa đọc, như vậy thời gian nhớ sẽ duy trì được lâu hơn.
  2. Học tiếng Hàn theo các cặp từ có liên quan Liên quan ở đây bao gồm các từ đồng nghĩa, từ trái nghĩa hay các từ thường xuất hiện với nhau. Đặc biệt là các cụm từ có gốc từ giống nhau. Ví dụ như các cặp tính từ trái nghĩa như 작다 nhỏ ><크다 to; 적다 ít ><많다 nhiều; 빠르다 nhanh ><느리다 chậ Với các từ có liên quan như từ vựng theo chủ đề, bạn có thể áp dụng cách vẽ sơ đồ cây để học. Ví dụ như với chủ đề là Trường học 학교 bạn chia nhỏ các nội dung hay gặp như các loại trường học, lớp học, các môn học, dụng cụ học tập.
  3. Viết flashcash học từ mới tiếng Hàn Thông thường đây là cách tốn thời gian nhưng hiệu quả tương đối dài, bạn có thể học mọi nơi mọi lúc. Hơn nữa, sau này khi quên bạn có thể đem ra để ôn lại. Chỉ mất một khoảng thời gian ngắn là bạn đã nhớ lại toàn bộ những từ mới mà mình từng học
  4. Dán giấy nhớ mọi nơi để học tiếng Hàn Có lẽ đây là cách học mà bất kì ai đã từng làm, bạn có thể ghi lại những điều cần làm, phải làm, những chú ý của mình vào các mảnh giấy nhỏ, đa sắc màu và dán ở những nơi bạn thường để ý như tủ lạnh, bàn học, trước mặt tivi, tường cầu miễn sao những nơi đó bạn thường đi qua. Mỗi lần vô tình nhìn thấy là bạn đã tự nhiên học từ vựng mà không hề tốn thời gian, công sức.
  5. Học từ vựng tiếng Hàn online Đã bao giờ bạn tìm kiếm các phần mềm, ứng dụng học tiếng Hàn ngay trên điện thoại thông minh hay máy tính của mình. Các nhà cung cấp đã chia sẻ rất nhiều phần mềm học tiếng Hàn trong đó thu hút nhất là các ứng dụng học từ vựng cực kì thú vị. Bạn có thể học từ mới, kiểm tra khả năng nhớ từ mới hàng ngày, hàng tuần. Chúc các bạn ngày càng yêu thích bộ môn tiếng Hàn!`),
  new InitProduct("63", "ngoaingu", "tienghan", "./image/ngoaingu/tienghan/492f59f9e27ce27a247e1ffccbf0112f.jpg.webp", "Tiếng Hàn tổng hợp 1", "259.000"),
  new InitProduct("64", "ngoaingu", "tienghan", "./image/ngoaingu/tienghan/f48f401a5575c1719b5bd45b2881b127.jpg.webp", "Tiếng Hàn tổng hợp 2", "259.000"),
  new InitProduct("65", "ngoaingu", "tiengnhat", "./image/ngoaingu/tiengnhat/88a55d994707a03efe9c2096fb20eb6b.jpg.webp", "Tự học tiếng Nhật chữ Kanji", "187.000", `Tiếng Nhật hiện nay đang là một trong những ngôn ngữ được học nhiều nhất tại Việt Nam. Có lẽ với nhưng ai đã và đang học tiếng Nhật thì đều hiểu rằng chữ Kanji là một phần không thể thiếu với người học tiếng Nhật.
  Kanji là một trong bốn hệ chữ của tiếng Nhật với một lượng lớn từ mới khổng lồ có gốc mượn từ chữ Hán hoặc do người Nhật sáng tạo ra, nó chiếm khoảng 70% lượng từ vựng của tiếng Nhật.
  Hiện nay ở Nhật, tên các nhà ga, cửa hàng hoặc các biển chỉ dẫn hầu hết đều viết bằng chữ Kanji, bởi vậy học chữ Kanji là việc thiết yếu nếu bạn muốn du lịch, hoặc sinh sống ở Nhật.`),
  new InitProduct("66", "ngoaingu", "tiengnhat", "./image/ngoaingu/tiengnhat/ac2701384f647902a5a4534ee7274aac.jpg.webp", "Từ vựng tiếng Nhật chủ đề Xây dựng & thiết bị", "69.000", `Nằm trong bộ "Tiếng Nhật tại hiện trường lao động_Sổ tay từ vựng". Tập hợp các từ vựng tại hiện trường làm việc cần thiết dành cho người lao động nước ngoài làm việc tại Nhật Bản và dành cho việc đào tạo thực tập sinh kỹ năng, tu nghiệp Bao gồm: - 136 từ vựng cơ bản - 164 từ vựng chuyên ngành Xây dựng - Thiết bị. Sử dụng các mẫu câu trong giáo trình "Tiếng Nhật cho mọi người_Sơ cấp 1". Các tài liệu bổ trợ có thể tải miễn phí trên website`),
  new InitProduct("67", "ngoaingu", "tiengnhat", "./image/ngoaingu/tiengnhat/c26e83c25d7ec10267c74bb116760966.jpg.webp", "Từ vựng tiếng Nhật qua hội thoại giao tiếp", "104.000", `Bạn yêu thích văn hóa Nhật Bản, yêu thích các bộ truyện Manga, Anime hay đơn giản là muốn đi du lịch tới xứ sở hoa anh đào xinh đẹp? Sẽ thật tuyệt vời hơn nếu như chúng ta có thể hiểu về ngôn ngữ của đất nước này.
  Tiếng Nhật hiện tại được đào tạo khá phổ biến ở Việt Nam bởi sự hấp dẫn từ những cơ hội làm việc, hợp tác cùng các đối tác Nhật Bản giúp cho chúng ta có được mức lương cao, chế độ đãi ngộ tốt và môi trường làm việc chuyên nghiệp. Tuy nhiên, là một trong số những ngôn ngữ khó nhất thế giới, tiếng Nhật vẫn còn là một trở ngại lớn với người Việt.
  Những người bắt đầu học tiếng Nhật sẽ mất một khoảng thời gian khá dài để có thể làm quen với mặt chữ và cách phát âm trong tiếng Nhật, nhiều người không đủ kiên trì sẽ bỏ cuộc ngay từ khi học chữ, cũng có những người kiên trì học tiếp nhưng học với một tâm thế mệt mỏi và nhàm chán khiến cho thời gian học tiếng Nhật kéo dài và không hiệu quả.
  Trở ngại lớn nhất khi học tiếng Nhật của người Việt là từ vựng. Từ vựng trong tiếng Nhật mang tính chất tượng hình khác hoàn toàn so với tiếng Việt. Vì vậy, những người bắt đầu học tiếng Nhật sẽ cảm thấy vô cùng khó nhớ và khó viết.
  Vậy làm thế nào để học tiếng Nhật nhanh chóng và hiệu quả?
  Kiên trì và nghiêm túc là điều kiện cần để bạn có thể học tiếng Nhật thành công, bên cạnh đó bạn cần thêm một điều kiện đủ nữa là chọn đúng tài liệu để học. Và nếu bạn đã có hai điều này thì thật tuyệt vời, bạn đã vượt qua thành công ⅓ con đường chinh phục tiếng Nhật rồi đó.
  Hiểu được điều đó, ban biên soạn Saiwai kết hợp với chủ biên Hoàng Quỳnh đã dày Công nghiên cứu và biên soạn BỘ SÁCH DÀNH CHO NGƯỜI TỰ HỌC TIẾNG NHẬT tại nhà hoặc làm tài liệu tham khảo cho các bạn đang theo học các lớp tiếng Nhật. Bộ sách gồm có 4 cuốn: Hội thoại – Ngữ pháp - Từ vựng - Tập viết. Mỗi cuốn bao gồm 18 bài học cung cấp cho các bạn lượng kiến thức giao tiếp trong rất nhiều những tình huống quen thuộc của đời sống hàng ngày.
  Với 18 bài học là từng chủ đề giao tiếp thông dụng nhất trong cuộc sống, cuốn “Học Từ vựng tiếng Nhật qua hội thoại giao tiếp” trước hết giúp bạn nắm được những từ vựng cơ bản nhất trong giao tiếp tiếng Nhật từ loại từ, ngữ nghĩa đến cách đọc theo file âm thanh (dùng kết hợp với app trên điện thoại), tiếp theo là giúp bạn hiểu, luyện tập và nâng cao khả năng sử dụng tiếng Nhật một cách hứng thú và hiệu quả qua các bài tập bổ trợ.
  Cuốn sách được thiết kế sinh động, dễ hiểu, dễ ghi nhớ và ứng dụng giúp bạn:
  • Nắm chắc các từ vựng tiếng Nhật thông dụng nhất trong cuộc sống hàng ngày
  • Hướng dẫn cách sử dụng từ vựng tiếng Nhật vô cùng chi tiết với nhiều câu ví dụ tương ứng với các tình huống kèm theo hình ảnh minh họa sinh động
  • Sách có hỗ trợ app trên điện thoại giúp bạn nghe và phát âm chuẩn như người Nhật
  • Bài tập ứng dụng giúp củng cố kiến thức đa dạng, phong phú.`),
  new InitProduct("68", "ngoaingu", "tiengnhat", "./image/ngoaingu/tiengnhat/f7c85fa7fc717d35813550a672f17eae.jpg.webp", "Từ vựng tiếng Nhật chủ đề Điều dưỡng", "91.000"),
  new InitProduct("69", "ngoaingu", "tiengphap", "./image/ngoaingu/tiengphap/17ee7f67345552c74d508332d0651f24.jpg.webp", "Sử dụng động từ tiếng Pháp", "129.000", `Sử Dụng Động Từ Tiếng Pháp
  Quyển sách Sử Dụng Động Từ Tiếng Pháp được biên soạn nhằm mục đích giúp học sinh và học viên có được tài liệu tham khảo với phương pháp đơn giản, dễ hiểu và tra cứu nhanh. 
  Nhận thức được một trong những phức tạp không nhỏ của người học Tiếng Pháp  từ trước đến nay, đặc biệt về động từ tiếng Pháp, để giúp người học có thể nắm vững được kiến thức cũng như cách dùng cho có hệ thống và dễ nhớ, tài liệu này trình bày theo phương thức sau:
  - Các dạng động từ
  - Cách chia động từ
  - Các thì động từ
  - Các loại câu, như câu điều kiện, bị động...
  - Và bảng với 93 động từ mẫu trong tài liệu này, chúng ta có thể dùng "Bảng chỉ mục" ở cuối sách để chia được hơn 2000 động từ quy tắc và bất quy tắc một cách dễ dàng nhanh chóng.`),
  new InitProduct("70", "ngoaingu", "tiengphap", "./image/ngoaingu/tiengphap/75f845bbde92b16ef0f8d978a3057b95.jpg.webp", "Tự học tiếng Pháp trong 24 giờ", "147.000", `Mục đích chính của “Tự học tiếng Tây Ban Nha trong 24 giờ” là giúp bạn có thể học ngôn ngữ này 1 cách nhanh chóng và có hiệu quả cao. Nếu bạn sẵn lòng dành 24 tiếng đồng hồ trong quỹ thời gian của bạn để học ngữ pháp, từ vựng, và các cụm từ được trình bày trong cuốn sách này, bạn sẽ thấy rằng bạn có thể hiểu và giao tiếp tiếng Tây Ban Nha trong các tình huống thường ngày. Bạn sẽ thấy tự tin hơn khi gặp thử thách và hoàn thành mục đích 1 cách dễ dàng và nhanh chóng.`),
  new InitProduct("71", "ngoaingu", "tiengphap", "./image/ngoaingu/tiengphap/0893125eed15b6560dc282b7aeac4bb5.jpg.webp", "Ngữ pháp tiếng Pháp 80 chủ đề", "206.000", `Ngữ pháp luôn là nền tảng cho việc học bất kỳ ngôn ngữ nào. Vì vậy, nhằm đáp ứng nhu cầu của các học viên mới bắt đầu học tiếng Pháp, cũng như những người mới tiếp xúc với Pháp ngữ cần có một tài liệu để tham khảo, chúng tôi xin trân trọng giới thiệu cuốn sách Ngữ pháp tiếng Pháp thực hành trong 80 chủ đề.
  "Ngữ Pháp Tiếng Pháp Thực Hành Trong 80 Chủ Đề" đáp ứng nhu cầu của người học tiếng Pháp ở trình độ sơ cấp. Tất cả những điểm ngữ pháp cần cho người mới bắt đầu học tiếng Pháp đều được đề cập trong sá
  Sách được trình bày dẽ hiểu và sống động. Đi kèm với những hình thức ngữ pháp và cách sử dụng là nhiều ví dụ minh hoạ những hoạt đọng trong cuộc sống hàng ngày, từ dạng câu đơn đến câu phức. Thêm vào đó các bài tập thực hành sẽ là dịp để các học viên tự thẩm định mức hiểu bài của mình. Ngoài ra một số động từ và cấu trúc động từ cũng được biên soạn để giúp các học viên có thể luyện tập với các đọng từ thông dụng đó.`),
  new InitProduct("72", "ngoaingu", "tiengthai", "./image/ngoaingu/tiengthai/df096b4fb0ffdc096a497abae782ce9b.jpg.webp", "Cẩm nang tự học tiếng Thái", "244.000", `Lời giới thiệu:
  Nhằm đáp ứng nhu cầu học tập và sử dụng tiếng Thái của bạn đọc, chúng tôi đã biên soạn quyển sách: “Cẩm nang hướng dẫn tự học tiếng Thái – trình độ sơ cấp – trung cấp”.
  Quyển sách này gồm có 3 phần và một phụ lục, với các nội dung cụ thể như sau:
  - Phần 1: Phát âm cơ bản trong tiếng Thái. Phần này trình bày chi tiết về cách phát âm, cách viết, phiên âm và ý nghĩa của các phụ âm cũng như nguyên âm.
  - Phần 2: 1.200 câu đàm thoại tiếng Thái thường dùng. Phần này gồm có 12 chủ đề với nhiều đoạn hội thoại thể hiện rất nhiều tình huống thường gặp trong cuộc sống như chào hỏi khi gặp gỡ, hỏi về món ăn, gọi món ăn, nói về gia đình, hỏi giờ, mua sắm, hỏi thăm sức khỏe, miêu tả, nói về thể thao, Đặc biệt, mỗi chủ đề đều có trình bày ngữ pháp, các mẫu câu thực hành cũng như các lưu ý về văn hóa để sử dụng từ ngữ cho phù hợp.
  - Phần 3: 2.500 từ vựng tiếng Thái thông dụng theo chủ đề. Phần này gồm có tất cả 50 chủ đề với rất nhiều từ vựng thông dụng có kèm phiên âm và ý nghĩ, với các chủ đề cụ thể như: thói quen hằng ngày, cơ thể người, gia đình, nghề nghiệp, hình dáng con người, đất nước, cảm xúc, sở thích, trường học,
  - Phụ lục: Tập viết phụ âm tiếng Thái. Phần này nhằm giúp bạn luyện viết một số âm cơ bản trong tiếng Thái.
  Ưu điểm của quyển sách này là nội dung súc tích, chủ đề đa dạng và cùng với các mẫu câu được tuyển chọn hoàn toàn xuất phát từ các tình huống giao tiếp thực tế và được trình bày rõ ràng, dễ hiểu. Chúng tôi tin rằng quyển sách này sẽ giúp ích nhiều cho bạn đọc trong quá trình học sử dụng tiếng Thái.`),
  new InitProduct("73", "ngoaingu", "tiengthai", "./image/ngoaingu/tiengthai/f8fab0792733082cc068bb1ae12c29a2.jpg.webp", "Tự học tiếng Thái cho người mới bắt đầu", "193.000", `Sách chủ yếu cung cấp đến các bạn mới bắt đầu học các từ vựng và ngữ pháp cơ bản để giao tiếp với người Thái trong tình huống cụ thể, thông dụng. Một điều quan trọng nữa là cuốn sách này giảng dạy kỹ lưỡng hệ thống chữ viết của tiếng Thái giúp các bạn học có cơ sở học thêm kiến thức sau này.
  Hy vọng cuốn sách sẽ giúp ích được nhiều cho các bạn trong quá trình tự học tiếng Thái.`),
  new InitProduct("74", "ngoaingu", "tiengthai", "./image/ngoaingu/tiengthai/f36007088c35cdce5d47cba5f42927ce.png.webp", "Thực hành tiếng Thái", "151.000", `Ngôn ngữ Thái có cấu trúc văn phạm đơn giản, rất ít về các hình thức, cách dùng hình ảnh sống động để hình thành những danh từ tích luỹ từ những từ khác để mô tả đồ vật.
  Sách có một kho thành ngữ phong phú, chính những đặc tính độc đáo nhất này làm cho tiếng Thái dễ học.`),
  new InitProduct("75", "ngoaingu", "tiengtrung", "./image/ngoaingu/tiengtrung/13f106fdaf854f78693173159a4b676a.jpg.webp", "Tự học tiếng Trung cho người mới bắt đầu", "88.000", `Tiếng Trung chính là chìa khóa mở cánh cửa bước vào đất nước với nền văn hóa lâu đời và phức tạp nhất thế giới. Với lịch sử lâu đời như vậy, tiếng Trung không phải là một ngôn ngữ quá khó nhưng cũng không hề dễ dàng. Làm thế nào để tự học tiếng Trung cho người mới bắt đầu? Cuốn sách cùng tên: “Tự học tiếng trung cho người mới bắt đầu” chính là câu trả lời cho câu hỏi đó.
  Văn hóa Trung Quốc đã để lại ảnh hưởng sâu sắc đến Việt Nam hàng trăm năm nay từ từ mượn Hán Việt, đến phim ảnh, ca nhạc, hàng hóa dịch vụ và văn hóa. Đó chính là lợi thế vô cùng lớn của người Việt khi học tiếng Trung. Vì vậy tại sao chúng ta không học tiếng Trung để mở ra cả một bầu trời cơ hội:
  Hàng trăm ngàn cơ hội việc làm tại các tập đoàn công ty nhà đầu tư Trung Quốc
  Hoạt động thương mại giữa hai nước Việt Trung cũng như của Trung quốc với thế giới chưa bao giờ hết nóng, biết tiếng Trung sẽ là một lợi thế vô cùng lớn giúp bạn thực hiện công việc kinh doanh được thuận lợi.
  Học tiếng Trung giúp phục vụ công tác nghiên cứu văn hóa, ngôn ngữ.
  Hay đơn giản bạn muốn du lịch trải nghiệm, ở một đất nước không chuộng tiếng Anh, không sử dụng google, không nói được tiếng bản ngữ sẽ vô cùng khó khăn.
  Tiếng Trung không hề khó nhưng không dễ dàng càng không thể đọc thông viết thạo nói lưu loát trong một vài năm vì vậy cần kiên trì và có cách tiếp cận ban đầu hợp lý.
  Khi bắt đầu tìm hiểu về tiếng Trung, bạn sẽ gặp phải vô vàn vấn đề:
  Bạn muốn học tiếng Trung nhưng không biết bắt đầu từ đâu
  Bạn đã học tiếng Trung nhưng chưa vững nền tảng muốn xây dựng và hệ thống lại
  Bạn rất nghiêm túc tự học tiếng Trung từ cơ bản nhưng không biết phương pháp nào, giáo trình nào là phù hợp và lộ trình như thế nào
  Dù rất tâm huyết nhưng công việc và cuộc sống bận rộn hàng ngày, bạn chỉ có thể tranh thủ học từng đoạn ngắn trong thời gian rảnh rỗi ít ỏi.
  Để có một góc nhìn toàn diện về tiếng Trung mời tham khảo cuốn sách “Tự học tiếng Trung cho người mới bắt đầu”
  Cuốn sách Tự học tiếng Trung cho người mới bắt đầu chính là:
  Bước khởi đầu đơn giản tạo dựng niềm tin hứng thú học tập cho người học
  Một cuốn sách tổng hợp các kiến thức quan trọng cơ bản nhất
  Có thể tranh thủ học mọi lúc mọi nơi
  Là bước đệm quan trọng để người học tự tin đào sâu nghiên cứu thứ ngôn ngữ thú vị này
  Tự học tiếng Trung cho người mới bắt đầu bao gồm 16 bài với các mục: Hội thoại, từ vựng, giải thích từ và ngữ pháp đơn giản trong khẩu ngữ Trung quốc – các chủ đề quen thuộc và có tính ứng dụng rất lớn trong đời sống hàng ngày cũng như giao lưu du lịch.
  Phần 1 của cuốn sách hướng dẫn bạn học về các nguyên âm, phụ âm trong tiếng Trung. Các nguyên âm và phụ âm được trình bày khoa học và giải thích dễ hiểu dễ ghi nhớ. Bên cạnh đó là hướng dẫn cách viết phiên âm la tinh để người học có thể dễ dàng đọc nói khi cần và hướng dẫn chi tiết thanh điệu và cách biến điệu trong chữ Hán.
  Ngoài ra, cuốn sách có sơ đồ các cơ quan phát âm hữu ích cho việc tự luyện phát âm.
  Bước khởi đầu nhẹ nhàng gây dựng hứng thú cho người học
  Cuốn sách không đi vào các phần lý thuyết phức tạp mà cung cấp các mẫu câu thực tế hay sử dụng và file âm thanh đi kèm. Việc nhìn và nghe các mẫu câu lặp đi lặp lại giúp người học tắm trong ngôn ngữ và có cách tư duy theo ngôn ngữ mới khơi gợi sự hứng thú với việc học tập.
  Một cuốn sách tổng hợp các kiến thức cơ bản và quan trọng nhất
  Với sự tổng hợp kiến thức từ các nguyên âm phụ âm, các hướng dẫn chi tiết thanh điệu và cách biến điệu trong chữ Hán, 16 bài hội thoại quan trọng là một sự tổng hợp kiến thức cơ bản và quan trọng nhất dành cho người học.
  Sở hữu ngay cuốn sách Tự học tiếng Trung cho người mới bắt đầu để có bước khởi đầu nhẹ nhàng tạo dựng hứng thú học tập, rèn luyện các kiến thức nền tảng cơ bản và quan trọng nhất. Bạn có thể sẵn sàng chinh phục tiếng Trung ngay sau khi học xong cuốn sách này.
  Dễ học dễ nhớ
  Phiên âm quốc tế và phiên âm tiếng Việt chi tiết cho từng câu hội thoại giúp người học dễ dàng ghi nhớ và đọc.
  Giải thích chi tiết những phần khó
  Ngoài nội dung bài học và hội thoại, cuốn sách giải thích chi tiết những trường hợp đặc biệt giúp người học tổng hợp kiến thức và tránh sai khi dùng từ.
  Học theo công nghệ mới`),
  new InitProduct("76", "ngoaingu", "tiengtrung", "./image/ngoaingu/tiengtrung/98ca02f7ed7ddfe7fe78bff8ed614d5b.jpg.webp", "Tiếng Trung dành cho người đi du lịch", "71.000", `Cuốn Tiếng Trung Dành Cho Người Đi Du Lịch bao gồm các chủ đề thiết thực và liên quan đến đời sống hàng ngày. Chủ đề được thiết kế một cách sáng tạo và đem lại hiệu quả lớn cho người học. Các bạn sẽ được học từ những chủ đề đơn giản và thông dụng nhất liên quan tới việc đi du lịch. 
  Cuốn  này được chia ra làm các mục chính là những câu nói thông dụng theo chủ đề, bài đọc kết hợp nghe, từ vựng. 
  Cuốn sách gồm 3 phần:
  Phần 1: Các mẫu câu hội thoại thông dụng khi đi du lịch.
  Phần 2: Các mẫu hội thoại thông dụng.
  Phần 3: Các từ vựng khi đi du lịch thường dùng nhất.
  Nhằm hỗ trợ bạn học một cách tốt nhất trong quá trình học cuốn sách này, chúng tôi đính kèm trên bìa sách link tải đĩa CD các bài học. Các bạn có thể sử dụng điện thoại smartphone để quét mã QR và tải các bài học một cách nhanh chóng và thuận tiện.`),
  new InitProduct("77", "ngoaingu", "tiengtrung", "./image/ngoaingu/tiengtrung/f3af494e6f9893486cfed7482523777a.gif.webp", "Tập viết chữ Hán", "124.000", `Chúng ta đều biết, chữ Hán thuộc hệ chữ tượng hình, nó khác hoàn toàn với hệ chữ Latinh mà người Việt chúng ta đang sử dụng. Bởi vậy, hiện nay, đa số những người học tiếng Trung Quốc nói chung đều có tâm lý sợ học chữ Hán, đặc biệt là với những người mới bắt đầu.
     Cuốn Tập viết chữ Hán - Dựa theo giáo trình Hán ngữ phiên bản mới được biên soạn để giúp đỡ các bạn học tốt chữ Hán ngay từ trong những giai đoạn ban đầu.
  Cuốn sách này được biên soạn với nội dung bám sát giáo trình Hán ngữ sơ cấp phiên bản mới. Các chữ Hán được soạn ra từ hệ thống từ mới của từng bài, đi kèm phiên âm, nghĩa Hán Việt và nghĩa gốc của từng từ. Phần tập viết phiên âm và tập viết các chữ Hán theo thứ tự từng nét một sẽ giúp các bạn học và nhớ chữ Hán lâu hơn.
  Nội dung của sách được xây dựng theo 4 phần chính:
     Phần 1: Danh mục bộ thủ chữ Hán: cung cấp cho các bạn danh mục 214 bộ thủ chữ Hán, không chỉ bao gồm cách viết, tên bộ, phiên âm và ý nghĩa tiếng Việt.
  Phần 2: Kết cấu chữ Hán
  Phần 3: Bao gồm 40 bài tập viết chữ hán
     Mỗi bài sẽ giới thiệu cho bạn từ 2-6 bộ thủ mới (bao gồm âm hán Việt, cách viết chữ từng nét,). Tiếp đó là các cụm từ mới có bộ thủ đó bao gồm cả phiên âm và nghĩa tiếng việt chi tiết giúp các bạn luyện tập và ghi nhớ bộ thủ, đồng thời thu thập thêm nhiều từ vựng mới.
   Phần 4: 500 chữ Hán cơ bản: Tại phần này sẽ cung cấp cho bạn 500 chữ Hán cơ bản gồm cả chữ phồn thể và giản thể , xếp thứ tự theo phiên âm Pinyin. Mỗi chứ Hán được giải thích rõ về HÌNH-ÂM-NGHĨA và cách viết (tả pháp).
     Cuốn sách sẽ là người bạn đồng hành thân thiết, hỗ trợ đắc lực cho các bạn yêu thích và muốn học tốt tiếng Trung`),
  new InitProduct("78", "ngoaingu", "tiengtrung", "./image/ngoaingu/tiengtrung/ngu-phap-tieng-han-thuc-hanh-1-150k.u547.d20161001.t170135.34480.png.webp", "Ngữ pháp tiếng Hán", "104.000", `Ngữ Pháp Tiếng Hán Thực Hành (Tập 1) - Trình Độ Sơ Cấp - Trung Cấp
  Giáo trình Ngữ pháp tiếng Hán thực hành chỉ tập trung giới thiệu với người học những kiến thức cơ sở cơ bản nhất.
  Cuốn Ngữ pháp tiếng Hán thực hành được chia thành 2 tập:
  Tập 1 ngoài chương 1 giới thiệu chung về ngữ pháp tiếng Hán hiện đại, 4 chương còn lại tập trung giới thiệu vào các nội dung: Từ loại - Cụm từ - Thành phần câu - Câu đơn.
  Tập 2 có 5 chương, giới thiệu về các nội dung:
  1) Chương I: Giới thiệu
  2) Chương II: Từ loại
  3) Chương III:Cụm từ
  4) Chương IV: Thành phần câu
  5) Chương V: Câu đơn
  Cuốn Ngữ pháp tiếng Hán thực hành sẽ giúp người học có cái nhìn tổng quan hơn về hệ thống Ngữ pháp tiếng Hán để người học có thể lấy đó làm cơ sở thực hành tốt các kỹ năng nghe - nói - đọc - viết và dịch được chuẩn xác.`),
  new InitProduct("79", "phapluat", "",  "./image/chinhtri-luatphap/cacluat/5273c55d8d45977b9ec27244f0007da4.jpg.webp", "Cẩm nang pháp luật dành cho doanh nghiệp", "140.000", `Mô tả sản phẩm: Hệ thống pháp luật trong doanh nghiệp ngày càng hoàn thiện và là cơ sở pháp lý bền vững để các doanh nghiệp trong quá trình hoạt động phải luôn luôn thực hiện đúng như quy định về điều hành, quản lý doanh nghiệp; góp vốn, đầu tư, chuyển nhượng vốn, chính sách về tiền lương, bảo hiểm; các loại thuế; sử dụng hóa đơn, kiểm tra, thanh tra các hoạt động trong doanh nghiệp …
  Để giúp bạn đọc nắm vững các nghiệp vụ theo đúng quy định, ban biên tập đã tập hợp, hoàn thiện các nội dung mới đáp ứng được mục đích tra cứu trong quá trình làm việc tại các cơ quan, doanh nghiệp.`),
  new InitProduct("80", "phapluat", "",  "./image/chinhtri-luatphap/cacluat/47439b4e82e4a65dd7cab7d7e6ef75a3.jpg.webp", "Bộ luật dân sự năm 2015", "122.000", `Bộ luật dân sự năm 2015 được Quốc Hội nước Cộng Hòa xã hội chủ nghĩa Việt Nam khóa XIII, ký họp thứ 10 thông qua ngày 24/11/2015, có hiệu lực thi hành từ ngày 01/01/2017.
  Để triển khai thi hành Bộ Luật Dân Sự, Chính phủ đã ban hành các nghị định hướng dẫn thi hành. Nhằm cung cấp đến bạn đọc những quy định pháp luật về luật dân sự hiện hành và phục vụ tìm hiểu, thực thi pháp luật dân sự hiểu quả. Nhà Xuất Bản Chính Trị Quốc Gia Sự Thật xuất bản cuốn sách: Bộ Luật Dân Sự Năm 2015 Và Các Nghị Định Hướng Dẫn Thi Hành.`),
  new InitProduct("81", "phapluat", "",  "./image/chinhtri-luatphap/cacluat/a3643d7af474ed84fa8821f9d5662ef8.jpg.webp", "Pháp luật về hợp đồng", "89.000", `“PHÁP LUẬT VỀ HỢP ĐỒNG – CÁC VẤN ĐỀ PHÁP LÝ CƠ BẢN”
  Cuốn sách đầu tiên nghiên cứu một cách có hệ thống các vấn đề pháp luật về hợp đồng của Việt Nam từ góc độ lý thuyết và thực tiễn, tập trung vào các giao dịch tài chính và mua bán doanh nghiệp có yếu tố nước ngoài.
  Đây là cuốn sách đầy đủ nhất liên quan đến pháp luật về hợp đồng. Trải dài trong gần 900 trang, cuốn sách phân tích các vấn đề liên quan đến (i) giao kết hợp đồng; (ii) hiệu lực hợp đồng; (iii) nội dung hợp đồng; (iv) vi phạm hợp đồng và biện pháp khắc phục; (v) miễn trừ
  trách nhiệm; (vi) chuyển giao quyền và nghĩa vụ; (vii) quyền của bên thứ ba trong hợp đồng vì lợi ích của bên thứ ba; và (viii) nguyên tắc chọn pháp luật áp dụng và cơ quan giải quyết tranh chấp hợp đồng.
  Đây là cuốn sách duy nhất trình bày các vấn đề liên quan đến pháp luật về hợp đồng cả từ góc độ lý thuyết và thực tế. Ngoài việc phân tích các quy định của các văn bản pháp luật, cuốn sách cũng phân tích các án lệ và bản án.
  Đây là cuốn sách giúp các luật sư hành nghề có thể tham khảo khi tư vấn trong các giao dịch thương mại có yếu tố nước ngoài. Cuốn sách tập trung phân tích phạm vi mà các bên có thể thỏa thuận trong hợp đồng để phân bố rủi ro.
  Đây là cuốn sách duy nhất có hệ thống tra cứu đầy đủ giúp người đọc tiện tra cứu. Cuốn sách có (i) bảng tra cứu từ khóa; (ii) bảng tra cứu án lệ, bản án và quyết định; và (iii) danh sách các tài liệu trích dẫn.`),
  new InitProduct("82", "phapluat", "",  "./image/chinhtri-luatphap/cacluat/bc86d098b7be5a20e0cd1a207ba06d5b.jpg.webp", "Bộ luật tố tụng hình sự", "118.000", `Luật này đã được Quốc hội nước Cộng hoà xã hội chủ nghĩa Việt Nam thông qua tại kỳ họp thứ 10, ngày 27 tháng 11 năm 2015 và có hiệu lực thi hành từ ngày 01 tháng 7 năm 2016.

  Bộ luật tố tụng hình sự quy định trình tự, thủ tục tiếp nhận, giải quyết nguồn tin về tội phạm, khởi tố, điều tra, truy tố, xét xử và một số thủ tục thi hành án hình sự; nhiệm vụ, quyền hạn và mối quan hệ giữa các cơ quan có thẩm quyền tiến hành tố tụng; nhiệm vụ, quyền hạn và trách nhiệm của người có thẩm quyền tiến hành tố tụng; quyền và nghĩa vụ của người tham gia tố tụng, cơ quan, tổ chức, cá nhân; hợp tác quốc tế trong tố tụng hình sự.
  Điều 2. Nhiệm vụ của Bộ luật tố tụng hình sự
  
  Bộ luật tố tụng hình sự có nhiệm vụ bảo đảm phát hiện chính xác và xử lý công minh, kịp thời mọi hành vi phạm tội, phòng ngừa, ngăn chặn tội phạm, không để lọt tội phạm, không làm oan người vô tội; góp phần bảo vệ công lý, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân, giáo dục mọi người ý thức tuân theo pháp luật, đấu tranh phòng ngừa và chống tội phạm.`),
  new InitProduct("83", "banchay", "", "./image/banchay/fb7e11e69c99501fa83ff1098d7cd694.jpg.webp", "Thức tỉnh mục đích sống", "77.000", `Chuyển hóa tâm thức con người là trọng tâm của những điều Eckhart Tolle đề cập trong quyển sách nổi tiếng A New Earth - Thức Tỉnh Mục Đích Sống này. Theo ông, sự thức tỉnh là bước kế tiếp sẽ xảy ra trong quá trình phát triển tâm thức của nhân loại. Nhân loại sẽ bước sang một giai đoạn mà sự thức tỉnh trong tâm hồn sẽ tạo ra sự tự do và niềm hạnh phúc miên viễn trong mỗi con người và trên toàn thế giới.
  "Thức tỉnh mục đích sống" đã cộng hưởng thật sâu sắc với những điều bên trong tôi và giúp tôi thay đổi nhận thức về bản thân và về cả mọi điều"`),
  new InitProduct("84", "banchay", "", "./image/banchay/so-do-chuoi-phan-ung-hoa-huu--co-01.u2566.d20170626.t141548.452580.jpg.webp", "Hóa học hữu cơ THPT", "102.000", `Hóa học là ngành khoa học nghiên cứu về các chất và sự biến đổi của các chất.  Muốn chuyển chất này thành chất khác ta cho các chất tác dụng với nhau trong những điều kiện nhất định (xúc tác, nhiệt độ, áp suất, ). 

  Kiến thức hoá học chủ yếu là kiến thức về sự tương tác giữa các chất xảy ra trong phản ứng hoá học và được diễn tả bằng phương trình hoá học. 
  
  Chuỗi phản ứng giúp các em ôn tập, hệ thống hoá kiến thức một cách sinh động và hiệu quả nhất.
  
  Chuỗi phản ứng giúp dễ nhớ, nhớ lâu bởi kiến thức được tóm tắt ngắn gọn dưới dạng các sơ đồ. Chuỗi phản ứng cũng giúp rèn luyện khả năng vận dụng  kiến thức, chuẩn bị tốt cho các kì thi Tốt nghiệp Trung học phổ thông và Tuyển sinh Đại học - Cao đẳng.
  
  Cuốn sách được chia làm 2 phần:
  Phần I: Hóa Học Phi Kim
  Chương 1. Nhóm halogen
  Chương 2. Nhóm oxi
  Chương 3. Nhóm nitơ
  Chương 4. Nhóm cacbon
  Phần II: Hóa Học Kim Loại
  Chương 1.  Đại cương về kim loại
  Chương 2.  Kim loại kiềm - Kim loại kiềm thổ - Nhôm
  Chương 3.  Sắt và một số kim loại quan trọng`),
  new InitProduct("85", "banchay", "", "./image/banchay/combo2sach/6cb86fd34d89ea29a0cc8f54b45be9f3.jpg.webp", "Combo 2 sách - Khai phá hạnh phúc", "99.000", `Tập sách “cứu rỗi” cho những phụ nữ đang trăn trở với câu hỏi: “Làm thế nào để đẹp và phong cách?”.
  Thay Cách Mặc, Đổi Cuộc Đời cung cấp cho độc giả những kỹ năng cốt lõi để biến đổi hoàn toàn hình ảnh bản thân, từ chỗ ăn mặc chấp nhận được trở thành ăn mặc ấn tượng tuyệt vời. Từ đây, người đọc cũng sẽ rút ra được những phương pháp thay đổi diện mạo thực tế và phù hợp với lối sống, tính cách và túi tiền của mình. Tác giả cũng sẽ chỉ cho người đọc những kỹ thuật giúp tiết kiệm thời gian và tăng hiệu quả tối đa cho các khoản chi phí bạn bỏ ra. Trên hết, là sẽ hướng dẫn cách tạo ra một lợi thế phong cách, để bạn luôn trở nên đặc biệt, nổi bật và đáng nhớ.
  2. Vì sao bạn ế
  Cuốn sách là một “bản tuyên ngôn” đầy khí thế đáp trả lại cả thế giới – nơi luôn gắn giá trị người phụ nữ với tình trạng hôn nhân. Từ kinh nghiệm sống của mình, qua các bài phỏng vấn những người độc thân khác, cùng các bài nghiên cứu Tâm lý học và Xã hội học, tác giả Sara Eckel – một phụ nữ sống độc thân trong gần 40 năm, đã đúc rút ra rằng: Mối quan hệ tình cảm chỉ là do may mắn.
  Sách xì xấm..: Mô tả sản phẩm: Cuốn sách Xì Xầm Vs Hét To - Bí Kíp X Trong Quảng Cáo PR sẽ giúp bạn thiết lập vị thế thị trường cho doanh nghiệp của bạn và tối đa hóa doanh số, thông qua các hoạt động PR đơn giản như:
  
  Tiếp cận với đối tượng truyền thông mục tiêu của bạn;
  Truyền đạt các thông điệp chính;
  Tạo sự khác biệt giữa doanh nghiệp của bạn và các đối thủ;
  Tạo vị thế quan trọng cho doanh nghiệp của bạn trong ngành;`),
  new InitProduct("86", "banchay", "", "./image/banchay/combo2sach/a4359ddb71b2b0d68969bc1089b3c8b0.jpg.webp", "Vì sao bạn ế?", "78.000"),
]

function createModal() {
   
  var s = "";
for(var i = 0; i < productArr.length; i++) {
  s += `
  <div class="modal-detail" id="myModal-${productArr[i].productId}">
      <div class="modal-content">
        <div class="modal-header">
          <p>Chi tiết sản phẩm</p>
          <div class="close" id="closeBtn" >
              <i class="ti-close "></i>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-control">
              <div class="modal-prev"><i class="ti-angle-left"></i></div>
              <div class="modal-next"><i class="ti-angle-right"></i></div>
          </div> 
          <div class="product-img">
              <img src=" ${productArr[i].img} " alt="">
          </div>
          <div class="product-info">
            <h2>${productArr[i].name}</h2>
            <p>Tác giả: <span> Tên tác giả </span> </p>
            <p>Nhà xuất bản: <span>[Tên nhà xuất bản]</span></p>
            <p>Giá: ${productArr[i].price}<span >VNĐ</span></p>
            <div class="quantity"><p>Số lượng:</p>
              <div class="quantity-box">
                  <button class="minus-btn" type="button" name="button">
                      -
                  </button>
                  <input type="text" name="name" value="1">
                  <button class="plus-btn" type="button" name="button">
                      +
                  </button>
              </div>
          </div>
            
            <button class="purchase-btn">Mua sản phẩm</button>
            <div class="product-tab">
              <button class="tab-btn" id="content-btn">Nội dung sản phẩm </button>
              <button class="tab-btn" id="description-btn">Mô tả sản phẩm </button>
              <button class="tab-btn" id="product-rating-btn">Đánh giá sản phẩm </button>

          </div>
          
          </div>
        </div>
        
        <div class="product-tab-info ">
          <div class="content-discription">
              <p>
                  ${productArr[i].productContent}
               </p>
          
          </div>
          <div class="product-features">
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Loại sản phẩm:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Kích thước:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Số trang:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Tác giả:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Dịch giả:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Nhà Xuất Bản:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
                <div class="ty-product-feature">
                    <span class="ty-product-feature__label">Nhà Phát Hành:</span>
                    <div class="ty-product-feature__value"></div>
                </div>
            </div>
          <div class="product-rating">
              <p>Vui lòng đánh giá sản phẩm</p>
              <div class="star">
              <i class="ti-star"></i>
              <i class="ti-star"></i>
              <i class="ti-star"></i>
              <i class="ti-star"></i>
              <i class="ti-star"></i>
              </div>
              <p id="thankYouMessage" style="display: none;">Cảm ơn bạn đã đánh giá!</p>
          </div>
        </div>
      </div>
  </div>
      `;
}
  document.body.innerHTML += s;
  productArr.forEach(function(product,index) {
    let modal = document.getElementById('myModal-' + product.productId);
    let closeBtn = modal.querySelector('.close');

    closeBtn.addEventListener('click', function() {
      let modalId = modal.getAttribute('id');
      closeModal(modalId);
    });

    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        let modalId = modal.getAttribute('id');
        closeModal(modalId);
      }
    });
    // Thêm sự kiện tăng giảm số lượng sản phẩm 
    let quantityInput = modal.querySelector('.quantity input');
    let minusBtn = modal.querySelector('.minus-btn');
    let plusBtn = modal.querySelector('.plus-btn');

    minusBtn.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });

    plusBtn.addEventListener('click', function() {
        quantityInput.value++;
    });
    // Thêm sự kiện thêm sản phẩm vào giỏ hàng
    let buyNowButton = modal.querySelector('.purchase-btn');

        buyNowButton.addEventListener('click', function() {
            addToCart(product);
            
        });
        let cart = []; 

        function addToCart(product) {
            let quantity = parseInt(modal.querySelector('.quantity input').value);
            let productInfo = {
                name: product.name,
                img: product.img,
                price: product.price,
                quantity: quantity
            };           
            let existingProduct = cart.find(item => item.name === productInfo.name);
            if (existingProduct) {   
              existingProduct.quantity += quantity;
            } else {               
                cart.push(productInfo);
            }
            console.log(cart);
            const toast = document.querySelector('.toast');
            toast.style.display = 'flex'; 
            setTimeout(() => {
                toast.style.display = 'none'; 
            }, 2000);
            localStorage.setItem('listCart',JSON.stringify(cart));      
        }
      
    // Thêm sự kiện chuyển đổi giữa các product tab
    let contentBtn = modal.querySelector('#content-btn');
    let descriptionBtn = modal.querySelector('#description-btn');
    let productRatingBtn = modal.querySelector('#product-rating-btn');

    let contentDescription = modal.querySelector('.content-discription');
    let productFeatures = modal.querySelector('.product-features');
    let productRating = modal.querySelector('.product-rating');

    contentBtn.addEventListener('click', function() {
        contentDescription.style.display = 'block';
        productFeatures.style.display = 'none';
        productRating.style.display = 'none';
    });

    descriptionBtn.addEventListener('click', function() {
        contentDescription.style.display = 'none';
        productFeatures.style.display = 'block';
        productRating.style.display = 'none';
    });

    productRatingBtn.addEventListener('click', function() {
        contentDescription.style.display = 'none';
        productFeatures.style.display = 'none';
        productRating.style.display = 'block';
    });
  
    let tabBtns = modal.querySelectorAll('.tab-btn');
    tabBtns.forEach(function(btn) {       
        btn.addEventListener('click', function() {
          tabBtns.forEach(function(btn) {
              btn.classList.remove('active');
          });
          this.classList.add('active');
      });
    });
    if (tabBtns.length > 0) {
        tabBtns[0].click();
    }

    let stars = modal.querySelectorAll(".star .ti-star");
    let thankYouMessage = modal.querySelector("#thankYouMessage");

    stars.forEach(function(star, index) {
        star.addEventListener("click", function() {
            stars.forEach(function(star) {
                star.classList.remove("star-active");
            });

            thankYouMessage.style.display = "block";

            for (var i = index; i < stars.length; i++) {
                stars[i].classList.add("star-active");
            }
        });
    });
    //prev next modal
    let nextBtn = modal.querySelector('.modal-next');
    let prevBtn = modal.querySelector('.modal-prev');

    nextBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        let nextIndex = (index + 1) % productArr.length;
        let nextProduct = productArr[nextIndex];
        if (nextProduct.category === product.category) {
            let nextModal = document.getElementById('myModal-' + nextProduct.productId);
            if (nextModal) {
                nextModal.style.display = 'flex';
            }
        }
    });

    prevBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        let prevIndex = (index - 1 + productArr.length) % productArr.length;
        let prevProduct = productArr[prevIndex];
        if (prevProduct.category === product.category) {
            let prevModal = document.getElementById('myModal-' + prevProduct.productId);
            if (prevModal) {
                prevModal.style.display = 'flex';
            }
        }
    });
    
    
});



}
window.addEventListener('load', function() {
  createModal();
});

// console.log(cart);
function showModal(modalId) {
  let modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
  }
}
function closeModal(modalId) {
  let modal = document.getElementById(modalId);

  if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}


function displayCategory(category, subcategory = null) {
  const content = document.querySelector("#content");
  const container = document.querySelector('.container-content');
  container.innerHTML = ''; // làm sạch container

  container.style = "justify-content: flex-start";

  
  const existingLabel = content.querySelector('.label');
  if (existingLabel) {
    existingLabel.remove();
  }
  // filter dựa trên thể loại đã chọn
  const filteredProducts = productArr.filter(product => 
    product.category === category && (subcategory === null || product.subcategory === subcategory)
  );

  // add Nhãn
  function createCategoryLabel(categoryName) {
    const label = document.createElement('h2');
    label.textContent = categoryName;
    label.classList.add('label');
    return label;
  }

  let categoryLabel;
  switch (category) {
    case 'vanhoc':
      categoryLabel = createCategoryLabel('Văn Học');
      break;
    case 'amthuc':
      categoryLabel = createCategoryLabel('Ẩm Thực');
      break;
    case 'suckhoe':
      categoryLabel = createCategoryLabel('Sức khỏe');
      break;
    case 'kientruc':
      categoryLabel = createCategoryLabel('Kiến trúc');
      break;
    case 'kinhte':
      categoryLabel = createCategoryLabel('Kinh tế');
      break;
    case 'ngoaingu':
      categoryLabel = createCategoryLabel('Ngoại ngữ');
      break;
    case 'phapluat':
      categoryLabel = createCategoryLabel('Pháp luật');
      break;

    default:
      categoryLabel = createCategoryLabel(category);
  }

  content.appendChild(categoryLabel);
  
  // tạo các thẻ sản phẩm
  filteredProducts.forEach(product => {
    const itemContent = document.createElement('div');
    itemContent.classList.add('item-content');
    itemContent.dataset.productId = product.productId;

    const productTop = document.createElement('div');
    productTop.classList.add('product-top');

    const img = document.createElement('img');
    img.classList.add('product-thumb');
    img.src = product.img;
    img.alt = product.name;

    const productName = document.createElement('a');
    productName.textContent = product.name;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price + ' VND';

    itemContent.addEventListener('click', () => {
      const clickedProductId = itemContent.dataset.productId;
      console.log('Clicked Product ID:',clickedProductId);
      showModal(`myModal-${clickedProductId}`);
 
    });
    
    productTop.appendChild(img);
    productTop.appendChild(productName);
    productInfo.appendChild(productPrice);
    itemContent.appendChild(productTop);
    itemContent.appendChild(productInfo);

    container.appendChild(itemContent);


    content.appendChild(container);

  });
}
