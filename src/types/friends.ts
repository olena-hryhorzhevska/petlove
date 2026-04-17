export type FriendsWorkingDays = {
  from: string;
  to: string;
  isOpen: boolean;
  _id: string;
};

export type FriendsItem = {
  _id: string;
  title: string;
  url: string;
  imageUrl: string;
  address: string;
  email: string;
  phone: string;
  workDays: FriendsWorkingDays[];
};

export type FriendsResponse = FriendsItem[];
