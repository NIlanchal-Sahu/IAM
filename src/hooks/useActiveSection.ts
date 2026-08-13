import { useEffect, useState } from "react";

const DEFAULT_ID = "hero";

export function useActiveSection(
  sectionIds: readonly string[],
  options: { rootMargin?: string; threshold?: number } = {}
) {
  const { rootMargin = "-40% 0px -50% 0px", threshold = 0 } = options;
  const [activeId, setActiveId] = useState(DEFAULT_ID);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
}
