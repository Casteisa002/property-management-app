let records = [];


console.log(records);

let form = document.getElementById("maintenanceForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let property = document.getElementById("property").value;
    let location = document.getElementById("location").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let cost = Number(document.getElementById("cost").value);

    let newRecord = {
        property: property,
        location: location,
        category: category,
        description: description,
        cost: cost
    };

    records.push(newRecord);
displayRecords();
    console.log(records);
});
function displayRecords() {
    let list = document.getElementById("maintenanceList");

    list.innerHTML = "";

    let total = 0;

    for (let record of records) {
        let listItem = document.createElement("li");

        listItem.textContent =
            record.property + " — " +
            record.location + " — " +
            record.category + " — " +
            record.description + " — $" +
            record.cost;

        list.appendChild(listItem);

        total = total + record.costll;
    }

    document.getElementById("totalCost").textContent =
        "Total Maintenance Cost: $" + total;
}