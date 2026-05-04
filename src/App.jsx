import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [goal, setGoal] = useState("");

  const addItem = () => {
    if (!title || !goal) return;
    setItems([...items, { title, image, goal }]);
    setTitle("");
    setImage("");
    setGoal("");
  };

  return (
    <div style={{ padding: "20px", background: "pink", minHeight: "100vh" }}>
      <h1>✨ My 2026 Vision Board</h1>

      <input
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Describe goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <br /><br />

      <button onClick={addItem}>Add</button>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: "white",
            padding: "10px",
            borderRadius: "12px"
          }}>
            {item.image && (
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover"
                }}
              />
            )}
            <h3>{item.title}</h3>
            <p>{item.goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
