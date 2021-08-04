import { IEmployee } from "./model";

export class EmployeeUtil {
  search(employees: Array<IEmployee>, searchTerm: string): Array<IEmployee> {
    if (searchTerm.length < 3) {
      return employees;
    }
    return [];
  }


  findBestCandidates(employees: Array<IEmployee>, requiredSkills: Array<string>): Array<IEmployee> {
    return [];
  }
}
