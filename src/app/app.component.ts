import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {DataService} from "./data.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'test-service';
  // users: User[] = [];
  users: any[] = [];
  errorMessage: string = '';
  sendData = {"id":1, "name":"abcd"};
  @ViewChild('paragraph', { static: true }) paragraph!: ElementRef<HTMLElement>;
  @ViewChild('paragraphElement',{static:true}) paragraphElement!: ElementRef<HTMLElement>
  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    // console.log(this.paragraph.nativeElement.textContent)
    // this.paragraphElement.nativeElement.style.color = 'red';
    // this.paragraphElement.nativeElement.style.backgroundColor="#FAFAFA";

    // // this.dataService.getUserDetails().subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.users = data;
    //   },
    //   (error) => {
    //     this.errorMessage = error;
    //   }
    // );

    this.dataService.getUserDetails().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }

onSubmit(){
  this.dataService.postUserData(this.sendData).subscribe(
    (response) => {
      console.log('Post request successful:', response);
      // Handle response as needed
    },
    (error) => {
      console.error('Error occurred:', error);
      // Handle error as needed
    }
  );
} 
// within component communication
// own html ts 



}