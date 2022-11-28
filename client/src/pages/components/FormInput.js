import './FormInput.css'


const FormInput = (props) => {
    return (
        <div className = "forminput"> 
            
            <input placeholder =  {props.placeholder} onChange = {e=>props.set(e.target.value)}/>
        </div>
    )
}

export default FormInput