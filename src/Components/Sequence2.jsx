import react, {useState} from "react";

const Sequence2 = () => {
    const [count, setCount] = useState(5);
    function plus(){
        setCount(count+2);
        let seq="";
        for(let i=1;i<=count;i+=2){
            seq+=i+" ";
        }
        console.log(seq);
    }

    function minus(){
        setCount(count-2);
        let seq = "";
        for(let i=1;i<=count;i+=2){
            seq+=i+" ";
        }
        console.log(seq);
    }
    return (
        <div className="container">
            <div className="sequence">Sequence 2</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}
 
export default Sequence2;