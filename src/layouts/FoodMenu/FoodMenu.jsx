import { FoodItem } from "../../layouts";
import { foodMenu } from "../../assets/data";

export default function FoodMenu() {
    return (
        <section className="p-4e">
            <h2 className="hidden">Food Menu</h2>
            <ul className="bg-foreground text-background px-6e rounded-3xl md:max-w-3xl md:mx-auto">
                {foodMenu.length === 0 ? (
                    <li>No Dishes Available</li>
                ) : (
                    foodMenu.map(({ id, name, description, price }) => (
                        <FoodItem
                            key={`mni${id}`}
                            id={id}
                            name={name}
                            description={description}
                            price={price}
                        />
                    ))
                )}
            </ul>
        </section>
    );
}
