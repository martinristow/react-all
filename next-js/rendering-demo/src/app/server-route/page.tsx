import {serverSideFunction} from "@/utils/server-utils";
import {clientSideFunction} from "@/utils/client-utils";

export default function ServerRoutePage(){
    console.log("Server route rendered")
    const result = serverSideFunction();
    const clientResult = clientSideFunction();
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>{result}</p>
            <p>{clientResult}</p>
        </div>
    )
}