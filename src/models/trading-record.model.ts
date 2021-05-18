import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'trading_record'}}
})
export class TradingRecord extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'tid', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  tid: number;

  @property({
    type: 'string',
    length: 10,
    postgresql: {columnName: 'sid', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  sid?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'open_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  openDate?: string;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'open_price', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  openPrice?: number;

  @property({
    type: 'string',
    length: 5,
    postgresql: {columnName: 'long_short', dataType: 'character varying', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  longShort?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'shares', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  shares?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'close_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  closeDate?: string;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'close_price', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  closePrice?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'holding_days', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  holdingDays?: number;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'pnl', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  pnl?: number;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'tax', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  tax?: number;

  @property({
    type: 'number',
    precision: 24,
    postgresql: {columnName: 'fee', dataType: 'float', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  fee?: number;

  @property({
    type: 'string',
    length: 30,
    postgresql: {columnName: 'strategy_name', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  strategyName?: string;

  @property({
    type: 'string',
    length: 10,
    postgresql: {columnName: 'trader_code', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  traderCode?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_check', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  lastCheck?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TradingRecord>) {
    super(data);
  }
}

export interface TradingRecordRelations {
  // describe navigational properties here
}

export type TradingRecordWithRelations = TradingRecord & TradingRecordRelations;
