import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoImage from '../assets/frango.png'
import styles from './HomePage.module.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  return (
    <div className={styles.homePage}>
      <header>
        <img 
          src={logoImage} 
          alt="GymFrangos Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Bem vindo ao GymFrangos!</h1>
      </header>
      <main>
        <section className={styles.hero}>
          <h2 className={styles.subtitle}>Sua jornada começa aqui</h2>
          <p className={styles.description}>Acompanhe sua evolução e alcance seus objetivos</p>
          <button 
            onClick={handleGetStarted}
            className={styles.button}
          >
            Começar Agora
          </button>
        </section>
      </main>
    </div>
  )
}
export default HomePage