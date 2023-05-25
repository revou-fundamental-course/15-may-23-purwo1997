// Get reference to the link elements
const tabSquare = document.getElementById("square-link");
const tabRectangle = document.getElementById("rectangle-link");

// Get reference to the page elements
const pageSquare = document.getElementById("page-square");
const pageRectangle = document.getElementById("page-rectangle");

// Event listeners to handle click events
tabSquare.addEventListener("click", setActivePage);
tabRectangle.addEventListener("click", setActivePage);

// Function to set the active page
function setActivePage(event) {
    // Change active link
    tabSquare.classList.remove('active');
    tabRectangle.classList.remove('active');

    //Add active class to the clicked link
    const clickedLink = event.target;
    clickedLink.classList.add("active");

    // Hide inactive page
    pageSquare.classList.remove("active");
    pageRectangle.classList.remove("active");

    // Get ID of the clicked link
    const clickedLinkId = event.target.id;

    // Show the Page
    if (clickedLinkId === "square-link") {
        pageSquare.classList.add("active");
    } else if (clickedLinkId === "rectangle-link") {
        pageRectangle.classList.add("active");
            }
}

// Function to restrict other input than number
function validateNumericInput(input) {
    // Remove any non-numeric and non-decimal characters
    input.value = input.value.replace(/[^0-9.]/g, '');
  
    // Ensure only one decimal point is allowed
    const count = (input.value.match(/\./g) || []).length;
    if (count > 1) {
      input.value = input.value.replace(/\.+$/, '');
    }
}

// Persegi

// Make button function to get output for Luas Persegi from the input value
function hitungLuas() {
    // Get the value from the input
    var sisiLuas = document.getElementById("sisi-luas").value;
    var output = document.getElementById("output-luas");
    const resultSquare = sisiLuas*sisiLuas
    const fixedLuasSquare = resultSquare.toFixed(2);

    // Print text and result for the output
    document.getElementById("rumus-luas").innerHTML = sisiLuas + ' x ' + sisiLuas;
    document.getElementById("result-luas").innerHTML = fixedLuasSquare
    
    // Display the output paragraph 
    output.style.display = "block";
}

// Make the reset function to hide the output Luas Persegi
function resetLuas(flag) {
    document.getElementById("output-luas").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-luas").value = '';
}

// Make button function to get output for Keliling Persegi from the input value
function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var output = document.getElementById("output-keliling");

    document.getElementById("rumus-keliling").innerHTML = sisiKeliling + ' x 4';
    document.getElementById("result-keliling").innerHTML = sisiKeliling*4
    
    output.style.display = "block";
}

// Make the reset function to hide the output Keliling Persegi 
function resetKeliling(flag) {
    document.getElementById("output-keliling").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-keliling").value = '';
}

// Persegi Panjang

// Make button function to get output for Luas Persegi Panjang from the input value
function hitungLuasRectangle() {
    var panjangLuas = document.getElementById("panjang-luas").value;
    var lebarLuas = document.getElementById("lebar-luas").value;
    var output = document.getElementById("output-luas-r");
    const resultRect = panjangLuas*lebarLuas
    const fixedResultLuasRect = resultRect.toFixed(2);

    document.getElementById("rumus-luas-r").innerHTML = panjangLuas + ' x ' + lebarLuas;
    document.getElementById("result-luas-r").innerHTML = fixedResultLuasRect
    
    output.style.display = "block";
}
   
// Make the reset function to hide the output Luas Persegi Panjang
function resetLuasRectangle(flag) {
    document.getElementById("output-luas-r").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("panjang-luas").value = '';
    document.getElementById("lebar-luas").value = '';
}

// Make button function to get output for Keliling Persegi Panjang from the input value
function hitungKelilingRectangle() {
    const panjangKeliling = document.getElementById("panjang-keliling").value;
    const lebarKeliling = document.getElementById("lebar-keliling").value;
    var output = document.getElementById("output-keliling-r");
    const totalKeliling = parseFloat(panjangKeliling, 10) + parseFloat(lebarKeliling, 10)
    const fixedResultKelilingRect = totalKeliling.toFixed(2);

    document.getElementById("rumus-keliling-r").innerHTML = 
    '2 x (' + panjangKeliling + ' + ' + lebarKeliling + ')';
    document.getElementById("result-keliling-r").innerHTML = 2*fixedResultKelilingRect
    
    output.style.display = "block";
}

// Make the reset function to hide the output Keliling Persegi Panjang
function resetKelilingRectangle(flag) {
    document.getElementById("output-keliling-r").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("panjang-keliling").value = '';
    document.getElementById("lebar-keliling").value = '';
}

// Time
function updateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    currentTimeElement.textContent = formattedTime;
  }
  
// Update the time every second
setInterval(updateTime, 1000);