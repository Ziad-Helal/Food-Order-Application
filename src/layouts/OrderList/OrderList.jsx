import { useState } from "react";
import { Button } from "../../components";
import { OrderItem } from "../../layouts";
import { useOrderMenu } from "../../context";

export default function OrderList({ onClose = () => {} }) {
    const [reRender, SetReRender] = useState(false);
    const { orderMenu, getTotalAmount } = useOrderMenu();

    return (
        <section className="fixed top-0 left-0 w-full h-screen z-10 flex justify-center items-center">
            <h2 className="hidden">Order Receipt</h2>
            <div
                onClick={onClose}
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-black text-opacity-50 -z-10"
            />
            {orderMenu.length === 0 ? (
                <p className="text-center w-3/4 max-w-xl text-background bg-foreground rounded-3xl px-6e py-10e font-bold">
                    Go back and order somthing 😋
                </p>
            ) : (
                <ul className="w-3/4 max-w-xl text-background bg-foreground rounded-3xl px-6e font-semibold">
                    {orderMenu.map(({ id, name, price, quantity }) => (
                        <OrderItem
                            key={`ori${id}`}
                            id={id}
                            name={name}
                            price={price}
                            quantity={quantity}
                            onUpdate={() => SetReRender(!reRender)}
                        />
                    ))}
                    <li className="py-5e">
                        <section className="text-xle flex items-center justify-between">
                            <h3>Total Amount</h3>
                            <p>${getTotalAmount()}</p>
                        </section>
                        <section className="flex gap-4e justify-center mt-4e">
                            <Button kind="secondary" onClick={onClose} className="px-6e sm:px-10e">
                                Close
                            </Button>
                            <Button className="px-6e sm:px-10e">Order</Button>
                        </section>
                    </li>
                </ul>
            )}
        </section>
    );
}
