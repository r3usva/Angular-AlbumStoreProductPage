import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
 import { Operator } from 'rxjs';
 import { map } from 'rxjs/operator/map';


@Injectable()
export class ProductService {

  private _albumUrl : string = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum (id: number) {
      return this._http.get(this._albumUrl).subscribe(response => response.json());
  }


}
