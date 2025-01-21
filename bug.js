```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <p>This is a paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>My Component</h2>
      <p>{data.message}</p>     
    </div>
  );
}
```