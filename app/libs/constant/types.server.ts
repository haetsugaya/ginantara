export interface NavItem {
  url: string;
  name: string;
}

export interface ErrorItem {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
}
