import jwt from "jsonwebtoken";

export const createToken = (payload: any | null = null, role: string | null = null) => {
  if (!payload) return null;
  if (!role) return null;
  switch (role) {
    case "AGENT":
      return jwt.sign({ payload }, process.env.SECRET_KEY_AGENT as string, {
        expiresIn: "1h",
      });
    default:
      return null;
  }
};

export const verifyToken = (token: string | null = null, role: string | null = null) => {
  if (!token) return null;
  if (!role) return null;
  
  try {
    switch (role) {
      case "MANAGER":
        return jwt.verify(token, process.env.SECRET_KEY_MANAGER as string);
      case "ADMIN":
        return jwt.verify(token, process.env.SECRET_KEY_ADMIN as string);
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
