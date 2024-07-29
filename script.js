const grade_to_points = {
    "A+": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0
};

const credits_r20_cse = {
    "I": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "II": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 2,
        "Lab1": 1.5,
        "Lab2": 1,
        "Lab3": 1.5,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "III": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "IV": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "V": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VI": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VII": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Sub6": 3,
        "Lab1": 3,
        "Lab2": 2
    },
    "VIII": {
        "Lab1": 12
    }
};

const credits_r20_cse_ai_ml = {
    "I": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "II": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 2,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 1,
        "Lab5": 0
    },
    "III": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "IV": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "V": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VI": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VII": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Sub6": 3,
        "Lab1": 3,
        "Lab2": 2
    },
    "VIII": {
        "Lab1": 12
    }
};

const credits_r20_eee = {
    "I": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "II": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "III": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "IV": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "V": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VI": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VII": {
        "Sub1": 2,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1,
        "Lab3": 2
    },
    "VIII": {
        "Lab1": 12
    }
};

const credits_r20_ece = {
    "I": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1,
        "Lab3": 3,
        "Lab4": 2,
        "Lab5": 0
    },
    "II": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 2,
        "Lab3": 3,
        "Lab4": 1,
        "Lab5": 0
    },
    "III": {
        "Sub1": 3,
        "Sub2": 4,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1,
        "Lab2": 1.5,
        "Lab3": 1,
        "Lab4": 2,
        "Lab5": 0
    },
    "IV": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 4,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1,
        "Lab3": 1,
        "Lab4": 2,
        "Lab5": 0
    },
    "V": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 2,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VI": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1,
        "Lab4": 2
    },
    "VII": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Sub6": 3,
        "Lab1": 3,
        "Lab2": 2
    },
    "VIII": {
        "Lab1": 12
    }
};

const credits_r20_civil = {
    "I": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "II": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 3,
        "Lab4": 1.5,
        "Lab5": 0
    },
    "III": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "IV": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2,
        "Lab5": 0
    },
    "V": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VI": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Lab1": 1.5,
        "Lab2": 1.5,
        "Lab3": 1.5,
        "Lab4": 2
    },
    "VII": {
        "Sub1": 3,
        "Sub2": 3,
        "Sub3": 3,
        "Sub4": 3,
        "Sub5": 3,
        "Sub6": 3,
        "Lab1": 3,
        "Lab2": 2
    },
    "VIII": {
        "Lab1": 12
    }
};

var tot_gpa;
var cumulative_gpa;

function clearContent(elementID) { 
    document.getElementById(elementID).innerHTML = ""; 
} 

function showProgressBar() {
    var progressBar = document.getElementById('progress_bar');
    progressBar.style.display = 'block';
}

function hideProgressBar() {
    var progressBar = document.getElementById('progress_bar');
    progressBar.style.display = 'none';
}

function showProgress() {
    setTimeout(function() {
        var progressBar = document.getElementById('progress');
        var processingMessage = document.getElementById('processing-message');
        progressBar.style.animation = 'none';
        progressBar.style.width = '100%';
        processingMessage.textContent = 'Fetching complete! Wait a few seconds while we arrange your data!';
    }, 2 * 5 * 1000); //1000 = 1 sec
}

document.getElementById("server").addEventListener('change', () => {
    const selected_server = document.getElementById("server").value;
    const elements = document.getElementsByClassName('acquire_temp_cors');
    
    for (let i = 0; i < elements.length; i++) {
        if (selected_server === "server1") {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'block';
        }
    }
});

document.getElementById("textInput").addEventListener('input', () => {
    const reg_no = document.getElementById("textInput").value.length;
    const res_button = document.getElementById("fetchButton");
    if (reg_no==8 || reg_no==9){
        res_button.style.cursor = 'pointer';
        res_button.disabled = false;
    } else {
        res_button.style.cursor = 'not-allowed';
        res_button.disabled = true;
    }
});

function addResultToMainPage(name, regNo, grades, tot_gpa, cumulative_gpa){

    const display_results = document.getElementById("results");

    const stu_details = document.createElement('div');
    stu_details.className = "stu_details";
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    headerCell1.textContent = "Name: "+name;
    headerRow.appendChild(headerCell1);
    const headerCell2 = document.createElement('th');
    headerCell2.textContent = "Reg No: "+regNo;
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);
    stu_details.appendChild(table);

    display_results.appendChild(stu_details);

    for(const [semester, subjects] of Object.entries(grades)){
        const sem_div = document.createElement('div');
        sem_div.className = "semester";

        const sem_heading = document.createElement('h2');
        sem_heading.textContent = "Semester "+semester;
        sem_div.appendChild(sem_heading);

        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const headerCell1 = document.createElement('th');
        headerCell1.textContent = 'Subject';
        headerRow.appendChild(headerCell1);
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = 'Grade';
        headerRow.appendChild(headerCell2);

        table.appendChild(headerRow);

        for (const [subject, grade] of Object.entries(subjects)){
            const dataRow = document.createElement('tr');

            const dataCell1 = document.createElement('td');
            dataCell1.textContent = subject;
            dataRow.appendChild(dataCell1);

            const dataCell2 = document.createElement('td');
            dataCell2.textContent = grade;
            dataRow.appendChild(dataCell2);

            table.appendChild(dataRow);
        }
        sem_div.appendChild(table);

        const gpa_p1 = document.createElement('p');
        gpa_p1.className = 'gpa';
        const strong_p1 = document.createElement('strong');
        strong_p1.textContent = "Current Semester GPA: "+tot_gpa[semester];
        gpa_p1.appendChild(strong_p1);
        sem_div.appendChild(gpa_p1);

        const gpa_p2 = document.createElement('p');
        gpa_p2.className = 'gpa';
        const strong_p2 = document.createElement('strong');
        strong_p2.textContent = "CGPA: "+cumulative_gpa[semester];
        gpa_p2.appendChild(strong_p2);
        sem_div.appendChild(gpa_p2);

        display_results.appendChild(sem_div);
    }
}

const fetchWithRetry = async (url, retries = 3, interval = 5000) => {
    for (let i = 0; i < retries; i++) {
        try {
            var proxyUrl;
            var server = document.getElementById("server");

            if (server.value == "server1"){
                proxyUrl = 'https://api.allorigins.win/get?url=';
            } else {
                proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            }

            const response = await axios.get(proxyUrl+url, { responseType: 'text' });

            hideProgressBar();
            return response.data;
        } catch (error) {
            if (i < retries - 1) {
                console.log(`Attempt ${i + 1} failed. Retrying in ${interval / 1000} seconds...`);
                document.getElementById("processing-message").innerHTML = `Attempt ${i + 1} failed. Retrying in ${interval / 1000} seconds...`;
                await new Promise(resolve => setTimeout(resolve, interval));
            } else {
                hideProgressBar();
                document.getElementById("results").innerHTML = "Server Down please try again";
                throw new Error(`Request failed after ${retries} attempts: ${error.message}`);
            }
        }
    }
};

document.getElementById('fetchButton').addEventListener('click', () => {
    clearContent("results");
    showProgressBar();
    var textValue = document.getElementById('textInput').value.toLowerCase();
    var radioButtonValue;
    var radioButtons = document.getElementsByName('r20');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioButtonValue = radioButtons[i].value;
            break;
        }
    }
    const url = 'https://rvrjcce.ac.in/examcell/results/regnoresultsR1.php?q='+textValue;

    fetchWithRetry(url)
        .then(htmlResponse => {

            tot_gpa = {};
            cumulative_gpa = {};

            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlResponse, 'text/html');

            const gradesTable = doc.querySelectorAll('table');
            const rows = gradesTable[0].querySelectorAll('tr');

            // check for results
            let found = true;

            rows.forEach(row => {
                const cellText = row.cells[0].textContent;
                if (cellText.includes("IS NOT FOUND")) {
                    found = false;
                }
            });

            if (!found){
                throw new Error("Regno not found");
            }

            const nameElement = doc.querySelector('font');
            const name = nameElement.querySelectorAll('b')[1].textContent.trim();
            const regNo = textValue;

            let semesterGrades = [];

            for (let i = 2; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.querySelectorAll('td');
                const semesterNumber = cells[0].textContent.trim().split(" ")[1];
                const grades = Array.from(cells).slice(1).map(cell => cell.textContent.trim());

                semesterGrades.push([semesterNumber, grades.join(" ")]);
            }

            const subjects = ["Sub1", "Sub2", "Sub3", "Sub4", "Sub5", "Sub6", "Sub7"];
            const labs = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5", "Lab6"];

            var grades = {};
            
            for(let v=0; v<semesterGrades.length; v++){
                const semester = semesterGrades[v][0];
                grades[semester] = {};
                const grades_list = semesterGrades[v][1].split(" ");
                for(let i=0; i<grades_list.length; i++){
                    if(i<subjects.length && grades_list[i]!="--"){
                        grades[semester][subjects[i]] = grades_list[i];
                    } else if (grades_list[i]!="--") {
                        grades[semester][labs[i-subjects.length]] = grades_list[i];
                    }
                    else{
                        continue;
                    }
                }
            }
            
            var sum_of_tot_credits = 0;
            var credits;
            
            if(regNo.includes('cs') || regNo.includes('it') || regNo.includes('cd') || radioButtonValue=="r20_cse" || radioButtonValue=="r20_it" || radioButtonValue=="r20_cse_ds" || radioButtonValue=="r20_cse_iot"){
                credits = credits_r20_cse;
            } else if (regNo.includes('cm') || radioButtonValue=="r20_cse_ai_ml"){
                credits = credits_r20_cse_ai_ml;
            } else if (regNo.includes('ec') || radioButtonValue=="r20_ece"){
                credits = credits_r20_ece;
            } else if (regNo.includes('ee') || radioButtonValue=="r20_eee"){
                credits = credits_r20_eee;
            } else if (regNo.includes('ce') || radioButtonValue=="r20_civil"){
                credits = credits_r20_civil;
            }

            for (let sem of Object.keys(grades)){
                var sem_gpa = 0;
                for (let sub of Object.keys(grades[sem])){
                    sem_gpa += credits[sem][sub]*grade_to_points[grades[sem][sub]];
                }
                var sum_curr_cred = 0;
                for (let cred of Object.values(credits[sem])){
                    sum_curr_cred += cred;
                }
                sem_gpa /= sum_curr_cred;
                tot_gpa[sem] = sem_gpa;
                sum_of_tot_credits += sum_curr_cred;
                var sum_of_gpa_cred = 0
                for (let sem of Object.keys(tot_gpa)){
                    sum_curr_cred = 0;
                    for (let cred of Object.values(credits[sem])){
                        sum_curr_cred += cred;
                    }
                    sum_of_gpa_cred += sum_curr_cred*tot_gpa[sem];
                }
                cumulative_gpa[sem] = (sum_of_gpa_cred/sum_of_tot_credits).toFixed(2);
            }
            for (let sem of Object.keys(tot_gpa)){
                tot_gpa[sem] = tot_gpa[sem].toFixed(2);
            }

            addResultToMainPage(name, regNo, grades, tot_gpa, cumulative_gpa);
        })
        .catch(error => {
            if (error.message === "Regno not found") {
                document.getElementById('results').innerHTML = 'RegNo not Found';
            } else {
                document.getElementById('results').innerHTML = 'Error in fetching or calculation';
            }
            console.error('Error fetching data:', error);
        });
});