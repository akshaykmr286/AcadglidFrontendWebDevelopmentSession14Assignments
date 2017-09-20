import { Component, OnInit, Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CricketerService } from "../../services/cricketer.service";
import { CricketerDropDownService } from '../../services/cricketer-drop-down.service';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-cricketer-list-ass1',
  templateUrl: './cricketer-list-ass1.component.html',
  styleUrls: ['./cricketer-list-ass1.component.css']
})
export class CricketerListAss1Component implements OnInit {

  
    /**Get the cricketerDetail from cricketer-app  */
  //@Input() criketerDetail: ICricketList[];
  criketerDetail: ICricketList[];
  constructor(private router:Router,
              private cricketerServ: CricketerService,
              private _cricketerDropDown:CricketerDropDownService,
              private _api: ApiService){}
  private searchData: string;

  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';

  ngOnInit() {
    //this.criketerDetail = this.cricketerServ.getCricketerList();
    this.getCricketers();
    this.searchData = '';
  }
  getCricketers(){
    this._api.fetchDataFromnode().subscribe(
      (data) => {
        this.criketerDetail = data;
        console.log(data);
    });
  }
}
