import BmpDecoder from './decoder';
import BmpEncoder from './encoder';
import { IDecoderOptions, IImage } from './types';
export * from './types';

export default {
  decode: (bmpData: Uint8Array, options?: IDecoderOptions) =>
    new BmpDecoder(bmpData, options),
  encode: (imgData: IImage) => new BmpEncoder(imgData)
};
