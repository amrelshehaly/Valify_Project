import { Injectable } from '@angular/core';
import { Candidates } from './candidates-elections'
import { Candidate } from './candidates'
 

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {



  constructor() { }

  getcandidates(): Candidate[] {
    return Candidates;
  }
  
}
