import { FoodItem_Form } from "../../../layouts";

export default function FoodItem({
    id = 0,
    name = "Name",
    description = "Description",
    price = 0,
}) {
    return (
        <li className="border-b-1e py-5e sm:flex sm:justify-between sm:items-center [&:last-child]:border-b-0">
            <div className="sm:pr-8e">
                <h3 className="text-xle font-semibold leading-6">{name}</h3>
                <p className="text-mde italic leading-5 my-2e">{description}</p>
                <p className="text-xle font-bold text-primary_1">${price}</p>
            </div>
            <FoodItem_Form id={id} />
        </li>
    );
}
