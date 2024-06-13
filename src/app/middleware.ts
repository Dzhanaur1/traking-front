// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET; // Убедитесь, что у вас есть секретный ключ в .env файле

// export function middleware(req) {
//   const token = req.cookies.get('token')?.value;

//   if (!token) {
//     return NextResponse.redirect('/login');
//   }

//   try {
//     const decoded = jwt.verify(token, secret);

//     if (decoded.role !== 'admin') {
//       return NextResponse.redirect('/');
//     }

//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect('/login');
//   }
// }

// export const config = {
//   matcher: ['/admin'], // Маршрут, к которому применяется middleware
// };
