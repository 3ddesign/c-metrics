import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCurrency('latest?base=USD').pipe(take(1)).subscribe(currency => {
      console.log(currency);
    });
  }

}
