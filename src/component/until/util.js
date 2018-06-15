var getCookie = function (name) {  //获得cooki
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
         return unescape(arr[2]);
       else
         return null;
};

export {getCookie}