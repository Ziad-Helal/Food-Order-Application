import { Button } from "../../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useOrderMenu } from "../../../../context";

export default function FoodItem_Form({ id = 0 }) {
    const { addToOrder } = useOrderMenu();

    const submitHandler = (event) => {
        event.preventDefault();
        addToOrder(id, Number(event.target[0].value));
        event.target[0].value = 1;
    };

    return (
        <form onSubmit={submitHandler} className="flex gap-3e flex-wrap sm:flex-col">
            <div className="text-lge font-semibold flex gap-4e items-center justify-between flex-auto sm:justify-start">
                <label htmlFor={`price${id}`} className="">
                    Quantity
                </label>
                <input
                    type="number"
                    name="quantity"
                    id={`price${id}`}
                    defaultValue={1}
                    min={1}
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
    );
}
