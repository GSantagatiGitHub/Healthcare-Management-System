const currentCondition = ["level 1", "level 2", "level 3", "level 4", "level 5", "level 6"];
const randomDetails = ["Prescription given on 20/10/2020", "Prescription given on 16/5/2019", "Prescription given on 12/3/2021", "Prescription given on 11/09/2021", "Prescription given on 10/22/2018"];
const randomDosage = ["2 tablets per day", "1 tablet per day", "3 tablets per day", "4 tablets per day", "5 tablets per day"];


// when the submit button is clicked, the values of the form will appear in the table below
document.getElementById("submit").addEventListener("click", function() {
    const patient = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        prescriptions: document.getElementById("field").value,
    };

    const patientList = {
        id : Math.floor(Math.random() * 100),
        status : currentCondition[Math.floor(Math.random() * currentCondition.length)],
        details : randomDetails[Math.floor(Math.random() * randomDetails.length)],
        dosage : randomDosage[Math.floor(Math.random() * randomDosage.length)],
    };

    const result = document.getElementById("result");
    result.innerHTML += `
    <table class="table">
    <thead>
        <tr>
            <th class="th">ID Number</th>
            <th class="th">Status</th>
            <th class="th">Details</th>
            <th class="th">Dosage</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td class="tbody">${patientList.id}</td>
        <td class="tbody">${patientList.status}</td>
        <td class="tbody">${patientList.details}</td>
        <td class="tbody">${patientList.dosage}</td>
    </tr>
    </tbody>
    </table>
    `;

    // save data to local storage when save button is clicked

    document.getElementById("save").addEventListener("click", function() {
        localStorage.setItem("patientList", JSON.stringify(patientList));
        result.innerHTML = "Data is saved to local storage.";
        result.style.color = "green";
    });


    // clear data from local storage when clear button is clicked

    document.getElementById("clear").addEventListener("click", function() {
        localStorage.clear();
        result.innerHTML = "Data is cleared from local storage.";
        result.style.color = "red";
    })

});

    // when fetch data button is clicked show data API below
    document.getElementById("fetch").addEventListener("click", function() {
        const url = "https://randomuser.me/api/?results=10";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById("result");
                result.innerHTML += `
                <br>
                <hr>
                <h2>Patient Match</h2>
                <table>
                <tbody>
                <tr>
                    <th class="th">Name</th>
                    <th>${data.results[0].name.first}</th>
                    <th>${data.results[0].name.last}</th>
                </tr>
                <tr>
                    <th class="th">Email</th>   
                    <th>${data.results[0].email}</th>
                </tr>
                <tr>
                    <th class="th">Phone</th>
                    <th>${data.results[0].phone}</th>
                </tr>
                <tr>
                    <th class="th">Address</th>
                    <th>${data.results[0].location.city}</th>
                    <th>${data.results[0].location.state}</th>
                </tr>
                </tbody>
                </table>
                `;
            });
        });






