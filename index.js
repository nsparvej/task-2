let InputField = document.getElementById('input1');

let OutputField = document.getElementById('output1');



let btnIn = document.getElementById('btn1');
btnIn.addEventListener('click', function () {
    let value = InputField.value;
    OutputField.value = value;
    InputField.value = "";
    alert('Your task is successful');
});

let btnOut = document.getElementById('btn2');
btnOut.addEventListener('click', function () {
    
    let ans = confirm('Are you sure?');
    if(ans== true){
        OutputField.value = "";
    }
    
});



