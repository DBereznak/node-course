


const weatherForm = document.querySelector('form');
const searched = document.querySelector('input');
weatherForm.addEventListener('submit', (event) => {
 event.preventDefault(); 
 const city = searched.value;
 if(city == null || city == ''){
     document.querySelector('.error').innerHTML = `<p>The field is empty. Please enter a city</p>`;
 } else {
    fetch('http://localhost:3000/weather?address=' + city ).then((response) => {
        response.json().then((data) => {
            if(data.temperature == undefined || data.summary == undefined){
                document.getElementById('error').innerHTML = '<span style="color: red">That was not a valid location. Please enter a valid location</span>';
                document.getElementById('temperature').innerHTML = '';
                document.getElementById('summary').innerHTML = '';
            } else {
                document.getElementById('error').innerHTML = '';
               document.getElementById('temperature').innerHTML = 'Temperature: ' + data.temperature;
               document.getElementById('summary').innerHTML = 'Daily Summery: ' + data.summary;
            }
           
        });
    });
 }
console.log(searched.value);
})