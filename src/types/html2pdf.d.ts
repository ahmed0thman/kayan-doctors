declare module 'react-html2pdf' {
  export const Preview: any;
  export const print: any;
  // Add other exports as needed
}
declare module 'dom-to-image' {
  export function toPng(node: HTMLElement, options?: any): Promise<string>;
  export function toJpeg(node: HTMLElement, options?: any): Promise<string>;
  export function toSvg(node: HTMLElement, options?: any): Promise<string>;
  export function toBlob(node: HTMLElement, options?: any): Promise<Blob>;
  export function toCanvas(node: HTMLElement, options?: any): Promise<HTMLCanvasElement>;
}