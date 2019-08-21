import { FieldStyleConfig } from './../model/field/field-style-config.model';
import { FieldType } from '../model/field/field-type.model';
import { FieldConfig } from '../model/field/field-config.model';
import { Config } from '../model/config.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {

  private _config: Config;
  fieldConfig: FieldConfig;
  fieldStyleConfig: FieldStyleConfig;
  fieldType: FieldType;

  @Input()
  set config(_config: Config){
    this._config = _config;
    this.fieldType = this._config.fieldType;
    this.fieldConfig = this._config.fieldConfig;
    if (this.fieldConfig){
      this.fieldStyleConfig = this.fieldConfig.fieldStyleConfig;
    }
  }

  get config(){
    return this._config;
  }

  constructor() { }

  ngOnInit() {
  }

}
