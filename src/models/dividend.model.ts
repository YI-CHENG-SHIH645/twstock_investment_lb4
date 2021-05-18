import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'dividend'}}
})
export class Dividend extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'sid', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sid: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'sname', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sname: string;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'before', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  before?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'after', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  after?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  date?: string;

  @property({
    type: 'string',
    required: true,
    length: 21,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'character varying', dataLength: 21, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  id: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dividend>) {
    super(data);
  }
}

export interface DividendRelations {
  // describe navigational properties here
}

export type DividendWithRelations = Dividend & DividendRelations;
