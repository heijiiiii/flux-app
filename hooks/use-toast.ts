// flux-app/hooks/use-toast.ts
import { useCallback } from 'react';

export function useToast() {
  // 실제로는 외부 라이브러리나 context를 사용할 수 있음
  // 여기서는 예시로 alert만 사용
  const toast = useCallback((msg: string) => {
    alert(msg);
  }, []);
  return { toast };
}
