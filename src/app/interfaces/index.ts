export interface IMenuResponse {
  status: string;
  message: string;
  data: IMenuData;
}

export interface IMenuData {
  items: IMenuItem[];
}

export interface IMenuItem {
  _id: string;
  name: string;
  slug: string;
}
