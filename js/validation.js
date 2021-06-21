let validation= () =>{
    let regMaNhanVien= /^[0-9]{4,6}$/i;
    let maNhanVien= document.querySelector('#maNhanVien').value;
    
    let regTenNhanVien =/^[ a-zA-Z\-\']+$/;
    let tenNhanVien = document.querySelector('#tenNhanVien').value;
    
    let regLuongCoBan =/^[0-9]{7,8}$/;
    let luongCB=Number(document.querySelector('#luongCB').value);
    
    let regGioLam = /^[0-9]{2,3}$/;
    let gioLam=Number(document.querySelector('#gioLam').value);
    
    var valid=true;
    
        if(regMaNhanVien.test(maNhanVien)){
            let checkMa= document.querySelector('#checkMa');
            checkMa.classList.remove('text-danger');
            checkMa.classList.add('text-success');
    
            checkMa.innerHTML="Mã nhân viên hợp lệ"
            
        }else{
            checkMa.classList.add('text-danger');
            checkMa.innerHTML="Mã nhân viên không hợp lệ";
            
            valid=false;
           
        }
        
        if(regTenNhanVien.test(tenNhanVien)){
            let checkTen= document.querySelector('#checkTen');
            checkTen.classList.remove('text-danger');
            checkTen.classList.add('text-success');
            checkTen.innerHTML="Tên nhân viên hợp lệ";
           
        }else{
            checkTen.classList.add('text-danger');
            checkTen.innerHTML="Tên nhân viên không hợp lệ"
            
            valid=false;
         
        }
    
        if(regLuongCoBan.test(luongCB)){
            if(luongCB >= 1000000 && luongCB<=20000000){
                let checkLuong= document.querySelector('#checkLuong');
                checkLuong.classList.remove('text-danger');
                checkLuong.classList.add('text-success');
                checkLuong.innerHTML="Lương cơ bản hợp lệ";
            }else{
                checkLuong.classList.add('text-danger');
                checkLuong.innerHTML="Lương cơ bản không hợp lệ";
                valid=false;
            
        }
        }
        if(regGioLam.test(gioLam)){
            if(gioLam >=50 && gioLam<=150){
                let checkGio= document.querySelector('#checkGio');
                checkGio.classList.remove('text-danger');
                checkGio.classList.add('text-success');
                checkGio.innerHTML="Giờ làm trong tháng hợp lệ";
                
            }else{
                checkGio.classList.add('text-danger');
                checkGio.innerHTML="Giờ làm trong tháng không hợp lệ";
                
                valid=false;
            }
           
        }
        console.log(valid)
        if(valid){
            return true;
        }
     
    
    }