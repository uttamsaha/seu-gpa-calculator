document.getElementById('input').addEventListener('keyup', function () {
        const input = document.getElementById('input');
        const inputValue = input.value;
        if(inputValue <=0){
            document.location.reload(true);
        }
        
        if(inputValue <= 9){
              for (let i = 1; i <= inputValue; i++) {
            const inputItem = document.createElement('input');
            inputItem.setAttribute('id', i);
            const form = document.getElementById('form');
            form.appendChild(inputItem);
        }
        }
        else{
            alert('You cannot take more than 10 courses');
        }
    });

    document.getElementById('btn').addEventListener('click', function () {
        const inputsValue = document.getElementById('input').value;
        let sum = 0;
        let gpa;
        for (let i = 1; i <= inputsValue; i++) {
            let result = document.getElementById(i);
            let resultValue = result.value;
            // console.log(resultValue);

            if (resultValue >= 80 && resultValue <= 100) {
                gpa = 4.0 * 3.0;
            }
            else if (resultValue >= 75 && resultValue <= 79) {
                gpa = 3.75 * 3.0;
            }
            else if (resultValue >= 70 && resultValue <= 74) {
                gpa = 3.50 * 3.0;
            }
            else if (resultValue >= 65 && resultValue <= 69) {
                gpa = 3.25 * 3.0;
            }
            else if (resultValue >= 60 && resultValue <= 64) {
                gpa = 3.0 * 3.0;
            }
            else if (resultValue >= 55 && resultValue <= 59) {
                gpa = 2.75 * 3.0;
            }
            else if (resultValue >= 50 && resultValue <= 54) {
                gpa = 2.50 * 3.0;
            }
            else if (resultValue >= 45 && resultValue <= 49) {
                gpa = 2.25 * 3.0;
            }
            else if (resultValue >= 40 && resultValue <= 44) {
                gpa = 2.0 * 3.0;
            }
            else {
                gpa = 0;
            }
            sum = sum + gpa;
        }
        let finalGpa = sum / (inputsValue * 3);

        

        if(inputsValue > 0){
            document.getElementById('result-text').innerText = 'Your GPA is = ';
             document.getElementById('results').innerText = finalGpa;
        }
        else{
            alert('Your input number is negative or empty');
        }
       


    })