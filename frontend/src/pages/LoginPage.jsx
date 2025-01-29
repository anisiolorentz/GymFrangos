import React, { useState } from 'react'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  const handleGoogleSignIn = () => {
    console.log('Google sign-in initiated')
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Olá!</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={styles.input}
          />
          
          <input
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className={styles.input}
          />
          
          <button type="submit" className={styles.button}>
            Entrar
          </button>
          <button type="button" className={styles.button}>
            Criar conta
          </button>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleSignIn}
            className={`${styles.button} ${styles.googleButton}`}
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google logo" 
              className={styles.googleIcon} 
            />
            Entrar com Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage