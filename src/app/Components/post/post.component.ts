import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: string;
  post;
  isUpdated: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
    });

    this.dataService.getPost(this.id).subscribe((data) => {
      this.post = data;
    })
  }

  updatePost() {
    this.isUpdated = true;
  }

}
