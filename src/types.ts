export interface RobinData {
  id: string;
  picSrc?: string;
  occupation?: string;
  location?: string;
  socials?: Social[];
}

type Social = any;
