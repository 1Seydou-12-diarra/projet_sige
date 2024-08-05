import { Injectable } from '@angular/core';
import { Eleve } from '../models/eleve.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EleveService {

  private basrUrl = 'http://localhost:8082/eleve'



  constructor(private _http: HttpClient) { }

  deleteEleve(id: number): Observable<Eleve> {
    return this._http.delete(this.basrUrl + '/delete/' + id);
  }
  getEleve(): Observable<Eleve[]> {
    return this._http.get<Eleve[]>(this.basrUrl + "/getAll");
  }

  detailsEleve(id: number): Observable<Eleve> {
    return this._http.get<Eleve>(`${this.basrUrl}/${id}`);
  }

  enregistrerUtilisateur(eleve: any): Observable<any> {
    return this._http.post<Eleve>(this.basrUrl + "/enregistrerOuModifier", eleve);
  }


  updatePersonne(id: number, eleve: Eleve): Observable<Eleve> {
    return this._http.put(this.basrUrl + '/update/' + id, eleve);
  }

}
