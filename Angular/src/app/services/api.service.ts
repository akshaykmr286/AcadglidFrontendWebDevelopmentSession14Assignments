import { Injectable } from '@angular/core';
import { IPlayerType } from '../interface/player-type';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private _getPlayersurl="/api/playertype";
  private _addplayerurl = "/api/addplayer";
  private _deleteplayerurl = "/api/deleteplayer";
   playerType: IPlayerType[] = [];

 constructor(private _http: Http) { }
  

  /** Get the player Type using http get request from local file*/
  getPlayerType() {
    //function to get details
       let headers = new Headers();
       headers.append('Content-Type', 'application/JSON');

        return this._http.get(this._getPlayersurl,{headers:headers})
            .map((response:Response) => response.json())
            .catch((error: any) => {
                 return Observable.throw(new Error(error.status));
            });
  };

  fetchDataFromnode(){
    return this._http.get('/api/players').map(
      (res) => res.json()
    ).catch((error: any) => {
                 return Observable.throw(new Error(error.status));
            });
  }

/*Add player API*/
addPlayer(data){
let headers = new Headers();
headers.append('Content-Type', 'application/JSON');
return this._http.post(this._addplayerurl, data, {headers:headers})
        .map((res: Response) =>{
                return res;
            }).catch((error: any) => {
              return Observable.throw(new Error(error.status));
        });  
}

/*Delete player API*/
deletePlayer(data){
  let headers = new Headers();
  headers.append('Content-Type', 'application/JSON');
  let options = new RequestOptions({
    headers: headers,
    body : data
  });

  return this._http.delete(this._deleteplayerurl, options)
      .map((res: Response) =>{
              return res;
          }).catch((error: any) => {
            return Observable.throw(new Error(error.status));
      });
}
}
