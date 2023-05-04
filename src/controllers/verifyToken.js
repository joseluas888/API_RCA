import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
    let accessGranted = false;

    const token = req.headers.auth_key || req.cookies.token || '';

  
    if (!token) {
      return res.status(401).json({
        error: 1,
        message: "You need to send the authToken(JWT).",
      });
    } else {
      jwt.verify(token, "SECRET", (err, decoded) => {
        if (err) {
          return res.status(401).json({
            error: err,
          });
        } else {
          accessGranted = true;
        }
      });
    }
  
    if (!accessGranted) {
      res.statusMessage = "No authentication.";
      return res.status(401).end();
    }
  
    next();
  }
  
