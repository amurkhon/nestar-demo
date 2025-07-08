import { useState } from "react";

const Community = () => {
    console.log("Community component - Pages Router")
    const [title, setTitle] = useState<string>('hello');
    return <div> 
            COMMUNITY
            <button onClick={() => {alert('Hello Mr.Khan!')}} style={{margin: "15px"}}>
                pressMe
            </button>
        </div>
};

export default Community;