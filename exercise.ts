class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    print(): void {
        alert(`${this.firstName} ${this.lastName}`);
    }

}
class Employee extends Person {
    constructor(public firstName: string, public lastName: string, public employeeCode: string) {
        super(firstName, lastName)
    }
    print(): void {
        alert(`${this.firstName} ${this.lastName} : ${this.employeeCode}`);
    }


}

let employee = new Employee('Uday', 'Singh', 'IG0103');
employee.print();
