import { buildUrl, fetchJsonWithAuth } from "./common";

const STREAMING_BASE_URL = "https://real-debrid.com/streaming-";

export default {
  transcode: (id: string) => {
    const url = buildUrl(`streaming/transcode/${id}`);
    return fetchJsonWithAuth(url);
  },
  mediaInfo: (id: string) => {
    const url = buildUrl(`streaming/mediaInfos/${id}`);
    return fetchJsonWithAuth(url);
  },
  generateLink: (id: string) => STREAMING_BASE_URL + id
}