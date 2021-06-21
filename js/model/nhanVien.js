function nhanVien(maNV,tenNV,chucVu,heSoChucVu,luongCB,soGio) {
    this.maNhanVien =maNV ;
    this.tenNhanVien = tenNV;
   this.chucVu = chucVu;
      
   this.heSoChucVu=heSoChucVu;
   this.luongCB=luongCB;
   this.soGio=soGio;
   this.tongLuong= luongCB*heSoChucVu;
    this.xepLoai= ()=>{
        let xepLoai='';
        if(this.soGio >= 120){
            xepLoai='Nhân viên xuất sắc';
        }else if ((this.soGio >=100)||(this.soGio<120)){
            xepLoai='Nhân viên giỏi';
        }else if ((this.soGio >=80) ||(this.soGio<100)){
            xepLoai='Nhân viên khá';
        }else if ((this.soGio >=50) ||(this.soGio<80)){
            xepLoai='Nhân viên trung bình';
        }
        return xepLoai;
    }
    
}