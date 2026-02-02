
let account = "";
let password = "";
let countAccount = 0;
let countPassword = 0;
let flag = false;


do{
    account  = prompt("Nhập tài khoản");
    password = prompt("Nhập mật khẩu");

    if(account === "admin" && password === "12345"){
        alert("Đăng nhập thành công");
        flag = true;
        break;
    }else{
        if(password !== "12345" && account !== "admin"){
            countAccount++;
            countPassword++;
            alert(`Cả tài khoản và mật khẩu đều sai! Bạn đã nhập ${countAccount} lần`);
            if(countAccount === 3 && countPassword === 3){
                alert("Tài khoản đã bị khóa");
                break;
            }
        }else if(password !== "12345"){
            countPassword++;
            alert(`Mật khẩu nhập sai lần ${countPassword}`);
            if(countPassword === 3 ){
                alert(`Tài khoản đã bị khóa`);
                break;
            }
        }else if(account !== "admin"){
            countAccount++;
            alert(`Tài khoản nhập sai lần ${countAccount} `);
            if(countAccount === 3){
                alert(`Tài khoản đã bị khóa`);
                break;
            }
        }
    }

}while(!flag && countAccount < 3 && countPassword < 3);

if(flag){
    let choice;


    do{
        choice = Number(prompt(`-------MENU CHỨC NĂNG-----------
1. Phân loại mã số sách (Số nguyên chắn/lẻ)
2. Thiết kế bản đồ kho sách (Dạng lưới)
3. Dự toén phí bảo trì sách theo năm
4. Tìm mã số sách may mắn (Số nguyên tố/ Số đặc biệt)
5. Thoát.`));
        
        
        switch (choice) {
            case 1://Phân loại mã số sách (chẵn/lẻ)
                let total = 0;
                let evenId = 0;
                let oddId = 0;
                alert("Nhập ID sách (Nhập 0 để dừng lại)");
                while(true){
                let bookId = prompt("Nhập ID sách dưới dạng số nguyên");
                bookId = Number(bookId);   

                if(bookId === 0){
                    
                    break;
                }else if(isNaN(bookId)){
                    alert("Nhập không đúng! Vui lòng nhập đúng số nguyên!");
                    continue;
                }else if(bookId % 2 === 0 ){
                    evenId++;
                    total++
                }else{
                    oddId++;
                    total++
                }
                }

                console.log(`
                    Thông báo:
                    Tổng số lượng mã sách đã nhập: ${total}
                    Có số mã số là số chẵn là: ${evenId}
                    Có số mã số là số lẻ là: ${oddId}
                `);
                
                break;    
            
            case 2://Thiết kế bản đồ kho sách (Dạng lưới)
                    //Case 2 chưa hoàn thiện
                    while(true){
                        let rows = prompt("Nhập số hàng");
                        let cols = prompt("Nhập số cột");

                        rows = Number(rows);
                        cols = Number(cols);

                        if(rows < 1 || isNaN(rows) || cols < 1 || isNaN(cols)){
                            alert("Số hàng hoặc cột phải nhập số nguyên dương! Vui lòng nhập lại");
                        } else{
                            for(let i = 1; i<= rows ; i++){
                                for(let j = 1; j <= cols ; j++){
                                    let output = `${i} - ${j}`;
                                    if(i === j){
                                        console.log(`[${i} - ${j}] (kệ ưu tiên)`);
 
                                    }
                                    console.log(`[${i} - ${j}]`);
                                }
                            }
                            console.log(`${output}`);
                        }  
                    }
                    
                break;
            case 3://Dự toán chi phí bảo trì sách theo năm

                let quantity = prompt("Nhập vào số lượng sách hiện có");
                let money = prompt("Nhập phí bảo trì/cuốn");
                let year = prompt("Nhập vào số năm dự toán");

                quantity = Number(quantity);
                money = Number(money);
                year = Number(year);

                if(isNaN(quantity) || isNaN(money) || isNaN(year)){
                    alert("Số liệu nhập không hợp lệ!");
                    break;
                }else{
                    let totalMoney;
                    console.log("Bảng chi phí của từng cuốn sách:");
                    
                    for(let i = 1 ; i< year ; i++){
                        totalMoney = quantity * money;
                        console.log(`năm ${i} có : ${totalMoney} VNĐ - (Giá ${money}/cuốn)`);
                        
                        money = money * 1.1;
                        console.log(`Phí bảo trì năm ${i} tăng lên 10% : ${money}`);
                        
                    }
                }    
                
                
                break;
            case 4://Tìm mã số sách may mắn (số nguyên tố/ số đặc biệt)
                let inputLucky = prompt("Nhập mã số may mắn giới hạn");
                let countLucky = 0;
                let listLucky = "";
                for(let j = 1 ; j<= inputLucky ; j++){
                    if(j % 3 === 0 && j % 5 !== 0){

                        listLucky += j +  " ";                        
                        countLucky++;
        
                    }
                }
                alert(`Đã hiện ${countLucky} con số may mắn trong khoảng (1 - ${inputLucky}) ở console`);
                console.log(`Danh sách các con số may mắn: `, listLucky);
                break;
            case 5://Thoát
                console.log("Hệ thống đang đăng xuất...! Cảm ơn bạn đã sủ dụng dịch vụ");
                
                break;
            
            default:
                console.log("lựa chọn không hợp lệ! Vui lòng nhập lại");
                
                break;
        }

    }while(choice !== 5);
}