import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../components";
import { useOrderMenu } from "../../../context";

export default function OrderItem({
    id = "0",
    name = "Name",
    price = 0,
    quantity = 0,
    onUpdate = () => {},
}) {
    const { addToOrder, removeFromOrder } = useOrderMenu();

    const add = () => {
        addToOrder(id, 1);
        onUpdate();
    };

    const remove = () => {
        removeFromOrder(id);
        onUpdate();
    };

    return (
        <li className="flex items-center justify-between border-b-1e py-5e">
            <section className="pr-4e">
                <h3 className="text-lge leading-6">{name}</h3>
                <p className="flex gap-4e items-center text-lge">
                    ${price}
                    <span className="p-1.5e my-1e leading-4 border-1e rounded-md border-background">
                        x {quantity}
                    </span>
                </p>
            </section>
            <section className="flex flex-col gap-2e items-center justify-center">
                <p className="text-lge sm:text-xle text-center leading-6">
                    Amount: <span>${price * quantity}</span>
                </p>
                <div className="flex gap-2e leading-3">
                    <Button
                        kind="secondary"
                        onClick={remove}
                        className="px-4e py-1.5e sm:px-6e sm:py-3e rounded-lg"
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Button
                        kind="secondary"
                        onClick={add}
                        className="px-4e py-1.5e sm:px-6e sm:py-3e rounded-lg"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
            </section>
        </li>
    );
}
