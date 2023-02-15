export default function Button({
    children,
    type = "button",
    kind = "primary",
    className = "",
    onClick = () => {},
}) {
    const kinds = {
        primary: "text-foreground bg-primary_1 hover:text-primary_1 hover:bg-foreground",
        secondary: "text-primary_1 bg-foreground hover:text-foreground hover:bg-primary_1",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `px-10e py-1e border-1e border-primary_1 rounded-full transition ${kinds[kind]} ` +
                className
            }
        >
            {children || "Button"}
        </button>
    );
}
