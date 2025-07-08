import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    const [title, setTitle] = useState<string>('hello');
    return (
        <div> 
            COMMUNITY
            <button onClick={() => {alert('Hello Mr.Khan!')}} style={{margin: "15px"}}>
                pressMe
            </button>
        </div>
    );
};

export default withLayoutBasic(Community);