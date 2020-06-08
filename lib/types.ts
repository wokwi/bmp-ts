export const enum Compression {
  NONE = 0,
  BI_RLE8 = 1,
  BI_RLE4 = 2,
  BI_BIT_FIELDS = 3,
  BI_ALPHA_BIT_FIELDS = 6
}

export type BitsPerPixel = 1 | 4 | 8 | 16 | 24 | 32;

export interface IColor {
  red: number;
  green: number;
  blue: number;
  quad: number;
}

export interface IDecoderOptions {
  toRGBA?: boolean;
}

export interface IImage {
  width: number;
  height: number;
  bitPP: BitsPerPixel;
  data: Uint8Array;
  reserved1?: number;
  reserved2?: number;
  hr?: number;
  vr?: number;
  colors?: number;
  importantColors?: number;
  palette?: IColor[];
}

export interface IBitmapImage extends IImage {
  flag: string;
  fileSize: number;
  offset: number;
  headerSize: number;
  planes?: number;
  compression?: Compression;
  rawSize: number;
}
