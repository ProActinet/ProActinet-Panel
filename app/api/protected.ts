// // pages/api/protected.js
// import { cookies } from "next/headers";

// interface ProtectedRequest {
//   headers: {
//     cookie?: string;
//   };
// }

// interface ProtectedResponse {
//   status: (code: number) => {
//     json: (data: { message: string }) => void;
//   };
// }

// export default async function protectedHandler(
//   req: ProtectedRequest,
//   res: ProtectedResponse
// ) {
//   const cookies = cookie.parse(req.headers.cookie || "");
//   const token = cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   // Verify the token as needed, then proceed
//   res.status(200).json({ message: "This is protected data." });
// }
