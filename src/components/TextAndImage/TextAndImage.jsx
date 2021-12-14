import './textAndImage.styles.css'
const TextAndImage = ( props ) => {
    return (
        <section className={props.sectionContent}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt=''/>
        </section>    
       )
}


export default TextAndImage;