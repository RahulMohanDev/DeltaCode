// Your code here
function Employee(name, yearOfJoin, location) {
    let salary;
    this.name = name;
    this.yearOfJoin = yearOfJoin;
    this.location = location;
    this.getEmployeeDetails = function() {
        return `Name: ${this.name}, Year of Join: ${this.yearOfJoin}, Location: ${this.location}`;
    }
    this.setSalary = function(newSalary) {
        salary=newSalary;
    }
    this.getSalary = function() {
        return salary;
    }
}
