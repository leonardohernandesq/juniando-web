import { useEffect } from "react";

export function useBodyScroll(isLocked: boolean) {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLocked);
    document.body.classList.toggle("overflow-auto", !isLocked);

    return () => {
      document.body.classList.remove("overflow-hidden", "overflow-auto");
    };
  }, [isLocked]);
}
