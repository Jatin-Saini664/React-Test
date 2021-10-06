import react , {useState, useEffect} from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, Setphone] = useState("");
    const [error, setError] = useState("");

    function onchange(e){
        if(e.target.name==="Phone"){
            let value=e.target.value;
            Setphone(value);
        }else if(e.target.name==="Name"){
            let value= e.target.value;
            setName(value);
        }else if(e.target.name==="Email"){
            setEmail(e.target.value);
        }

    }
    function submit(){
        let flag=false;
        let check = "@";
        for(let i=0;i<email.length;i++){
            if(email.charAt(i)==check.charAt(0))
                flag=true;
        }
        console.log(flag);
        if(flag&&phone.length>10){
            setError("Please enter a valid email and password")
        }
        else if(flag){
            setError("Please enter a valid email")
        }
        else if(phone.length!=10){
            setError("Please Enter a valid Phone Number")
        }else{
            setError("");
        }

    }

    useEffect(()=> {
        setError("");
    },[])
    return ( 
        <div className="Container">
            <h3>Name</h3>
            <input type="text" placeholder="Name" name="Name" value={name} onChange={onchange}/>
            <h3>Email</h3>
            <input type="email" placeholder="Email" onChange={onchange}/>
            <h3>Phone No.</h3>
            <input type="tel" name="Phone" id="" placeholder="Phone NO." onChange={onchange}/>
            <br />
            <div><span>Gender :&nbsp;</span>
            <span>Male </span>
            <input type="radio" name="gender" id="" />
            <span>Female </span>
            <input type="radio" name="gender" id="" /></div>
            
            <br />
            <button onClick={submit}>Submit</button>
            <br />
            <div>{error}</div>
        </div>
     );
}
 
export default Form;