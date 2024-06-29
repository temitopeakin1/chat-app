import { withAuth } from 'next-auth/middleware';

export default withAuth;


// protected routes
export const config = {
    matcher: ["/chat", "/chat/:id*", "/register"]
}