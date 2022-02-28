import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  entityName: string = 'cars';

  constructor(
    private http: HttpClient,
  ) { }
  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}${this.entityName}/${id}`);
  }
  create(car: Car): Observable<any>{
    return this.http.post<Observable<any>>(
      `${environment.apiUrl}${this.entityName}`, car );
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${environment.apiUrl}${this.entityName}/${car.id}`,
      car
    );
  }
  delete(car: Car): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${this.entityName}/${car.id}`);
  }
}
