function Room(roomName, desc, id, e, w, s, n, u, d) {
    this.roomName = roomName; // 방 이름
    this.desc = desc; // 방 설명
    this.id = id; // 방 설명
    this.e = e; // 동쪽
    this.w = w; // 서쪽
    this.n = n; // 남쪽
    this.s = s; // 북쪽
    this.u = u; // 위
    this.d = d; // 밑

    this.displayRoomInfo = function () {
        tv("[" + this.roomName + "]\n");
        tv(this.desc + "\n");
        tv(this.getRoomEnter() + "\n");
    }

    this.getRoomEnter = function () {
        var enters = "출구 : [ ";
        if (e != 0) {
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

    this.getIdByDirection = function (direction) {
        switch (direction) {
            case "동":
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
