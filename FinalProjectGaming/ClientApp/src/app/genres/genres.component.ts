import { Component, OnInit } from '@angular/core';
import { genres, Result } from '../genres';
import { GenresService } from '../genres.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor(private ViewGeneres : GenresService) { }

  allgenres : genres[] = [];

  GetAllGenres(): void{
  this.ViewGeneres.GetGenres().subscribe((result:genres[])=>{
  this.allgenres = result; 
  console.log(result);
  })};

  ngOnInit(): void { 
  
  this.GetAllGenres();
  }

}

