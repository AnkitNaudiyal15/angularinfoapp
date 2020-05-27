import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carbooncalculator',
  templateUrl: './carbooncalculator.component.html',
  styleUrls: ['./carbooncalculator.component.sass']
})
export class CarbooncalculatorComponent implements OnInit {

 location:string;
 selectedFile: File = null;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
  onFileUpload(){
    const fd = new FormData();
    fd.append('mylife',this.selectedFile,this.selectedFile.name);
    this.http.post('http://httpbin.org/post',fd)
    .subscribe(res=>{
        console.log(res);
    });
  }
}
