export type TermCardContent = {
  title: string;
  body: string;
  isPulsed?: boolean;
  isCentered?: boolean;
};

export type TabChangedEvent = {
  name: string,
  top: number,
  left: number,
}

export type ImageContent = {
  src: string,
  description: string,
}
