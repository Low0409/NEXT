import Styles from '../../styles/Home.module.css'


const Header =(props)=>(
    <>
    <h1 className={Styles.title1} >{props.title}</h1>
    </>
)



export default Header