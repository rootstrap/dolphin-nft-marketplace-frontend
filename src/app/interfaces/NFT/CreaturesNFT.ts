export interface CreaturesPackInfo {
  success: boolean;
  result: Result;
}

export interface Result {
  id: number;
  name: string;
  description: string;
  initialSize: number;
  collection: Collection;
  price: number;
  maxPerUser: number;
  enabled: boolean;
  hidden: boolean;
  startTime: string;
  endTime: string;
  createdAt: string;
  quoteCurrency: string;
  numRemaining: number;
}

export interface Collection {
  name: string;
  twitterUrl: string;
  discordUrl: string;
  homepageUrl: string;
  description: string;
  createdAt: string;
}
