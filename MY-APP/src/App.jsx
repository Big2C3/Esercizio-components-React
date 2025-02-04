import { Hello } from "./Hello";
export function App() {
    return (
        <div>
            <Hello />
            <hr />
            <Hello />  {/* il componente hallo viene usato più volte*/}
        </div>
    )
}