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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, e.g., display an error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data === null) {
    return <p>Error Loading Data</p>;
  }

  return (
    <div>
      <h2>My Component</h2>
      <p>{data.message}</p>     
    </div>
  );
}
```