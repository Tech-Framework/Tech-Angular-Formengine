import { ContainerConfig } from './../model/container/container-config.model';
import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../model/config.model';
import { ContainerStyleConfig } from '../model/container/container-style-config.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  private _config: Config;
  containerConfig: ContainerConfig;
  containerStyleConfig: ContainerStyleConfig;
  
  items: Config[];

  @Input()
  set config(_config: Config){
    this._config = _config;
    if (!this._config.isContainer){
      console.log(this._config);
      throw Error('Config for container is invalid!');
    }
    this.items = this._config.items;
    this.containerConfig = this._config.containerConfig
    if (this.containerConfig){
      this.containerStyleConfig = this.containerConfig.containerStyleConfig
    }
  }

  get config(){
    return this._config;
  }

  constructor() { }

  ngOnInit() {
  }

}
