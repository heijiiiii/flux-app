import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirectUrl = searchParams.get('redirectUrl') || '/';

  // NextAuth 게스트 로그인 라우트로 리디렉션
  const callbackUrl = encodeURIComponent(redirectUrl);

  // 현재 URL 기반으로 리디렉션 URL 생성
  const reqUrl = new URL(request.url);
  const signinUrl = new URL('/api/auth/signin/guest', reqUrl.origin);
  signinUrl.searchParams.append('callbackUrl', callbackUrl);

  return NextResponse.redirect(signinUrl);
}
