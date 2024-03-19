function calculateTotal() {
  // Retrieve the cost per liter and liters purchased from input fields
  var costPerLiter = parseFloat(document.getElementById('cost').value); // Get the cost per liter and parse it as a float
  var litersPurchased = parseFloat(document.getElementById('liters').value); // Get the liters purchased and parse it as a float
  
  // Calculate the total cost
  var totalCost = costPerLiter * litersPurchased; // Multiply cost per liter by liters purchased
  
  // Display the total cost on the webpage
  document.getElementById('totalCost').innerText = "Total cost: $" + totalCost.toFixed(2); // Set the text content of the element with id 'totalCost' to the total cost with 2 decimal places
}
