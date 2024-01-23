function solve(employees) {

    //using .map 
    const employeeData = employees
        .map((employee) => ({
            name: employee,
            personalNumber: employee.length
        }));

        employeeData.forEach(employee => {
            console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
        });

        // using for of
    // const employeeList = [];

    // for (const employee of employees) {
    //     employeeList.push({
    //         'name': employee,
    //         'personalNumber': employee.length
    //     })
    // }

    // employeeList.forEach((employee) => 
    // console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);