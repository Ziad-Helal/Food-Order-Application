import { createContext, useContext, useState } from "react";
import { foodMenu } from "../../assets/data";

const OrderMenuContext = createContext({
    foodMenu: foodMenu,
    orderMenu: [{ id: "0", name: "Name", price: 0, quantity: 0 }],
    addToOrder: (id, quantity) => {},
    removeFromOrder: (id) => {},
    items: 0,
    getTotalAmount: () => {},
});

export const OrderMenuProvider = ({ children }) => {
    const [orderMenu, setOrderMenu] = useState([]);
    const [items, setItems] = useState(0);

    const addToOrder = (id, quantity) => {
        const existedItem = orderMenu.find((item) => item.id === id);
        if (existedItem) {
            existedItem.quantity += quantity;
        } else {
            if (quantity > 0) {
                const newItem = foodMenu.find((item) => item.id === id);
                setOrderMenu([
                    ...orderMenu,
                    {
                        ...newItem,
                        quantity: quantity,
                    },
                ]);
            }
        }
        setItems(items + quantity);
    };

    const removeFromOrder = (id) => {
        const existedItem = orderMenu.find((item) => item.id === id);
        if (existedItem.quantity === 1) orderMenu.splice(orderMenu.indexOf(existedItem), 1);
        else existedItem.quantity--;
        setItems(items - 1);
    };

    const getTotalAmount = () => {
        let total = 0;
        orderMenu.forEach(({ price, quantity }) => {
            total += price * quantity;
        });
        return total;
    };

    const context = {
        foodMenu,
        orderMenu,
        addToOrder,
        removeFromOrder,
        items,
        getTotalAmount,
    };

    return <OrderMenuContext.Provider value={context}>{children}</OrderMenuContext.Provider>;
};

export const useOrderMenu = () => useContext(OrderMenuContext);
