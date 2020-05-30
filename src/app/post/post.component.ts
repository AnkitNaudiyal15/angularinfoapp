import {
  Component,
  OnInit
} from '@angular/core';
import {
  PostService
} from '../post/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) {}
  selectedFile: File = null;
  post_title: string;
  post_description: string;

  ngOnInit(): void {}

  onFileSelected(event) {
    this.selectedFile = < File > event.target.files[0];
    console.log(event);
  }
  onFileUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('post_title', this.post_title);
    fd.append('post_description', this.post_description);
   
    var data = { body: fd };
    this.postService.create(data).subscribe(res => {
        console.log('Product created!');

    });
  }
}