let pronoun = ["the","our"];
let adj = ["great","big"];
let noun = ["jogger","racoon"];

function generateDomains() {
    let domainList = "<ul class='domainList'>";
    for (let pr=0; pr<pronoun.length; pr++){
        for (let ad=0; ad<adj.length; ad++){
            for (let nn=0; nn<noun.length; nn++){
                domainList += `<li>${pronoun[pr]}${adj[ad]}${noun[nn]}`;
            }
        }
    }
    domainList += "</ul>";
    return domainList;
}
  
// Set up an event listener to trigger the function when the button is clicked
document.getElementById("generateBtn").addEventListener("click", function() {

    // Generate a new domain and display it
    const domains = generateDomains();
    
    // Get the element where you want to display the domain
    const domainElement = document.getElementById("domainOutput");
  
    // Set the domain text and apply italic style
    domainElement.innerHTML = domains;
    domainElement.style.fontStyle = "italic"; // Apply italic style


    // Clear the domain output area and show the spinner
    domainElement.innerHTML = "";
    spinner.style.display = "block";

    // Simulate a delay (e.g., 1 second) before generating domains
    setTimeout(() => {
        // Generate the domains and update the domain output
        const domains = generateDomains();

        // Set the domain text and apply italic style
        domainElement.innerHTML = domains;
        domainElement.style.fontStyle = "italic"; // Apply italic style

        // Hide the spinner after the domains are shown
        spinner.style.display = "none";

    }, 500); // 1-second delay before populating the domains

    console.log(domains);
});
  