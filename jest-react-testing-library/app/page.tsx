import Home from "../components/Home";
import NotesForm from "@/components/NotesForm";

export default function Home1() {
    return (
        <div className="size-full flex flex-col gap-8 items-center justify-center">
            <Home/>
            <NotesForm/>
        </div>
    );
}
