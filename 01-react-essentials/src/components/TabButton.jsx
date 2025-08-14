// children refers to anything defined inside the Component!
// it would be like "anything I contain inside" sort of thing
// This is called Component Composition
export default function TabButton({children, onClick, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onClick}>
              {children}
            </button>
        </li>
    );
};