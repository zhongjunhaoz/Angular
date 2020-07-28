// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../core/auth.service'

// @Component({
//   selector: 'app-login',
//   template: `
//     <div>
//       <input #usernameRef type="text">
//       <input #passwordRef type="password">
//       <button (click)="onClick(usernameRef.value,passwordRef.value)">Login</button>
//     </div>
//   `,
//   styles: [
//   ],
//   //在Provice组件中配置authService
//   providers:[AuthService]
// })
// export class LoginComponent implements OnInit {
//   // service: AuthService;

//   // constructor() { 
//   //   this.service = new AuthService;
//   // }
//   //在构造函数中将AuthService示例注入到成员变量service中，而且不需要显示声明成员变量service了
//   constructor(private service: AuthService){

//   }
//   ngOnInit(): void {
//   }

//   // onClick(a) {
//   //   // console.log('钟俊浩');
//   //   console.log(a)
//   // }
//   // onClick(username,password){
//   //   console.log('username:' + username + '\n\r' + 'password:' + password)
//   // }
  
//   onClick(username,password){
//     //调用service的方法
//     console.log('auth result is: ' + this.service.loginWidthCredenials(username,password))
//   }
// }

////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-login',
  template: `
  <div>
  <input type="text"
    [(ngModel)]="username"
    #usernameRef="ngModel"
    required
    minlength="3"
    />
    {{ usernameRef.errors | json }}
    <div *ngIf="usernameRef.errors?.required">this is required</div>
    <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
  <input required type="password"
    [(ngModel)]="password"
    #passwordRef="ngModel"
    />
    <div *ngIf="passwordRef.errors?.required">this is required</div>
  <button (click)="onClick()">Login</button>
</div>
  `,
  styles: [
  ],
  //在Provice组件中配置authService
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private service: AuthService){

  }
  ngOnInit(): void {
  }

  onClick(){
    //调用service的方法
    console.log('auth result is: ' + this.service.loginWidthCredenials(this.username,this.password))
  }
}

