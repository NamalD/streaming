import { buildUrl, fetchJsonWithAuth } from "./common";

export interface UnrestrictedLink {
  id: string;
  filename: string;
  mimeType: string; // Mime Type of the file; guessed by the file extension
  filesize: number; // Filesize in bytes; 0 if unknown
  link: string; // Original link
  host: string; // Host main domain
  chunks: number; // Max Chunks allowed
  crc: number; // Disable / enable CRC check
  download: string; // Generated link
  streamable: number; // Is the file streamable on website
}

export default {
  link: (link: string): Promise<UnrestrictedLink> => {
    const url = buildUrl("unrestrict/link");
    return fetchJsonWithAuth(url, {
      body: new URLSearchParams({link: link}),
      method: "POST",
    });
  }
}
