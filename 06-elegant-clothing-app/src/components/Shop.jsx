// In here we are fixing Prop drilling by using "Component Composition"
// This is not scalable enough, though. Since this approach means every component couuld be a wrapper
// and the complete logic would be in App.jsx
export default function Shop({children}) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
