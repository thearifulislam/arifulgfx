/**
 * Complete Express backend for dashboard (MERN Stack Starter)
 * To run:
 *   - npm install express cors mongoose jsonwebtoken body-parser bcryptjs
 *   - node app.js
 */

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;
const JWT_SECRET = "your_jwt_secret"; // Replace for production

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/dashboarddb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "admin" }
});
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", UserSchema);
const Project = mongoose.model("Project", ProjectSchema);

// Middleware
function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(403);
  }
}

// Auth routes
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).send("Email exists");
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hash });
  await user.save();
  res.json({ message: "Registered successfully" });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("Invalid email or password");
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send("Invalid email or password");
  const token = jwt.sign({ id: user._id, email: user.email, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: "2h" });
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});

app.get("/api/auth/profile", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// User CRUD (admin)
app.get("/api/users", auth, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});
app.post("/api/users", auth, async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password)
    return res.status(400).send("Missing fields");
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hash, role });
  await user.save();
  res.json(user);
});
app.delete("/api/users/:id", auth, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Project CRUD
app.get("/api/projects", auth, async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});
app.post("/api/projects", auth, async (req, res) => {
  const { name, description, tags } = req.body;
  const project = new Project({ name, description, tags: tags || [] });
  await project.save();
  res.json(project);
});
app.delete("/api/projects/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// CRUD: Update project
app.put("/api/projects/:id", auth, async (req, res) => {
  const { name, description, tags } = req.body;
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { name, description, tags },
    { new: true }
  );
  res.json(project);
});

app.get("/", (req, res) => res.send("Dashboard API is running"));

app.listen(PORT, () => {
  console.log(`API server at http://localhost:${PORT}/`);
});
