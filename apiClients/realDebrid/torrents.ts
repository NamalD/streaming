import { buildUrl, fetchJsonWithAuth } from "./common";

export interface Torrent {
  id: string;
  bytes: number;
  added: Date;
  ended: Date;
  filename: string;
  links: string[];
  progress: number;
  status: string;
}

export default {
  get: (): Promise<Torrent[]> => {
    const url = buildUrl("torrents");
    return fetchJsonWithAuth(url);
  }
}
