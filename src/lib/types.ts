export interface UserData {
  user_id: string;
  email: string;
  name: string;
  picture: string;
  email_verified: boolean;
  user_metadata: UserMetadata;
  last_login: Date | string;
  given_name: null;
  family_name: null;
  blocked: boolean;
}

export interface OrderData {
  order_id: string;
  image_url: string;
  name: string;
  date: Date;
  time_spent: string;
  order_value: string;
  commission: string;
}

export interface UserMetadata {
  role: number | string;
  org: string;
}

export interface Profile {
  company_logo: string;
  contact_name: string;
  contact_email: string;
  industry: string;
}
