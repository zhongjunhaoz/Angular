import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { login } from '../../axios/api'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})


export class InputComponent implements OnInit {

  validateForm!: FormGroup;
  username: String = '';
  password: Number;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private router:Router,private message: NzMessageService) {}

  ngOnInit(): void {
    this.validate();
    // this.postLogin();
  }

  validate() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  postLogin() {
    login({
      timestamp: 0,
      sign: '',
      params: {
        fuserName: this.username,
        fpassword: this.password
      }
    }).then(res =>{
      console.log(res)
      if (res.code == 0 && res.msg == '操作成功' && res.success == true) {
        this.message.create('success','验证成功');
        sessionStorage.setItem('token', res.items[0].token) //传进sessionStorage
        this.router.navigate(['/home'])
      } else if (res.code == 100 && res.msg == '用户名或者密码错误') {
        this.message.create('error','用户名或密码错误');
      } else if (res.code == 100 && res.msg == '用户名不存在') {
        this.message.create('error','用户名不存在');
      }
    })
  }
}
