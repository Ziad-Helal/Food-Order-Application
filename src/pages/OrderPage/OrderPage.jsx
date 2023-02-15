import { OrderPage_Header, OrderPage_Footer } from "../../pages";
import { FoodMenu } from "../../layouts";

export default function OrderPage() {
    return (
        <>
            <OrderPage_Header />
            <main>
                <FoodMenu />
            </main>
            <OrderPage_Footer />
        </>
    );
}
