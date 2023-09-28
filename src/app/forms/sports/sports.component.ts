import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';



@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule]
})
export class SportsComponent implements OnInit {

   
  sportCards = [];

  private readonly http = inject(HttpClient);

  ngOnInit(): void {


      // this.sportCards = [
      //     {
      //         id:crypto.getRandomValues,
      //         name: 'Football',
      //         price: 1500,
      //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
      //         description: 'Football description'
      //     },
      //     {
      //         id:crypto.getRandomValues,
      //         name: 'Football Boot',
      //         price: 6000,
      //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
      //         description: 'Football description'
      //     }
      // ];

      this.http
      .get<any>(`http://localhost:3000/sports`)
      .subscribe(sports => this.sportCards = sports);
      

  }
}