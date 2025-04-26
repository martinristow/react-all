"use client";

// import {serverSideFunction} from "@/utils/server-utils";

import {useTheme} from "@/components/theme-provider";
import {clientSideFunction} from "@/utils/client-utils";

export default function ClientRoutePage(){
    console.log("Client route rendered")
    // const result = serverSideFunction();
    const result = clientSideFunction()
    const theme = useTheme();
    return (
        <div>
            <h1 style={{
                color: theme.colors.secondary,
            }}>Server Route Page</h1>
            <p>{result}</p>
        </div>
    )
}