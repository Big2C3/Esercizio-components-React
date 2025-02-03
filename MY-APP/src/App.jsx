import { Hello } from "./Hello";
import { Message } from "./Message";
export function App() {
    return (
        <div>
            <Hello />
            <hr />
            <Hello />  {/* il componente hallo viene usato più volte*/}
            <Message /> {/* ho renderizzato "Message" in App */}
        </div>
    )
}