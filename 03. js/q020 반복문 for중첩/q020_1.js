// const star = "☆";
const star = "*";
const space = "_";

/* 방식 1 */

// for(var i=1;i<=10;i=i+1){
//     for(var j=1;j<=10;j++){
//         if(j>(i-1)){
//             document.write(star);
//         } else {
//             document.write(space);
//         }
//     }    
//     document.write("<br>");
// }


/* 방식 2 */

var z = 0;

for(var i=10;i<=100;i=i+10)
{
    z = z + 1;  // 1 2 3 4 ... 10;

    // 별 한줄 10개 찍고 br(엔터) 하나 넣기 - 시작 //
    for(var j=1;j<=10;j++){
        /*
            _찍기,  별찍기
                                            i   조건    
                    1 2 3 4 5 6 7 8 9 10    1   j >= 1  j >= i
                    * 2 3 4 5 6 7 8 9 10    2   j >= 2  j >= i
                    * * 3 4 5 6 7 8 9 10    3   j >= 3  j >= i
                    * * * 4 5 6 7 8 9 10    4   j >= 4
                    * * * * 5 6 7 8 9 10    4   j >= 5
                    * * * * * 6 7 8 9 10    4   j >= 6
                    * * * * * * 7 8 9 10    4   j >= 7
                    * * * * * * * 8 9 10    4   j >= 8
                    * * * * * * * * 9 10    4   j >= 9
                    * * * * * * * * * 10    4   j >= 10
        */

        if(j >= z){
            document.write(star);
        } else {
            document.write(space);
        }

    }
    
    document.write("<br>");
    // 별 한줄 10개 찍고 br(엔터) 하나 넣기 - 끝 //

}
