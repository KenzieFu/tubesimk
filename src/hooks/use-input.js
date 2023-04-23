import React, { useState } from 'react'

const useInput=(validateValue)=> {
    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIsTouched]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');

    const valueIsValid=validateValue(enteredValue,setErrorMessage);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler=(event)=>{
        setIsTouched(true);
    }

    const errorMessageHandler=(err)=>{
        setErrorMessage(err);
    }

    return{
        value:enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        errMsg:errorMessage
    }
}

export default useInput
