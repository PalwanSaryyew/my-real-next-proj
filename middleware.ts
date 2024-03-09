import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   const currentUser = request.cookies.get('Authorization')?.value
   if (!currentUser) {
      return Response.redirect(new URL('/sign', request.url))
    }
   return NextResponse.next()
}
 
export const config ={
   matcher: ['/dashboard/:path*', '/admin/:path*']
}