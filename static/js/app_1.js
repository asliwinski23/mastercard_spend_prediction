// import the data
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a function to loop through the data and add it's contents to a table
function buildTable(data) {
    // clear the data  If we didn't clear existing data first, then we would find ourselves reinserting
    // data that already exists, thus creating duplicates and making a bit of a mess. 
    // It's good practice to clear the existing data first to give ourselves a clean slate to work with.
    tbody.html("");

    // write a forEach function to loop through the data
    data.forEach((dataRow) => {
        // create a variable to append a row to the table
        let row = tbody.append("tr");
        // tell our code put each sighting onto its own row of data
        // Loop through each field in the dataRow and add
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to a table
            let cell = row.append("td");
            // add each value as a table cell (td)
            cell.text(val);
        });
    });
}

// build a function to create a filter by date button for the table
function handleClick() {
    // use d3 to create a couple of variables to hold our date data, both filtered and unfiltered
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if a date is filtered by the user, filter the data to only show sightings on that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// recognize when a date filter click happens
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);