export default function Button({lable, ...props}) {
    const clesses = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    
    return (
        <button className={clesses} {...props}>{lable}</button>
    )
}