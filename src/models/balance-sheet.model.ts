import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'balance_sheet'}}
})
export class BalanceSheet extends Entity {
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
    scale: 0,
    postgresql: {columnName: 'total_equity', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  totalEquity?: number;

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

  constructor(data?: Partial<BalanceSheet>) {
    super(data);
  }
}

export interface BalanceSheetRelations {
  // describe navigational properties here
}

export type BalanceSheetWithRelations = BalanceSheet & BalanceSheetRelations;
