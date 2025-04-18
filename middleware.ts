export function middleware() {
  //const response = NextResponse.next();
  //const isLoggedIn = response.cookies.get('sessionData',) sessionStorage.getItem("isLoggedIn");
  //   if (!isLoggedIn) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
