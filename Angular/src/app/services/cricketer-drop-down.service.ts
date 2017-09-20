import { Injectable } from '@angular/core';
import { IPlayerType } from '../interface/player-type';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CricketerDropDownService {

  private _getPlayersurl="/api/playertype";
  private addplayerurl = "/api/addplayer";
   playerType: IPlayerType[] = [];

 constructor(private _http: Http) { }
  getPlayerType() {
       let headers = new Headers();
       headers.append('Content-Type', 'application/JSON');

        return this._http.get(this._getPlayersurl,{headers:headers})
            .map((response:Response) => response.json());
  };

  fetchDataFromnode(){
    return this._http.get('/api/players').map(
      (res) => res.json()
    );
  }
    addPlayer(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    return this._http.post(this.addplayerurl, data, {headers:headers})
            .map((res: Response) =>{
                    return res;
                });  
    }
}
