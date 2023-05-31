// bài 1
/** 
 * Tính lương
 * Đầu vào:
 * -Lương 1 ngày làm:100000
 * -số ngày làm: 2
 * Xử lý
 * -total = Lương 1 ngày * Ngày làm
 * Đầu ra:
 * -in ra kết quả lương nhận
 */
var btnTinhLuong = document.getElementById("btnTinhLuong").onclick = function () {
    var LuongNgay = document.getElementById("LuongNgay").value;
    var NgayLam = document.getElementById("NgayLam").value;
  
    var total = LuongNgay * NgayLam;
  
    var result = "Lương sẽ nhận :" + total;
    document.getElementById("Luongnhan").innerHTML = result;
  }
  
  
  // bài 2
  // Tính trung bình 5 số
  /**
   * Đầu vào 
   * - số 1 
   * - số 2
   * - số 3
   * - số 4
   * - số 5
   */
  var btnTinhTB = document.getElementById("btnTinhTB").onclick = function () {
    var number_1 = document.getElementById("number_1").value * 1;
    var number_2 = document.getElementById("number_2").value * 1;
    var number_3 = document.getElementById("number_3").value * 1;
    var number_4 = document.getElementById("number_4").value * 1;
    var number_5 = document.getElementById("number_5").value * 1;
    /**
     * xử lý 
     * - total = number_1 + number_2 + number_3 + number_4 + number_5
     * - trung bình = total / 5
     */
    var total = number_1 + number_2 + number_3 + number_4 + number_5;
    var avg = total / 5;
  
    /**
     * đầu ra 
     * -IN ra kết quả trung bình của 5 số
     */
    var result = "Trung bình là :" + avg;
    document.getElementById("Tbinh").innerHTML = result;
  }
  
  
  
  // bài 3
  /**
   * Đầu vào: 
   * - 1 USD - 23.500 VND
   */
  var btnQuyDoi = document.getElementById("btnQuyDoi").onclick = function () {
    var USD = document.getElementById("USD").value * 1;
    /**
     * xử lý:
     * - quy đổi = USD * 23.500
     */
    var quydoi = USD * 23500;
  
    /**
     * đầu ra:
     * - In ra kết quả quy đổi sang VND
     */
    var numberFormat = new Intl.NumberFormat("VN-vn")
    var result = numberFormat.format(quydoi);
    document.getElementById("qDoi").innerHTML = result;
  
  }
  
  // Bài 4
  /**
   * Đầu vào 
   * -chiều dài 
   * -chiều rộng
   */
  var btnTinhCV = document.getElementById("btnTinhCV").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
  
    /**
     * Xử lý:
     * - tính diện tích : dài * rộng
     * - tính chu vi: (dài + rộng) *2
     */
    var dientich = chieuDai * chieuRong;
    var Chuvi = (chieuDai + chieuRong) * 2;
    /**
     * Đầu ra:
     * -in ra kết quả chu vi, diện tích
     */
    var result = "";
    result += "Diện tích:" + dientich;
    result += "Chu vi:" + Chuvi;
    document.getElementById("cVi").innerHTML = result;
  }
  
  // Bài 5
  /**
   * Đầu vào
   * -nhập 2 chữ số 
   * -tính tổng 2 chữ số đó
   */
  var btnToal = document.getElementById("btnTotal").onclick = function () {
    var so_donvi = document.getElementById("num").value % 10;
    var so_chuc = document.getElementById("num").value / 10;
    var so_chuc = Math.floor(so_chuc);
    /**
     * Xử lý
     * -tách lấy số đầu
     * -tách lấy số sau 
     * - cộng 2 số đó 
     */
    var total = so_donvi + so_chuc;
    var result = "Tổng 2 số là :" + total
    /** 
     * Đầu ra
     * - in ra kết quả : số đơn vị + số hàng chục*/
    document.getElementById("tTong").innerHTML = result;
  }