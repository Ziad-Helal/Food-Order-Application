import { OrderPage } from "./pages";
import { OrderMenuProvider } from "./context";

function App() {
    return (
        <OrderMenuProvider>
            <OrderPage />
        </OrderMenuProvider>
    );
}

export default App;
