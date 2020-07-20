import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

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

  deletPost(id) {
    this.dataService.removePost(id).subscribe(
      res => this.router.navigate(['/posts']),
      err => console.log(err)
    )
  }

  onSubmit(form) {
    this.dataService.updatePost(form.value).subscribe(
      res => this.router.navigate(['/posts']),
      err => console.log(err)
    )
  }

}
