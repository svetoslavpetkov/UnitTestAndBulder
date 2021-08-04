export enum Gender {
  Male,
  Female,
  Unknown,
}

export interface IEmployee {
  name: string;
  age: number;
  gender: Gender;
  isFounder: boolean;
  deleted: boolean;
  hiredDate: Date;
  salary: number;
  skills: Array<string>;
  summary: string;
}

export interface IManager extends IEmployee {
  subordinates: Array<IManager>;
}

export interface IOrganizationTree extends IManager {}
