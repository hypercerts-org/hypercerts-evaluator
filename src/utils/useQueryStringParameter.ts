import { useRouter } from "next/router";

export function useQueryStringParameter<T>(param: string, defaultValue: T): T {
  const router = useRouter();
  const p = router.query[param];

  // Type guard to check if the value is within the expected type
  function isValidType(value: any): value is T {
    return typeof value === typeof defaultValue;
  }

  if (p) {
    const value = Array.isArray(p) ? p[0] : p;
    if (isValidType(value)) {
      return value;
    }
  }

  return defaultValue;
}
