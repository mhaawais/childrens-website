import React, { useEffect, useState } from "react";
import { set } from "sanity";

const CategoryIdInput = (props: any) => {
  const { onChange, value, parent } = props;
  const ageGroups: string[] = parent?.ageGroups || [];

  const [categoryId, setCategoryId] = useState<number>(value || 1);

  useEffect(() => {
    if (ageGroups.length > 0) {
      const baseId: Record<"0-3 years" | "3-6 years" | "6-9 years" | "9-12 years" | "All Stories", number> = {
        "0-3 years": 1,
        "3-6 years": 1000,
        "6-9 years": 2000,
        "9-12 years": 3000,
        "All Stories": 4000,
      };

      const ageGroup = ageGroups[0] as keyof typeof baseId; 
      let assignedId = baseId[ageGroup] ?? 5000;

      setCategoryId(assignedId);
      onChange(set(assignedId));
    }
  }, [ageGroups, onChange]);

  return <input type="number" value={categoryId} readOnly className="sanity-input" />;
};

export default CategoryIdInput;
