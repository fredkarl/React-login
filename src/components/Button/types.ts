export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    title?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}