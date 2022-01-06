/* 
방
*/



function Room(roomName, desc, id, e, w, n, s, u, d) {
    this.roomName = roomName; // 방 이름 ex)연습장 입구
    this.desc = desc; // 방 설명 ex) 연습장 입구입니다.
    this.id = id; // 방 고유 아이디 ex) 1001, 1002, 1003 등
    this.e = e; // 동쪽 east - e
    this.w = w; // 서쪽 west - w
    this.n = n; // 남쪽 north - n
    this.s = s; // 북쪽 south - s
    this.u = u; // 위 up - u
    this.d = d; // 밑 down - d

    this.displayRoomInfo = function () { //방 정보를 출력      // \n = <br>
        tv("[" + this.roomName + "]\n"); //ex [방이름]<br>
        tv(this.desc + "\n");            //ex 방 설명<br>
        tv(this.getRoomEnter() + "\n");  //ex 출구 : [ 동 서 남 ]
    }

    this.getRoomEnter = function () {  //방 입장
        var enters = "출구 : [ "; //방 입장시 기본 출력
        if (e != 0) {  //e가 0이 아니면 동을 출력 ex) 1001, 1002 등
            enters = enters + "동 ";
        }
        if (w != 0) {
            enters = enters + "서 ";
        }
        if (n != 0) {
            enters = enters + "남 ";
        }
        if (s != 0) {
            enters = enters + "북 ";
        }
        if (u != 0) {
            enters = enters + "위 ";
        }
        if (d != 0) {
            enters = enters + "밑 ";
        }
        enters = enters + "]";
        return enters;
    }

    this.getIdByDirection = function (direction) { //
        switch (direction) {
            case "동":      //동이면 e를 리턴
                return e;
                break;
            case "서":
                return w;
                break;
            case "남":
                return n;
                break;
            case "북":
                return s;
                break;
            case "위":
                return u;
                break;
            case "밑":
                return d;
                break;
        }
    }
}
