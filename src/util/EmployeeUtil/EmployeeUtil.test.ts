import { EmployeeUtil } from "./EmployeeUtil";
import { Gender, IEmployee } from "./model";


describe("EmployeeUtil.test", () => {
  it("Should not do anything", () => {
    //Setup
    const input: Array<IEmployee> = [
      { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Female, hiredDate: new Date(), salary: 1000, skills: [], summary: "" },
      { name: "Peter Justdoit", age: 50, deleted: false, isFounder: false, gender: Gender.Female, hiredDate: new Date(), salary: 1000, skills: [], summary: "" },
      { name: "Ivan Georgiev", age: 50, deleted: false, isFounder: true, gender: Gender.Female, hiredDate: new Date(), salary: 1000, skills: [], summary: "" },
    ];

    //Act
    const result = new EmployeeUtil().search(input, "Iv");

    //Assert
    expect(result).toEqual(input);
  }); 


  it("Should be working 2", () => {
    const person1 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    const person2 = { name: "Peter Justdoit", age: 50, deleted: false, isFounder: false, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    const person3 = { name: "Ivan Georgiev", age: 50, deleted: true, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: [], summary: "" };
    //Setup
    const input: Array<IEmployee> = [
      person1,
      person2,
      person3,
    ];

    //Act
    const result = new EmployeeUtil().search(input, "ivan");

    //Assert
    expect(result).toEqual([ person1]);
  });

  it("Should be working 3", () => {
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
    //Setup
    const person1 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: ["java"], summary: "test description" };
    const person2 = { name: "Ivan Ivanov", age: 50, deleted: false, isFounder: true, gender: Gender.Male, hiredDate: new Date(), salary: 1000, skills: ["scala"], summary: "test description" };
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


  it("Gender matters", () => {
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
})
