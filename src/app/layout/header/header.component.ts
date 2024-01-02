import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isToken: boolean = false;
  public activeLink!: string | undefined;
  public token = sessionStorage.getItem('token');

  public headerNavigation = [
    {linkPage: 'hotel', disable: true},
    {linkPage: 'restaurant', disable: true},
    {linkPage: 'homestay', disable: true},
    {linkPage: 'tour', disable: true},
    {linkPage: 'utilities', disable: true},
    {linkPage: 'cooperate', disable: true},
    {linkPage: 'blog', disable: true},
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(){
    // this.activeLink = this.route.snapshot.firstChild?.url[0].path;
    this.activeLink = this.route.snapshot.routeConfig?.path;
    this.checkToken();
  }

  checkToken(){
    if (this.token) {
      this.isToken = true;
    }
  }

  redirectToLoginPage(){
    this.router.navigate(['login']);
  }

  redirectToRegisterPage(){
    this.router.navigate(['register']);
  }

}
