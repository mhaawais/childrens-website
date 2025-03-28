import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { set } from "sanity";

const client = createClient({
  projectId: "y6dkb123",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

const GlobalIdInput = (props: any) => {
  const { onChange, value } = props;
  const [globalId, setGlobalId] = useState(value || 1);

  useEffect(() => {
    const fetchLatestGlobalId = async () => {
      const query = `*[_type == "story"] | order(globalId desc)[0].globalId`;
      const latestId = await client.fetch(query);
      setGlobalId(latestId ? latestId + 1 : 1);
      onChange(set(latestId ? latestId + 1 : 1));
    };

    fetchLatestGlobalId();
  }, [onChange]);

  return <input type="number" value={globalId} readOnly className="sanity-input" />;
};

export default GlobalIdInput;
