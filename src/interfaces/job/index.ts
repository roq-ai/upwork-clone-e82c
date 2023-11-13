import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  user_id: string;
  title: string;
  description?: string;
  budget?: number;
  status?: boolean;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  title?: string;
  description?: string;
}
