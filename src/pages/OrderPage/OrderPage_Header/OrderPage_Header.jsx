import { useState } from "react";
import { CartButton, OrderList } from "../../../layouts";

export default function OrderPage_Header() {
    const [listIsOpen, setListIsOpen] = useState(false);

    return (
        <header
            className={`p-4e lg:px-8e bg-violet-400 dark:bg-violet-900 bg-opacity-90 dark:bg-opacity-90 sticky top-0 transition-none`}
        >
            <section className="flex gap-4e items-center flex-col sm:flex-row sm:justify-between max-w-6xl mx-auto">
                <a href="/">
                    <h1 className="text-4xl leading-8 font-bold">Our Menu</h1>
                </a>
                <CartButton onClick={() => setListIsOpen(true)} />
            </section>
            {listIsOpen && <OrderList onClose={() => setListIsOpen(false)} />}
        </header>
    );
}
