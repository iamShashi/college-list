import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from  "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {

  constructor( private http: HttpClient) {}

	getColleges(page): Observable<any>{
		return this.http.get("assets/colleges.json");
	}

}