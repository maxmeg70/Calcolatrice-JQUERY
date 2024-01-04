$(()=>{
    
    getInput=()=>{
        first=Number($('#firstNumber').val());
        last=Number($('#lastNumber').val());
    } 
    
    $('#sum').on('click', ()=>{
        clearResultAndGetParameters();
        let tot=first+last;
        verifyAndCalculate(tot, first,last);
    });

    $('#subtr').on('click', ()=>{
        clearResultAndGetParameters();
        let tot=first-last;
        verifyAndCalculate(tot, first,last);
    });

    $('#multip').on('click', ()=>{
        clearResultAndGetParameters();
        let tot=first*last;
        verifyAndCalculate(tot, first,last);
    });

    $('#module').on('click', ()=>{
        $('#result').html('');
        let myNumber=Number($('#search').val());
        if(myNumber!==0){
            $('#errorMessage').html('');
            myNumber%2===0 ? $('#result').html("The number is even!") : $('#result').html("The number is odd!");
        }else{
            $('#result').html('');
            $('#errorMessage').html('Enter a number !!!');
            $('#search').focus();
        }
    });

    $('#divis').on('click', ()=>{
        clearResultAndGetParameters();
        if(verify(first,last)){
            if(last!==0){
                $('#errorMessage').html('');
                let tot = (first / last).toFixed(3);
                calculate(tot);   
            }else{
                $('#errorMessage').html('Divisione per zero non consentita!!');
                $('#lastNumber').focus();
            }
        }
    });

    $('#averg').on('click', ()=>{
        $('#errorMessage').html('');
        clearResultAndGetParameters();
        let tot=(first+last)/2;
        verifyAndCalculate(tot, first,last);
    }); 
    
    $('#expon').on('click', ()=>{
        $('#errorMessage').html('');
        clearResultAndGetParameters();
        let tot=first**last;
        verifyAndCalculate(tot, first,last);
    });

    function verify(first, last){
        if($('#firstNumber').val() ===''){
            $('#errorMessage').html('Enter the first number !!');
            $('#firstNumber').focus();
        }else if($('#lastNumber').val() ===''){
            $('#errorMessage').html('Enter the last number !!');
            $('#lastNumber').focus()
        }else{
            return true;
        }
    } 
    calculate=(tot)=>$('#result').html("Result is: " + tot);
    verifyAndCalculate=(tot, first,last)=>{verify(first,last) ? calculate(tot)+ $('#errorMessage').html('') : false;}
    clearResultAndGetParameters=()=>{$('#result').html('');getInput();}
});










