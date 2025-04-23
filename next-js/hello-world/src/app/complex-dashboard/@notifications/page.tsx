import Card from "@/components/card";
import Link from "next/link"

export default function Notifications(){
    return <Card>
        <div>Notifications</div>

        <Link href="/complex-dashboard/archived" className='font-medium p-2 underline'>Archived</Link>
    </Card>
}