export default function TabButton({children, onSelect, isSelected}) {
    //document.querySelector('button').addEventListener('click', (e) => {alert(e.target.id)});

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

// this also will work using destructuring
// export default function TabButton({children}) {
//     return <li><button>{children}</button></li>
// }
