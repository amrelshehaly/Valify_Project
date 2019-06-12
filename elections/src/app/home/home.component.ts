import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service'
import { Candidate } from '../candidates'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ShowingCandidates : Candidate[] 

  sortbyname : String;

  // sortbydate : String ;

  constructor(private candiService : CandidatesService) {  }

  getTheCandies(){
    this.ShowingCandidates = this.candiService.getcandidates();
    console.log("ShowingCandidates")
  }

  sortByname(){
    return this.sortbyname = 'name';
  }

  sortBydate(){
     return this.sortbyname = 'dateCreation';
  }

  ngOnInit() {
   this.getTheCandies();
   this.sortBydate()
  }

}
