import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map , catchError } from 'rxjs/operators';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts;

  constructor(private dataService: DataService, private router: Router) { 
  
  }

  ngOnInit() { 
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getAllPosts().subscribe((data) => {
      this.posts = data;
    })
  }

}
