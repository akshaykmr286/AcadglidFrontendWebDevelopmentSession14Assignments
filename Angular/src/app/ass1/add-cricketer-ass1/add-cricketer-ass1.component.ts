import { Component, OnInit } from '@angular/core';
import { ICricketList,ICricketerModel  } from '../../interface/cricketer-list';
import { CricketerService } from '../../services/cricketer.service';
import { CricketerDropDownService } from '../../services/cricketer-drop-down.service';
import { IPlayerType } from '../../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonFunction } from "../../common";
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-add-cricketer-ass1',
  templateUrl: './add-cricketer-ass1.component.html',
  styleUrls: ['./add-cricketer-ass1.component.css']
})
export class AddCricketerAss1Component implements OnInit {

 /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;
  fbdata;
  constructor(private _http: Http,
              private router:Router,
              private _cricketService: CricketerService,
              private _cricketerDropDown: CricketerDropDownService,
              private _api: ApiService) { }
  
  ngOnInit() {
    this.cricketModel();
    this.getPlayerType();
    console.log(this.fbdata);
    this.cricketersArray = this._cricketService.getCricketerList();
    
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.YearlyIncome,
      dob: values.Dob
    };
    // /**Call function from service. */
    /*this._cricketService.addCricketer(this.cricketerDetail);
    this._cricketService.getCricketerList();
    this.router.navigate(['/ass1/list']);*/
     
    var body = this.cricketerDetail;
    this._api.addPlayer(body).subscribe(
      (res) => {
        if (res.status == 200) {
          //let resData = res.json();
          alert('Player Added Succesfully..');
          this.router.navigate(['/ass1/list']);
        }
      },(err) => {
        alert('Error to connect to server');
      });
  };
 canDeactivate() {
    if (this.cricketerModel.firstName !== '') {
      return window.confirm('Are you sure you don’t want to save the data?');
    }
    return true;
  }

/*calling playertype using api service from local file*/
getPlayerType(){
  this._api.getPlayerType().subscribe(
    (resData) =>{
      this.playerType = resData;
    },(err)=>{
      alert('Error to connect to server for getting playertype');
    });
}

}
