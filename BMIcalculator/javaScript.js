const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
   const results =  document.querySelector('#results')

   if (height == '' || height <0 || isNaN(height)) {
    results.innerHTML = `please give a vaild height ${height}`;
   }else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a vaild weight ${weight}`;
   }else {
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`

    if (bmi <= 18.6) {
        results.innerHTML = 'under weight';
    } else if (bmi <=24.9 && bmi >=18.6){
        results.innerHTML = 'Normal Range';
    }else{
        results.innerHTML = 'Overwieght';
    }
   }

   
})