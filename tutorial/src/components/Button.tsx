interface ButtonProps {
    label: string
    className?: string
}

const Button: React.FC<ButtonProps> = ({ label, className}) => {
    return (
        <button className={`${className} bg-blue-400 hover:bg-violet-500 text-blue-900 rounded `}>
            {label}
        </button>
    )
}
export default Button