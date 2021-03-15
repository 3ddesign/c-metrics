import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class StateService {
    
    public currentCurrency!: { [key: string]: number };
}