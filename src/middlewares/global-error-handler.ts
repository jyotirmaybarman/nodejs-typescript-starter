import { Request, Response, NextFunction } from "express";
import { env } from "../utils/env";

// Custom Error Interface
interface CustomError extends Error {
  statusCode?: number;
  message: string;
}

// Centralized Error Handling Middleware
const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default error values
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Log the error (could log more details in production)
  console.error(`[ERROR] ${statusCode} - ${message}`);

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(env.NODE_ENV === "development" && { stack: err.stack }), // Send stack trace in development mode
  });
};

export default globalErrorHandler;
