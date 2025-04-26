import fs from "fs"




export const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf8")
    return <>
        <h1>Server Component One</h1>

    </>
}