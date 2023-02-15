import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components";
import { useOrderMenu } from "../../context";

const variants = {
    animate: {
        scale: [1.1, 1],
    },
};

export default function CartButton({ onClick = () => {} }) {
    const { items } = useOrderMenu();

    return (
        <motion.section key={items} variants={variants} animate="animate">
            <Button
                onClick={onClick}
                className="flex gap-6e items-center font-semibold text-sme lg:text-lge leading-3 lg:leading-4 bg-secondary_1"
            >
                <span className="flex gap-3e items-center text-background">
                    <FontAwesomeIcon icon={faReceipt} className="text-xle" />
                    <p className="hidden sm:block">Your Order</p>
                </span>
                <span className="my-2e lg:my-1e px-4e py-3e rounded-full text-foreground bg-primary_1">
                    {items}
                </span>
            </Button>
        </motion.section>
    );
}
