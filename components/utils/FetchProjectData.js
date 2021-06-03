import useSWR from "swr";
import lz from "lzutf8";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error("Failed to load data.");
  }

  const page = lz.decompress(lz.decodeBase64(data.identifier));
  return page;
};

export default function FetchProjectData() {
  const { data } = useSWR("/api/project", fetcher);
  return data;
}
