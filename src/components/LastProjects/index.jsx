import { useEffect, useState } from "react"

import styles from './LastProjects.module.css'

const name = '23-React-Projeto-To-do'
const language = 'React'
const link = 'https://...'

const Provisorio = ({ nomeUsuario }) => {
    
    return (
        <div className="container">
            <h1 className={styles.title}>Últimos Projetos</h1>
            <ul className={styles.list}>
                <li className={styles.listItem} >
                    <div className={styles.itemName}>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.itemLanguage}>
                        <p><b>Linguagem:</b> {language} </p>
                    </div>
                    <a className={styles.itemLink} target="_blank" href={link}>Confira o projeto</a>
                </li>
                <li className={styles.listItem} >
                    <div className={styles.itemName}>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.itemLanguage}>
                        <p><b>Linguagem:</b> {language} </p>
                    </div>
                    <a className={styles.itemLink} target="_blank" href={link}>Confira o projeto</a>
                </li>
                <li className={styles.listItem} >
                    <div className={styles.itemName}>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.itemLanguage}>
                        <p><b>Linguagem:</b> {language} </p>
                    </div>
                    <a className={styles.itemLink} target="_blank" href={link}>Confira o projeto</a>
                </li>
            </ul>
        </div>
    )
}

export default Provisorio