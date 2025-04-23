import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Replace with your actual IP address (check https://ifconfig.me or similar)
const ALLOWED_IPS = ['73.182.166.220', '127.0.0.1', 'localhost'];

export function middleware(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0].trim(); // First IP in list is the client

  if (ip && ALLOWED_IPS.includes(ip)) {
    return NextResponse.next();
  }

  return new NextResponse('503', { status: 503 });
}

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // List of known bot user agents
// const KNOWN_BOTS = [
//   'googlebot',
//   'bingbot',
//   'yandexbot',
//   'duckduckbot',
//   'slurp',
//   'baiduspider',
//   'gptbot',
//   'anthropic-ai',
//   'ccbot',
//   'claude-web',
//   'facebookexternalhit',
//   'twitterbot',
//   'rogerbot',
//   'linkedinbot',
//   'embedly',
//   'quora link preview',
//   'showyoubot',
//   'outbrain',
//   'pinterest',
//   'slackbot',
//   'vkshare',
//   'w3c_validator',
//   'mj12bot',
//   'ia_archiver',
//   'applebot',
//   'compressionbot',
// ];

// // Middleware function
// export function middleware(request: NextRequest) {
//   const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  
//   // Check if the request is from a bot
//   const isBot = KNOWN_BOTS.some(bot => userAgent.includes(bot));
  
//   // Allow bots to access the site without restrictions
//   if (isBot) {
//     // Setting headers to ensure Vercel edge network doesn't block bots
//     const response = NextResponse.next();
//     response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
//     response.headers.set('X-Robots-Tag', 'all');
//     response.headers.set('X-Vercel-Cache-Control-Allow-Bot', 'true');
//     response.headers.set('X-Crawling-Allowed', 'true');
//     return response;
//   }
  
//   // For non-bot traffic, continue with normal processing
//   return NextResponse.next();
// }

// // Configure which routes should apply this middleware
// export const config = {
//   matcher: [
//     // Apply to all paths except those specified
//     '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|webp)).*)'
//   ],
// }; 