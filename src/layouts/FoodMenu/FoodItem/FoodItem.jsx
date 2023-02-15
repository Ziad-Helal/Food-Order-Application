import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../components";
import { useOrderMenu } from "../../../context";

export default function FoodItem({
    id = 0,
    name = "Name",
    description = "Description",
    price = 0,
}) {
    const { addToOrder } = useOrderMenu();

    const submitHandler = (event) => {
        event.preventDefault();
        addToOrder(id, Number(event.target[0].value));
        event.target[0].value = 0;
    };

    return (
        <li className="border-b-1e py-5e sm:flex sm:justify-between sm:items-center [&:last-child]:border-b-0">
            <div className="sm:pr-8e">
                <h3 className="text-xle font-semibold leading-6">{name}</h3>
                <p className="text-mde italic leading-5 my-2e">{description}</p>
                <p className="text-xle font-bold text-primary_1">${price}</p>
            </div>
            <form onSubmit={submitHandler} className="flex gap-3e flex-wrap sm:flex-col">
                <div className="text-lge font-semibold flex gap-4e items-center justify-between flex-auto sm:justify-start">
                    <label htmlFor={`price${id}`} className="">
                        Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        id={`price${id}`}
                        defaultValue={0}
                        min={0}
                        className="w-12e pl-2e rounded-lg border-1e border-background text-foreground bg-background"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full text-lge font-semibold sm:w-fit whitespace-nowrap"
                >
                    <FontAwesomeIcon icon={faPlus} /> Add
                </Button>
            </form>
        </li>
    );
}
