var rows = d3.select("body")
            .selectAll("tr")
            .data(employees)
            .enter()
            .append("tr")
rows.append("td")
    .text(function(employee)
         {
            return employee.lastName
         })
rows.append("td")
    .append("img")
     .attr("src", (function(employee)
         {
        return employee.photo
         }))
