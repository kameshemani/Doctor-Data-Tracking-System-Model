src="Angular.min.js"

var docApp = angular.module("docModule",[]);

docApp.controller("docController",function($scope){
	var doctor = [{
			id : "1",
			firstName: "Philip",
			lastName: "Matthew",
		gender: "Male",
		field: "Child Specialist",
		qualification:"Ph.D. in Medical Science",
		yearsOfExperience:"5 year 3 months",
		age:"42",
		phoneNumber:"2184662714",
		email:"philip@dnah.com",
		pic:"doctor1.jpg",
		workinghours: "8 A.M. to 5 P.M",
		workingdays: "Mon,Tue,Thur,Fri",
		payperhour:"45",
		otherallowancepermonth:"360"
	},
	{
		id : "2",
		firstName: "John",
		lastName: "Hasting",
	gender: "Male",
	field: "ENT Specialist",
	qualification:"M.S. in Medical Science",
	yearsOfExperience:"3 year 1 month",
	age:"31",
	phoneNumber:"2184662732",
	email:"john@dnah.com",
	pic:"doctor2.jpg",
	workinghours: "9 A.M. to 5 P.M",
	workingdays: "Tue,Thur,Fri",
	payperhour:"40",
	otherallowancepermonth:"380"
},
	{
		id : "3",
		firstName: "Ravi",
		lastName: "Bopara",
	gender: "Male",
	field: "ENT Specialist",
	qualification:"M.S. in Medical Science",
	yearsOfExperience:"4 year 1 month",
	age:"33",
	phoneNumber:"2184662782",
	email:"ravi@dnah.com",
	pic:"doctor3.jpg",
	workinghours: "8 A.M. to 5 P.M",
	workingdays: "Mon,Tue,Thur,Fri",
	payperhour:"38",
	otherallowancepermonth:"360"
},
{
	id : "4",
	firstName: "Johnson",
	lastName: "Mitchell",
gender: "Male",
field: "Surgeon",
qualification:"B.S. in Medical Science",
yearsOfExperience:"2 year",
age:"26",
phoneNumber:"2184772732",
email:"johnson@dnah.com",
pic:"doctor4.jpg",
workinghours: "10 A.M. to 5 P.M",
workingdays: "Mon,Tue,Wed,Thur,Fri",
payperhour:"30",
otherallowancepermonth:"250"
},
{
	id : "5",
	firstName: "Lisa",
	lastName: "Hammilton",
gender: "Female",
field: "Gynecologist",
qualification:"Ph.D. in Medical Science",
yearsOfExperience:"5 year 1 month",
age:"33",
phoneNumber:"2184662789",
email:"lisa@dnah.com",
pic:"doctor5.jpg",
workinghours: "8 A.M. to 4 P.M",
workingdays: "Mon,Tue,Fri",
payperhour:"40",
otherallowancepermonth:"410"
},
{
	id : "6",
	firstName: "Sachin",
	lastName: "Joshi",
gender: "Male",
field: "Endocrinologist",
qualification:"M.S. in Medical Science",
yearsOfExperience:"6 year ",
age:"29",
phoneNumber:"2184662723",
email:"sachin@dnah.com",
pic:"doctor6.jpg",
workinghours: "11 A.M. to 7 P.M",
workingdays: "Mon,Tue,Thur,Fri,Sat",
payperhour:"42",
otherallowancepermonth:"450"
},
{
	id : "7",
	firstName: "Dwayne",
	lastName: "Smith",
gender: "Male",
field: "Dentist",
qualification:"Ph.D. in Medical Science",
yearsOfExperience:"4 year ",
age:"28",
phoneNumber:"2184562753",
email:"dwayne@dnah.com",
pic:"doctor7.jpg",
workinghours: "8 A.M. to 3 P.M",
workingdays: "Mon,Thur,Fri,Sun",
payperhour:"39",
otherallowancepermonth:"250"
},
{
	id : "8",
	firstName: "Green",
	lastName: "William",
gender: "Female",
field: "Nurse",
qualification:"M.S. in Medical Science",
yearsOfExperience:"2 year 8 month",
age:"25",
phoneNumber:"2184662271",
email:"green@dnah.com",
pic:"doctor8.jpg",
workinghours: "8:30 A.M. to 4:30 P.M",
workingdays: "Mon,Tue,Wed,Thur,Fri,Sat",
payperhour:"29",
otherallowancepermonth:"200"
},
{
	id : "9",
	firstName: "Ram",
	lastName: "Yendluri",
gender: "Male",
field: "Anaesthetist",
qualification:"M.S. in Medical Science",
yearsOfExperience:"8 months",
age:"22",
phoneNumber:"5184662720",
email:"ram@dnah.com",
pic:"doctor9.jpg",
workinghours: "9:30 A.M. to 6 P.M",
workingdays: "Mon,Tue,Wed,Thur,Fri",
payperhour:"31",
otherallowancepermonth:"325"
},
{
	id : "10",
	firstName: "Akash",
	lastName: "Akella",
gender: "Male",
field: "Dermatologist",
qualification:"Ph.D in Medical Science",
yearsOfExperience:"16 year 2 month",
age:"42",
phoneNumber:"2184662746",
email:"akash@dnah.com",
pic:"doctor10.jpg",
workinghours: "10:30 A.M. to 7:30 P.M",
workingdays: "Mon,Tue,Wed,Thur,Fri,Sat",
payperhour:"50",
otherallowancepermonth:"510"
}
	]
	
	$scope.doctor = doctor;
	$scope.sortColumn = "doctor";
	
	});




		