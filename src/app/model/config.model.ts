import { ContainerConfig } from './container/container-config.model';
import { FieldConfig } from './field/field-config.model';
import { FieldType } from './field/field-type.model';
import { ConfigType } from './config-type.model';

export interface Config {
    
    configType: ConfigType;
    isContainer: boolean;
    containerConfig?: ContainerConfig;
    name?: string;
    fieldType?: FieldType;
    fieldConfig?: FieldConfig;
    items?: Config[];

}

