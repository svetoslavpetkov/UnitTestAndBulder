import { EmployeeBuilder } from "./EmployeeBuilder";
import { EmployeeUtil } from "./EmployeeUtil";
import { Gender, IEmployee } from "./model";

// constructs an object => Factory Method
const getEmployee = (name: string): IEmployee => ({
  name, age: 50, deleted: false, isFounder: true, gender: Gender.Female, hiredDate: new Date(), salary: 1000, skills: [], summary: "" 
})

const builder = EmployeeBuilder.get();

describe("EmployeeUtil.search", () => {
  it("should not filter at all given two chars searchTerm", () => {
    //Setup
    const input: Array<IEmployee> = [
      builder.withName("Ivan Ivanov").build(),
      builder.withName("Peter Justdoit").build(),
      builder.withName("Ivan Georgiev").build(),
    ];

    //Act
    const result = new EmployeeUtil().search(input, "Iv");

    //Assert
    expect(result).toEqual(input);
  }); 


  it("Should be working 2", () => {
    const person1 = getEmployee("Ivan Ivanov");
    const person2 = getEmployee("Peter Justdoit");
    const person3 = getEmployee("Ivan Georgiev");
    //Setup
    const input: Array<IEmployee> = [
      person1,
      person2,
      person3,
    ];

    //Act
    const result = new EmployeeUtil().search(input, "Ivan");

    //Assert
    expect(result).toEqual([ person1, person3]);
  });

  it("Should be working 3", () => {
    getEmployee("Ivan", false, true, false,5, 78, [ "", "", ""])
    const person1 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    const person2 = { name: "Peter Justdoit", age: 50, deleted: false, isFounder: false, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    const person3 = { name: "Ivan Georgiev", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    //Setup
    const input: Array<IEmployee> = [
      person1,
      person2,
      person3,
    ];

    //Act
    const result = new EmployeeUtil().search(input, "iVan");

    //Assert
    expect(result).toEqual([ person1, person2]);
  });
})


describe("EmployeeUtil.findBestCandidates", () => {
  it("Should work good", () => {
    const anyName = builder.withName("Any Person name");
    //Setup
    const person1 = anyName.withSkills("java").build();
    const person2 = anyName.withSkills("scala").build();
    const person3 = anyName.withSkills(".net", "haskel").build();
    const input: Array<IEmployee> = [
      person1,
      person2,
      person3,
    ];

    const input2: Array<string> = ["c#", "pascal"];

    //Act
    const result = new EmployeeUtil().findBestCandidates(input, input2);
    //Assert
    expect(result).toEqual([]);
  });

  it("Should work good 2", () => {
    //Setup
    const person1 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: ["c#"], summary: "test description" };
    const person2 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: ["c#", "pascal"], summary: "test description" };
    const person3 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [".net"], summary: "test description" };
    const input: Array<IEmployee> = [
      person1,
      person2,
      person3,
    ];

    const input2: Array<string> = ["c#", "pascal"];

    //Act
    const result = new EmployeeUtil().findBestCandidates(input, input2);
    //Assert
    expect(result).toEqual([person1, person2]);
  });


  const arrFromBuilders = (input: Array<EmployeeBuilder>): Array<IEmployee> => {
    return input.map((i) => i.build());
  }
  it("Should rate female higher having same skills", () => {
    const anyName = builder.withName("We do not care");
    const male = anyName.male();
    const female = anyName.female();
    //Setup
    const input: Array<IEmployee> = arrFromBuilders([
      male.withSkills("c#"),
      male.withSkills("pascal"),
      male.withSkills("c#", "pascal"),
      female.withSkills("c#"),
      female.withSkills("c#", "pascal"),
    ]);

    const input2: Array<string> = ["c#", "pascal"];

    //Act
    const result = new EmployeeUtil().findBestCandidates(input, input2);
    //Assert
    expect(result).toEqual([
      female.withSkills("c#", "pascal"),
      male.withSkills("c#", "pascal"),
      female.withSkills("c#"),
      male.withSkills("c#"),
      male.withSkills("pascal"),
    ]);
  });
})
