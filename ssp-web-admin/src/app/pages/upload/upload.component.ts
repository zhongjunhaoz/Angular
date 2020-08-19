import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile, NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

import { StorageService } from '../../service/storage.service';
import { imgUpdata, formUpdata } from '../../axios/api.js';
import { base64TransFile } from '../../../assets/js/common.js';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  areaVal = '';//文本域值
  imgVal = null;//图片路径
  phoneVal = ''; //手机号码
  radioValue = 'B'; //匿名否
  previewImage: string | undefined = '';
  previewVisible = false;
  // 文件列表
  fileList: NzUploadFile[] = [];

  constructor(private message: NzMessageService, public service: StorageService, private router: Router, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.service.stitle = '我要上传';
  }


  // 退出
  goBack() {
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '本次上报内容不会被保存，是否确定退出？',
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.router.navigate(['home/photo']);
      }
    })
  }

  // 预览图标时的回调
  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview; //已经转化为base64格式
    this.previewVisible = true;
  };

  // 点击确认上传
  upload() {
    let temp = [];
    let formData = new FormData();
    this.fileList.forEach(item => {
      formData.append('multipartFile', base64TransFile(item.thumbUrl, 'img' + item.size));
    });
    imgUpdata(formData).then(res => {
      console.log(res);
      (res as any).items.forEach(item => {
        // console.log(item.fileUrl)
        temp.push(item.fileUrl)
      })
      this.imgVal = temp.toString();
    }).then(res => {
      this.postForm()
    })
  }

  postForm() {
    formUpdata({
      'params': {
        fcontent: this.areaVal,
        fimages: this.imgVal,
        fphone: this.phoneVal,
        freportType: this.radioValue
      }
    }).then(res => {
      console.log(res)
      if ((res as any).msg == '操作成功') {
        this.message.create('success', '提交成功');
        location.reload();
      } else if ((res as any).msg == 'report.content.can.not.null') {
        this.message.create('error', '请填写必填项');
      }
    })
  }
}
