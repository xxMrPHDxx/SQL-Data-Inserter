let states = [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
let names = ["Kasen Weaver","Rylan Odom","Ada Curry","Asher Collins","Jocelyn Cross","Sydney Shields","Shiloh Mcmahon","Jaslyn Zhang","Jair Wong","Ben Whitaker","Zoey Hopkins","Konnor Humphrey","Phoebe Rhodes","Adam Jackson","Megan Bauer","Janelle Jensen","Mireya Compton","Mauricio Barrera","Coleman Brandt","Katrina Tran","Jane Santana","Makenna Webb","Veronica Bullock","Conrad Joseph","Karter Bowers","Jamarcus Marshall","Tia Gutierrez","Wesley Reese","Alexandra Barrett","Diamond Sutton","Maximillian Jefferson","Amare Larson","Aubree Wang","Lauren Schneider","Keyla Hunt"];
let customers = []; for(i=1;i<=35;i++){customers[i] = i;}
let questions = [{number:1,no:"1", value:"Have you ever ridden in an Uber vehicle as customer?"},{number:2,no:"2a",value:"Generally, I feel that I am satisfied with Uber's decision-making process."},{number:3,no:"2b",value:"During decision-making, both Uber and I have equal influence."},{number:4,no:"3a",value:"I wish  I had never started a relationship with Uber."},{number:5,no:"3b",value:"Uber is my preferred method of transportation."},{number:6,no:"4a",value:"I feel safe as a customer riding with Uber."},{number:7,no:"4b",value:"Uber (and their policies) has done an adequate job of keeping customers safe in Uber vehicles."},{number:8,no:"4c",value:"I am willing to ride with Uber in the future."},{number:9,no:"10",value:"Which factor is most important to you when choosing a form of transportation?"}];
let answers = [["Yes.","No."],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Highly agree","Agree","Neither agree nor disagree","Disagree","Highly disagree"],["Safety","Price (affordability)","Ease of use (convinience)","Other"]];
let agegroup = ["18 to 24","25 to 34","35 to 44","45 to 54","55 to 64","65 to 74","75 to older"];

// UBERUSER
// names.forEach((name,i,arr) => {
// 	i++;
// 	if(i>30)return;
// 	let username = name.toLowerCase().replace(' ','') + parseInt(Math.random() * 99 + 1);
// 	let password = "";
// 	for(n=0;n<10;n++){
// 		password += (parseInt(Math.random() * n + 1)).toString();
// 	}
// 	let email = name.toLowerCase().replace(' ','_') + parseInt(Math.random() * 99 + 1) + (Math.random() < 0.6 ? "@gmail.com" : "@yahoo.com") + (Math.random() < 0.5 ? ".my" : "");
// 	let phone = "";
// 	for(n=0;n<12;n++){
// 		phone += parseInt(Math.random() * 9 + 1);
// 	}
// 	document.write("<span>INSERT INTO UBERUSER VALUES (" + i + ",'" + username + "','" + password + "','" + email + "','" + phone + "');</span><br/>");
// })

// CUSTOMER
// names.forEach((name,i,arr) => {
// 	i++;
// 	let gender = (Math.random() < 0.4 ? "Male" : "Female");
// 	let address = states[parseInt(Math.random() * states.length)] + ", USA";
// 	let owncar = (Math.random() < 0.1 ? 0 : 1);
// 	let raceid = parseInt(Math.random() * 5 + 1);
// 	let uberuserid = (i <= 30 ? i : "''");
// 	let agegroupid = (Math.random() < 0.2 ? 6 : parseInt(Math.random() * 4 + 1));
// 	document.write("<span>INSERT INTO CUSTOMER VALUES (" + i + ",'" + gender + "','" + address + "'," + owncar + "," + 
// 		raceid + "," + uberuserid + "," + agegroupid + ",'" + name + "');</span><br/>");
// })

// QUESTION
// questions.forEach(question => {
// 	document.write("<span>INSERT INTO QUESTION VALUES (" + question.number + ",'" + question.no + "','" + question.value.replace("'","''") + "',1);<span><br/>");
// })

// ANSWER
// let n=0;
// answers.forEach((answer,i,arr)=> {
// 	i++;
// 	answer.forEach((a,j,arr2) => {
// 		n++;
// 		document.write("<span>INSERT INTO ANSWER VALUES (" + n + ",'" + a + "'," + i + ");</span><br>");
// 	});
// })

// SURVEY
// document.write("INSERT INTO SURVEY VALUES (1,'Survey Questionnaire for Uber Customers','This survey aims to examine your perceptions about Uber. This survey is to be used strictly as part of a classroom assignment int the Jack J. Valenti School of Communication at the University of Houston.	Survey Questionnaire for Uber Customers');");

// SELECT
// customers.forEach(customer => {
// 	let answer_id = 0;
// 	questions.forEach(question => {
// 		let answer = answers[question.number-1];
// 		let random = parseInt(answer.length * Math.random()) + answer_id + 1;
// 		if(question.number == 1){
// 			random = (customer <= 30 ? 1 : 2);
// 		}
// 		document.write("<span>INSERT INTO \"SELECT\" VALUES (" + customer + "," + random + ");</span><br>");
// 		answer_id += answer.length;
// 	});
// 	document.write("<br>");
// });

// AGEGROUP
// agegroup.forEach((group,i,arr) => {
// 	i++;
// 	document.write("<span>INSERT INTO AGEGROUP VALUES (" + i + ",'" + group + "');<span><br/>");
// })


let text;
function readText(){
	text = document.querySelector("#JSONText").value.split("\n");
}

function _createSQL(callback){
	document.body.append(document.createElement("br"));
	text.forEach(t => {
		let output = 		document.createElement("span");
		let oText = "";
		let tx = t.split(",");
		callback(tx,oText);
		output.innerHTML = oText;
		document.body.append(output);
		document.body.append(document.createElement("br"));
	});
}

function __createSQL(){
	let outputBox = document.querySelector("#SQLOutput");
	outputBox.value = "";
	let lines = document.querySelector("#JSONText").value.split("\n");
	let template = document.querySelector("#SQLTemplate").value;

	const delim = "[[]]";
	let cache = template.split(delim);

	lines.forEach(line => {
		let array = line.split(',');

		if(array.length != cache.length-1) return;

		let command = "";
		cache.forEach((c,i,arr) => {
			if(i < array.length)
				command += c + array[i];
			else
				command += c;
		});
		outputBox.value += command + "\n";
	})
}

function createSQL(){
	let cache = [];
	let outputBox = document.querySelector("#SQLOutput");
	outputBox.value = "";
	let lines = document.querySelector("#JSONText").value.split("\n");
	let template = document.querySelector("#SQLTemplate").value;

// bla [[3]] and [[1]] with [[2]]

	const delim1 = "[[";
	const delim2 = "]]";

	let cache2 = template.split(delim1);
	cache2.forEach(c => {
		let cache3 = c.split(delim2);
		cache3.forEach(c2 => {
			if(c2 != "") cache.push(c2);
		})
	});

	lines.forEach(line => {
		let array = line.split(',');

		if(array.length == 1) return;

		let command = "";
		cache.forEach((c,i,arr) => {
			if(i % 2 == 0){
				command += c;
			} else {
				let value = array[parseInt(c)];
				command += (value ? value : "''");
			}
		});
		outputBox.value += command.replace(/\t/g,"");
		console.log(command.replace(/\t/g,""));
	})
}