interface Link {
  anchor: string;
  classes?: string;
  duration?: number;
  offset?: number;
  smooth?: boolean;
  spy?: true;
  text: string;
  to?: string;
  type: string;
}

export default Link;
