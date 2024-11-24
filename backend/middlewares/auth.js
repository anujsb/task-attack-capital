import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing" });
  }

  // Ensure token starts with 'Bearer '
  if (!token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const jwtToken = token.replace("Bearer ", ""); // Strip 'Bearer ' from token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded user to the request object
    next(); // Pass control to the next middleware
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(400).json({ message: "Invalid token", error: error.message });
  }
};

export default authMiddleware;