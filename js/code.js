// var biencuatoi="xin chào các bạn"
// alert(biencuatoi);
// var bien2=5; //kiểu dữ liện dạng số;
// var bien3='Xin chào 2'// kiểu dữ liệu object;
// var a=5;
// var b=6;
// var c=(a*b)/2;
// if(a>c&&b>6){
// alert("A lớn hơn c và b lớn hơn 6");
// }else{
//     alert("bài toán sai")
// }
//tính tổng các số tự nhiên từ 1 đến 100
//}
 
    var i=1;
    var tong=1;
    // for(i=1;i<=100;i++){
    //     tong+=i;
    // }
    // alert(tong);
//  while(i<=100){
//      tong+=i;
//      i++;
//  }
//  alert(tong);
// do{
//     tong+=i;
//     i++;
// }while(i<=100);
// alert(tong);
// function tenham()/*đây chỉ là cái hàm*/
//     alert("hello word");
// }
// tenham();
// function Tong(a,b){
//     var tong= (a+b);
//     alert(tong);
// }
// Tong(1,2);
var video=document.getElementById("myvideo");
var btn =document.getElementById("mybtn")
function chay(){
    if(video.paused){//nếu video đã tạm dừng(vì lúc ban đầu video chưa chạy gì cả)
        video.play();//video sẽ chạy
        btn.innerHTML();//thay đổi nút thành Play
    }else{ //ngược lại
        video.pause(); //video sẽ tạm dừng
        btn.innerHTML=("Pause");
    }
}
// var b1=document.querySelector(".content");
//  var b2=b1.innerHTML;
// alert(b2);