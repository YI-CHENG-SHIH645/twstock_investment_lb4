import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'ohlcv'}}})
export class Ohlcv extends Entity {
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
    postgresql: {columnName: 'volume', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  volume?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'transaction', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  transaction?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'trade_value', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  tradeValue?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'open', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  open?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'high', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  high?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'low', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  low?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'close', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  close?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'updn', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  updn?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'change', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  change?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'last_best_bid_price', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  lastBestBidPrice?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'last_best_bid_volume', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  lastBestBidVolume?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'last_best_ask_price', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  lastBestAskPrice?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'last_best_ask_volume', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  lastBestAskVolume?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'pe', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  pe?: number;

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

  constructor(data?: Partial<Ohlcv>) {
    super(data);
  }
}

export interface OhlcvRelations {
  // describe navigational properties here
}

export type OhlcvWithRelations = Ohlcv & OhlcvRelations;
