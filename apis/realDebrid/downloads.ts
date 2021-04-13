import { buildUrl, fetchJsonWithAuth } from "./common";

export function getDownloads() {
  const url = buildUrl("downloads");
  return fetchJsonWithAuth(url);
}
