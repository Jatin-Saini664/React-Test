import react, {useState} from "react";

export default function Sequence1(){
    const [count, setCount] = useState(3);
    function plus(){
        setCount(count+1);
        let seq="";
        for(let i=1;i<=count;i++){
            seq+=i+" ";
        }
        console.log(seq);
    }

    function minus(){
        setCount(count-1);
        let seq = "";
        for(let i=1;i<=count;i++){
            seq+=i+" ";
        }
        console.log(seq);
    }
    return (
        <div className="container">
            <div className="sequence">Sequence 1</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}