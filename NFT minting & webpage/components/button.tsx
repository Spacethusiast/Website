type ButtonProps = {
    handleClick: () => void
}
export const Button1 = (props: ButtonProps) => {
    return <button onClick = {props.handleClick}>click</button>
}