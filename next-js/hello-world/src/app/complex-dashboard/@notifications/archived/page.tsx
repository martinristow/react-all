import Card from "@/components/card";
import Link from "next/link"

export default function ArchivedNotifications(){
    return <Card>
        <div>Archived Notifications</div>
        <Link href="/complex-dashboard" className='font-medium p-2 underline'>Default</Link>
    </Card>
}