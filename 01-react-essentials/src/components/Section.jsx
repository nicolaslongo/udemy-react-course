// ...props: all other props you define when calling Section
// This is good for basic and flexible wrappers
export default function Section({title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}