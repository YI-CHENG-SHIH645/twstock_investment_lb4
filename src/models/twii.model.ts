import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'twii'}}})
export class Twii extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'sid', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sid: string;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'twii_open', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  twiiOpen?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'twii_high', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  twiiHigh?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'twii_low', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  twiiLow?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'twii_close', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  twiiClose?: number;

  @property({
    type: 'date',
    required: true,
    id: 1,
    postgresql: {columnName: 'date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  date: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Twii>) {
    super(data);
  }
}

export interface TwiiRelations {
  // describe navigational properties here
}

export type TwiiWithRelations = Twii & TwiiRelations;
