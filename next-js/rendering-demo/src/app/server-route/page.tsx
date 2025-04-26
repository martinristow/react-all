import {serverSideFunction} from "@/utils/server-utils";

export default function ServerRoutePage(){
    console.log("Server route rendered")
    const result = serverSideFunction();
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>{result}</p>
        </div>
    )
}