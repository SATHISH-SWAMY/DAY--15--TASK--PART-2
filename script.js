document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form values
      const firstName = form.elements['firstName'].value;
      const lastName = form.elements['lastName'].value;
      const address = form.elements['address'].value;
      const pincode = form.elements['pincode'].value;
      const gender = form.elements['gender'].value;
      const foodOptions = form.elements['food'];
      const selectedFood = Array.from(foodOptions)
        .filter(option => option.selected)
        .map(option => option.value);
      const state = form.elements['state'].value;
      const country = form.elements['country'].value;
  
      // Create a new table row and append to the table
      const newRow = table.insertRow(table.rows.length);
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectedFood.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
  
      // Clear the form fields after updating the record
      form.reset();
    });
  });
  