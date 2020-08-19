function typeChange(val) {
    if (val == 'A') {
        return '实名'
    } else if (val == 'B'){
        return '匿名'
    }
}

function base64TransFile(base64Url,fileName){ 
    ////将图片Base64 转成文件
    var arr = base64Url.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        str = atob(arr[1]),
        n = str.length,
        u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = str.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  }


function imgHandle(val) {
    // return '../../../assets/img/bgImg.jpg'
    // 如果val没有出现','且为空，代表没有图片路径
    if (val == null) {
        return '../../../assets/img/bgImg.jpg'
    }
    if (val.indexOf(',') == -1 && val !== ''){
        return 'http://192.168.30.54:8081' + val
    }
    if (val.indexOf(',') > -1 ){
        let a = val.split(',')
        return 'http://192.168.30.54:8081' + a[0]
    }
}

export {
    typeChange,
    base64TransFile,
    imgHandle
}