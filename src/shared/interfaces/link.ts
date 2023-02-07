import LinkType from "./../enums/linkType";

interface Link {
  anchor: string;
  classes?: string;
  duration?: number;
  offset?: number;
  smooth?: boolean;
  spy?: true;
  text: string;
  to?: string;
  type: LinkType;
}

export default Link;
