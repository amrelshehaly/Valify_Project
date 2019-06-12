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

  searchfor : string;

  showingResults : number;

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

  searchingtext(){
    this.ShowingCandidates = this.candiService.getcandidates().filter(res=>{
      return  res.name.toLocaleLowerCase().match(this.searchfor.toLocaleLowerCase()) || 
      res.description.toLocaleLowerCase().match(this.searchfor.toLocaleLowerCase());
    });
  }

  Incr(candidate : any){
  let a  =  this.candiService.getcandidates().find(x => x.name === candidate.name);
  this.showingResults = a.results ++ ;
    console.log(this.showingResults);
  }

  ngOnInit() {
   this.getTheCandies();
   this.sortBydate()
  }

}
