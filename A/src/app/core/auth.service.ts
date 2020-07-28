import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  loginWidthCredenials(username: string, password: string): boolean {
    if(username === 'zhongjunhao')
      return true;
    return false;
  }
}
