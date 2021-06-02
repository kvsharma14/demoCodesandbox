import "./styles.css";

export default function App() {
  const fruit = [
    { id: 101, name: "pineapple", color: "yellow", taste: "hello" },
    { id: 102, name: "apple", color: "red", taste: "yummy" },
    { id: 103, name: "mango", color: "yellow", taste: "vgood" },
    { id: 104, name: "orange", color: "orange", taste: "bye" },
    { id: 105, name: "strawberry", color: "red", taste: "hi" }
  ];
  return (
    <div className="App">
      {fruit.map((item) => (
        <div>
          <li>{item.id}</li>
          <p>{item.name}</p>
          <p>{item.color}</p>
          <p>{item.taste}</p>
        </div>
      ))}
    </div>
  );
}
