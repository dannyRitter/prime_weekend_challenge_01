var employeeArray = [];

var totalSalaries = 0;

$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();

		var values = {};

		//console.log($("#employeeInfo").serializeArray());
		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		$("#employeeInfo").find("input[type=text]").val("");
		//console.log(values);
		employeeArray.push(values);
		appendDom(values);

		function addSalaries(x){
			return totalSalaries += x;
		}

		$("#monthlySalary").text("COST OF SALARIES PER MONTH = " + addSalaries(parseInt(values.employeeSalary) / 12));	
	
		$("#employeeContainer").on("click", "button", function(){
			$(this).parent().remove();
		});
	});
});


function appendDom(employee){
	//console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>First Name: " + employee.employeeFirstName + "</p>");
	$el.append("<p>Last Name: " + employee.employeeLastName + "</p>");
	$el.append("<p>Employee ID: " + employee.employeeID + "</p>");
	$el.append("<p>Employee Title: " + employee.employeeTitle + "</p>");
	$el.append("<p>Employee Salary: " + employee.employeeSalary + "</p>");
	$el.append("<button class='deleteEmployee'>Delete New Employee</button>");
}

//console.log(totalSalaries);