var blank = " "
d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(function(employee)
         {
            return employee.firstName  + blank + employee.lastName;
        } )
    