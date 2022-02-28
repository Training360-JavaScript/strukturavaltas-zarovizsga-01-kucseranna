import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../modell/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  entityName: string = 'constructions';

  constructor(
    private http: HttpClient,
  ) { }
  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${environment.apiUrl}${this.entityName}/${id}`);
  }
  create(construction: Construction): Observable<any>{
    return this.http.post<Observable<any>>(
      `${environment.apiUrl}${this.entityName}`, construction );
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${environment.apiUrl}${this.entityName}/${construction.id}`,
      construction
    );
  }
  delete(construction: Construction): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${this.entityName}/${construction.id}`);
  }

}
