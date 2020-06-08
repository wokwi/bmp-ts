import BmpDecoder from './decoder';
import BmpEncoder from './encoder';

export default {
  decode: (bmpData: Uint8Array, options?: IDecoderOptions) =>
    new BmpDecoder(bmpData, options),
  encode: (imgData: IImage) => new BmpEncoder(imgData)
};
