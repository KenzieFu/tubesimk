import React from 'react'
import Modal from '../../UI/Modal'
import classes from './Login.module.css'
import useInput from '../../hooks/use-input'

const LoginModal = (props) => {


  const nameValidate=(value,errorHandler)=>{
    if(value.trim() !=='')
      {
        errorHandler('Email tidak boleh kosong')
        return false;
      }
    else if(value.includes('@'))
    {
      errorHandler('Email tidak valid');
      return false;
    }

    return true;
  }


  const {value: enteredEmail,hasError:emailHasError,valueChangeHandler:emailChangeHandler,inputBlurHandler:emailBlurHandler,errMsg:emailErrMsg}=useInput(nameValidate);

 

  
  

  return (
    <Modal style={{ padding:"20px" }} onClose ={props.onClose}>
      <div className={classes["close-logo"]} onClick={props.onClose}>+</div>
      <header className={classes["login-header"]}>
        <img width="130px" height="150px" src="/assets/loginlogo.png" alt="" />
        <div  >
          <h1 className={classes["logo-h1"]}>Selamat Datang di Methodist Charles Wesley</h1>
          <p className={classes["logo-p"]}>Login untuk memiliki akses ke berbagai fasilitas sekolah</p>
  
        </div>
      </header>
        <form className={classes.form} action="">
          <div>
          <label style={{ fontWeight:"bold" }}  htmlFor="email">Email</label>
          <input onBlur={emailBlurHandler} onChange={event=>emailChangeHandler(event)} value={enteredEmail} type="text" id='email' />
          {emailHasError && <p>{emailErrMsg}</p>}
          </div>
          <div>
          <label style={{ fontWeight:"bold" }} htmlFor="pass">Password</label>
          <input  type="password" id='pass' />
          </div>

          <button className={classes["login-button"]}>Masuk</button>
          
        </form>
    </Modal>
  )
}

export default LoginModal