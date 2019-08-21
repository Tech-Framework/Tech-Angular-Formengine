import { FieldType } from './../../model/field/field-type.model';
import { ContainerStyleDisplayType } from './../../model/container/container-style-display-type.model';
import { ConfigType } from './../../model/config-type.model';
import { Config } from './../../model/config.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.less']
})
export class Example2Component {

  config: Config = {
    configType: ConfigType.CONTAINER,
    isContainer: true,
    containerConfig: {
      containerStyleConfig: {
        display: ContainerStyleDisplayType.FLEX,
        border: '1px solid'
      }
    },
    items: [
      {
        configType: ConfigType.FIELD,
        isContainer: false,
        fieldType: FieldType.INPUT,
        fieldConfig: {
          fieldStyleConfig: {
            width: '100px',
            border: '1px solid'
          }
        }
      },
      {
        configType: ConfigType.FIELD,
        isContainer: false,
        fieldType: FieldType.NUMBER,
        fieldConfig: {
          fieldStyleConfig: {
            width: '100px',
            border: '1px solid'
          }
        }
      },
      {
        configType: ConfigType.CONTAINER,
        isContainer: true,
        containerConfig: {
          containerStyleConfig: {
            display: ContainerStyleDisplayType.FLEX,
            border: '1px solid'
          }
        },
        items: [
          {
            configType: ConfigType.CONTAINER,
            isContainer: true,
            items: [
              {
                configType: ConfigType.FIELD,
                isContainer: false,
                fieldType: FieldType.INPUT
              },
              {
                configType: ConfigType.FIELD,
                isContainer: false,
                fieldType: FieldType.NUMBER
              }
            ]
          },
          {
            configType: ConfigType.CONTAINER,
            isContainer: true,
            items: [
              {
                configType: ConfigType.FIELD,
                isContainer: false,
                fieldType: FieldType.INPUT
              },
              {
                configType: ConfigType.FIELD,
                isContainer: false,
                fieldType: FieldType.NUMBER
              }
            ]
          }
        ]
      }
    ]
  }

}
