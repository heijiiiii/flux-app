'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center gap-2">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="text-muted-foreground">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
