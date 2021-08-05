import { Gender, IEmployee } from "./model";

export class EmployeeBuilder {
  private static defaultValues: IEmployee = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
  static get(): EmployeeBuilder {
    return new EmployeeBuilder(EmployeeBuilder.defaultValues);
  }

  private constructor(private employee: IEmployee) {}


  with(employeeNewState: Partial<IEmployee>): EmployeeBuilder {
    return new EmployeeBuilder({ ...this.employee, ...employeeNewState } );
  }

  withName(name: string): EmployeeBuilder {
    return this.with({ name });
  }

  withSkills(...skills: Array<string>): EmployeeBuilder {
    return this.with({ skills });
  }

  withGender(gender: Gender): EmployeeBuilder {
    return this.with({ gender });
  }

  male(): EmployeeBuilder {
    return this.withGender(Gender.Male);
  }

  female(): EmployeeBuilder {
    return this.withGender(Gender.Male);
  }

  build(): IEmployee {
    return this.employee;
  }
}