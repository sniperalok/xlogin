import { useState } from "react";

function App() {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleCredentials = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "password" || username !== "user") {
      setInvalid(true);
    } else {
      setInvalid(false);
      setValid(true);
    }
  };

  return (
    <main>
      <h1>Login Page</h1>
      {invalid && <p className="error">Invalid username or password</p>}
      {valid ? (
        <p>Welcome, user</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={handleCredentials}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handleCredentials}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </main>
  );
}

export default App;
