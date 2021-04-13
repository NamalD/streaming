import { buildUrl, fetchJsonWithAuth } from "./common";

export default {
  transcode: (id: string) => {
    const url = buildUrl(`streaming/transcode/${id}`);
    return fetchJsonWithAuth(url);
  },
  mediaInfo: (id: string) => {
    const url = buildUrl(`streaming/mediaInfos/${id}`);
    return fetchJsonWithAuth(url);
  }
}