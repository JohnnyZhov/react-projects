export default function TabButton({children, onSelect}) {
    //document.querySelector('button').addEventListener('click', (e) => {alert(e.target.id)});

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// this also will work using destructuring
// export default function TabButton({children}) {
//     return <li><button>{children}</button></li>
// }
