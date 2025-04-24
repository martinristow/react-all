import {type NextRequest} from "next/server";
import {headers, cookies} from "next/headers";

export async function GET(request: NextRequest){

    const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders);
    // console.log(requestHeaders.get('Authorization'));

    const cookieStore = await cookies();
    cookieStore.set("resultPerPage", "20");
    console.log(cookieStore.get("resultsPerPage"))

    const theme = request.cookies.get("theme")
    // console.log(theme)


    const headerList = await headers();
    // console.log(headerList.get("Authorization"));

    return new Response("<h1>Profile API data!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        },
    })
}