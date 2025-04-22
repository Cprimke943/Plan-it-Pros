declare module "imagepig" {
  type ImagePigResult = {
    save: (path: string) => Promise<void>;
  };

  function ImagePig(apiKey: string): {
    default: (prompt: string) => Promise<ImagePigResult>;
  };

  export = ImagePig;
}
