import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  optionSelect = [
    {
      icon: 'assets/image/icon/user.svg',
      text: 'Profile',
      index: 1,
      url: '',
    },
    {
      icon: 'assets/image/icon/heart-broken.svg',
      text: 'Favourite',
      index: 2,
      url: '',
    },
    {
      icon: 'assets/image/icon/archive-book.svg',
      text: 'Order',
      index: 3,
      url: '',
    },
    {
      icon: 'assets/image/icon/message-question.svg',
      text: 'Instruction',
      index: 4,
      url: '',
    },
    {
      icon: 'assets/image/icon/key.svg',
      text: 'Change Password',
      index: 5,
      url: '',
    },
  ];

  constructor(private router: Router){}

  ngOnInit() {
  }

  logout(){
    sessionStorage.removeItem('token');
    location.reload();
    this.router.navigate(['']);
  }

  clickOption(option: any){
    switch (option.index) {
      // case 1:
      //   return this.showPage(option.url);
      default:
        alert("Chức năng đang phát triển!");
        break;
    }
  }

  showPage(url: string){
    this.router.navigate([url]);
  }
}
