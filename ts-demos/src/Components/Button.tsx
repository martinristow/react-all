interface ButtonInterface {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

const Button = ({label, onClick, disabled} : ButtonInterface) => {
    return (
        <div>
            <button disabled={disabled} onClick={onClick}>{label}</button>
        </div>
    )
}
export default Button
