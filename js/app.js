// User Input Start
let userValid = false;
let day = document.querySelector(`#day`);
let month = document.querySelector(`#month`);
let year = document.querySelector(`#year`);
let submitButton = document.querySelector(`.age-break .break-icon`);
// User Input end
// Error text Start
let errorDay = document.querySelector(`#error-day`);
let errorMonth = document.querySelector(`#error-month`);
let errorYear = document.querySelector(`#error-year`);
// Error text End
// Result Area Start
let dayResult = document.querySelector(`#day-result`);
let monthResult = document.querySelector(`#month-result`);
let yearResult = document.querySelector(`#year-result`);
// Result Area End
// Age Calculator Start
submitButton.addEventListener(`click`, ageCalculate);
// ERROR MESSAGE START
day.addEventListener(`input`, (e) =>{
    if(day.value > 31){
        errorDay.innerHTML=`Must be a valid date`;
        userValid = false;
    }
    else{
        userValid = true;
    }
    if(day.value == 0){
        userValid = false;
        errorDay.innerHTML = `This Field is required`;
        userValid = false;
    }
})
month.addEventListener(`input`, (e) =>{
    if(month.value > 12){
        errorMonth.innerHTML=`Must be a valid month`;
        userValid = false
    }
    else{
        userValid = true
    }
    if(month.value == 0){
        userValid = false
        errorMonth.innerHTML = `This Field is required`;
        userValid = false
    }
})
year.addEventListener(`input`, (e) =>{
    if(year.value > 2024){
        errorYear.innerHTML=`Must be a valid year`;
        userValid = false;
        return;
    }
    else{
        userValid = true;
    }
    if(month.value == 0){
        userValid = false
        errorYear.innerHTML = `This Field is required`;
        userValid = false;
        return;
    }
})
// ERROR MESSAGE END
function ageCalculate (){
    if (userValid) {   
        let birthday = `${month.value}/${day.value}/${year.value}`;
        console.log(birthday);
        let birthDate = new Date(birthday);
        let calculateDate = Date.now() - birthDate ;
        let ageDate = new Date(calculateDate);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageday = ageDate.getUTCDay() - 1;
        // RESULT AREA START
        yearResult.innerHTML = ageYear;
        monthResult.innerHTML = ageMonth;
        dayResult.innerHTML = ageday;
        // RESULT AREA END
    } 
    else {
        alert(`Error`)
    }
}
// Age Calculator End