import styles from './User.module.css'

const User = ({ nomeUsuario }) => {

    return(
        <header className={styles.header} >
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name} > {nomeUsuario} </h1>
        </header>
    )
}

export default User






