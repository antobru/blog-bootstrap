import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public links = [
    { title: 'Home', fragment: 'home', path: '/' },
    { title: 'Posts', fragment: 'posts', path: '/posts' },
  ]

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
