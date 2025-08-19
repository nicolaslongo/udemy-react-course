# react-server-components

- Client components are needed to use most React hooks.
- Server components may be used to run async functions and fetch data. This simplifies a lot and reduces the useEffect usage.
- Server components may be used also to submit data (i.e. forms)
- Server components may include Client components inside of them. Client components cannot include Server components inside of them, instead they accept Server components only as {children}
- The use() hook allows us to run promises that were created by RSC (and therefore could be injected with for example data) but when we render Client components.
 