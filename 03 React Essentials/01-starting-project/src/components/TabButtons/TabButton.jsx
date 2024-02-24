export default function TabButton(props) {
    return <li><button>{props.children}</button></li>
}

// this also will work using destructuring
// export default function TabButton({children}) {
//     return <li><button>{children}</button></li>
// }