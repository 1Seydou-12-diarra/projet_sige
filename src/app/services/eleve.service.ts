import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../models/eleve.model';


@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private basrUrl = 'http://localhost:8082/eleve'

  constructor(private _http: HttpClient) { }

  getEleve(): Observable<Eleve[]> {
    return this._http.get<Eleve[]>(this.basrUrl + "/getAll");
  }
  enregistrerUtilisateur(eleve: any): Observable<any> {
    return this._http.post<Eleve>(this.basrUrl + "/enregistrerOuModifier", eleve);
  }

}
