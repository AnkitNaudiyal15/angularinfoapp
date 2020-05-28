import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carbooncalculator',
  templateUrl: './carbooncalculator.component.html',
  styleUrls: ['./carbooncalculator.component.sass']
})
export class CarbooncalculatorComponent implements OnInit {

 location:string;
 person:number;
 salary:number;

 selectedFile: File = null;
 selectedIndex: number = 0;

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

  formatLabelperson(value: number) {
    if (value) {
      // this.person = Math.round(value);
      return Math.round(value) ;
    }
  }


  formatLabelincome(value: number) {
    if (value) {
      // this.salary = Math.round(value);
      return Math.round(value ) + 'k';
    }
  }


  onSubmit(event){
    console.log('start');
    console.log(this.location);
    console.log(this.salary);
    console.log(this.person);
    console.log('end');
    if(this.location!=null && this.salary>0 && this.person>0){
      this.nextStep();
    }
    //console.log(event);
  }
 nextStep() {
    if (this.selectedIndex != 8) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }
}
