export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { className, ...restProps } = props
    return <button className={`${className}`} {...restProps} />
}