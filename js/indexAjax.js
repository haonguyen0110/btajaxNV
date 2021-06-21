function getNhanVienApi() {
    let promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
        responseType: 'json',

    });
    //ham xu ly request thannh cong
    promise.then(function (result) {
        console.log(result.data);
        //Tu du lieu lay ve
        renderTableNhanVien(result.data);
    })

    //ham xu ly that bai
    promise.catch(function (errors) {
        console.log('errors', errors);
    })
}
getNhanVienApi();

function renderTableNhanVien(arrNV) {
    //Tu mang arrSV={(maSinhVien:1, tenSinhVIen: Ti,...),...()}
    //Tao 1 chuoi tr td
    let content = '';
    for (let i = 0; i < arrNV.length; i++) {

        let nv = arrNV[i];
        // moi lan duiyet lay ra 1 doi tuong sv
        let NhanVien = new nhanVien(nv.maNhanVien, nv.tenNhanVien, nv.chucVu, nv.heSoChucVu, nv.luongCoBan, nv.soGioLamTrongThang);

        // tu doi tuong sv tao ra the tr
        let trNhanVien = `
            <tr>
                <td>${NhanVien.maNhanVien}</td>          
                <td>${NhanVien.tenNhanVien}</td>          
                <td>${NhanVien.chucVu}</td>          
                 <td>${NhanVien.luongCB}</td>
                 <td>${NhanVien.tongLuong}</td>
                <td>${NhanVien.soGio}</td>  
                <td>${NhanVien.xepLoai()}</td>
                <td><button class= "btn btn-danger" onclick="xoaSinhVien('${NhanVien.maNhanVien}')">Xóa</button>      
                <button class="btn btn-primary" onclick="suaThongTin('${NhanVien.maNhanVien}')">Chỉnh sửa</button>
                </td>  
                </tr>
        `;
        content += trNhanVien;

    }
    //Dom den the tblSinhVien chen chuoi content vao HtML
    document.querySelector('#tblNhanVien').innerHTML = content;
}

//------------------POST----------------

document.querySelector('#btnThemNV').onclick = (e) => {
    e.preventDefault();
    validation();

    if (validation() === true) {
        let arrInput = document.querySelectorAll('input,select');
        // console.log('arrInput', arrInput);
        let nhanVien = {};
        for (let input of arrInput) {

            let { name, value } = input;

            nhanVien = { ...nhanVien, [name]: value }

            if (nhanVien.heSoChucVu == 1) {
                nhanVien.chucVu = "Nhân viên";

            } else if (nhanVien.heSoChucVu == 2) {
                nhanVien.chucVu = "Quản lý";

            } else if (nhanVien.heSoChucVu == 3) {
                nhanVien.chucVu = "Giám đốc"
            }

        }


        console.log(nhanVien)


    }
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
        method: 'POST',
        data: nhanVien
    })
  
    promise.then(function (result) {
        console.log('result', result.data);
        getNhanVienApi();
    })


    promise.catch(function (error) {
        console.log('error', error.response.data);
    })

    axios.post('http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien', {

        chucVu: "Nhân viên",
        heSoChucVu: "1",
        luongCoBan: "3000000",
        maNhanVien: "76786",
        soGioLamTrongThang: "120",
        tenNhanVien: "ahdgadg",

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}


