import { useEffect, useState } from "react"
import styles from './AllProjects.module.css'

const Project = ({ nomeUsuario }) => {

    const [projects, setProject] = useState([])
    const [chargingVisisble, setChargingVisible] = useState(true)
    // const [projectsVisible, setProjectsVisible] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) 

        .then(response => {
            if (!response.ok) {
                throw new Error('Usuário não encontrado')
            }
            return response.json()
        })
        .then(resJson => setTimeout(() => {
            setChargingVisible(false)
            setProject(resJson)
            
        }, 2000 ))
        .catch((e) => {
            setError(e)
            console.log(e)
            setChargingVisible(false)
            alert('Usuário não encontrado')
        })
    }, [nomeUsuario])

    return(
        <div className="container">
            {/* <button className={styles.button} onClick={() => setProjectsVisible(!projectsVisible)} type="button">Veja os projetos anteriores</button> */}    
            {chargingVisisble ? (
                <h2>carregando...</h2>
                ) : error ? (
                    <p>Você colocar um usuário inválido. Tente Novamente</p>
                ) : (
                <ul className={styles.list}> 
                    {projects.map(({name, language, html_url,id}) => (
                        <li className={styles.listItem} key={id}>
                            <h3 className={styles.itemName} >{name}</h3>
                            <p>{language}</p>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Veja o projeto</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Project