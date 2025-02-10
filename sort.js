// Initialize the counter and the array
var names = [];

document.addEventListener("DOMContentLoaded", function() {
    document.theform.newname.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            SortNames();
        }
    });
});

function SortNames() {
    // Get the name from the text field
    var thename = document.theform.newname.value.trim();
    if (thename === "") return; // Ignore empty input
    
    // Convert to uppercase and add to the array
    names.push(thename.toUpperCase());
    
    // Sort the array
    names.sort();
    
    // Display the numbered list
    document.theform.sorted.value = names.map((name, index) => `${index + 1}. ${name}`).join("\n");
    
    // Clear input field for next entry
    document.theform.newname.value = "";
}