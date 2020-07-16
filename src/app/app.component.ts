import { Component } from '@angular/core';
import { CollegeServiceService } from './college-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'collegeList';
  colleges: any = [];
  alldata:any = [];
  total = 10;

  constructor(private collegeServe: CollegeServiceService){

  }

  ngOnInit(){
  	this.getCollegeList();
  	document.addEventListener('scroll', this.scrollEvent, true);
  }


  scrollEvent = (event: any): void => {
	
	
	if (document.documentElement.scrollTop + 10+document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		this.addMore();
		
	}	
};

  getCollegeList() {
  	const elem = document.querySelector("#thiselement");
  	this.collegeServe.getColleges(1).subscribe(data=>{
  		this.alldata = data.data;
  		for(var i =0;i<10;i++){
  			this.colleges.push(this.alldata[i]);
  			this.total = 10;
  		}
  	})
  }

  addMore() {
  	if(this.colleges.length>=50)
  	{
  		console.log("return from here");
  		return;
  	}
  	for(var i =this.total;i<this.total+10;i++){
  			this.colleges.push(this.alldata[i]);
  			
  		}
		this.total = this.total+10;
    // this.removeEventListener("click", handleClick);
	}
}
