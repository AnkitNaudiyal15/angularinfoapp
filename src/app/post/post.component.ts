import {
  Component,
  OnInit
} from '@angular/core';
import {
  PostService
} from '../post/post.service';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor(
    private postService: PostService,
    public fb: FormBuilder
    ) {}
  selectedFile: File = null;
  post_title: string;
  post_description: string;

  postForm: FormGroup;

  ngOnInit(){
    this.mainForm();
  }

  onFileSelected(event) {
    this.selectedFile = < File > event.target.files[0];
    console.log(event);
  }



  mainForm() {
    this.postForm = this.fb.group({
      post_title: ['', [Validators.required]],
      post_description: ['', [Validators.required]]
    })
  }


  onFileUpload() {
    const fd = new FormData();
    fd.append('post_image', this.selectedFile, this.selectedFile.name);
    fd.append('post_title', this.post_title);
    fd.append('post_description', this.post_description);
    this.postService.create(fd).subscribe(res => {
        console.log('Product created!');

    });
  }
}