var now=new Date();
 var month=new Array("해오름달", "시샘달", "물오름달", "잎새달", "푸른달", "누리달", "견우직녀달", "타오름달", "열매달", "하늘연달", "미틈달", "매듭달" );


function click() {
 alert("우리말로 된 이번달 : " + month[now.getMonth()+1]);
}
  
