import { Torrent } from "../../apiClients/realDebrid/torrents";
import { useState } from "react";
import { TorrentLinks } from "./TorrentLinks";

export interface TorrentParams {
  torrent: Torrent;
}

export function TorrentItem({torrent}: TorrentParams) {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => setShowLinks(prev => !prev)

  return (
    <>
      <li onClick={handleClick}>{torrent.filename}</li>

      {
        showLinks &&
        <TorrentLinks links={torrent.links}/>
      }
    </>
  );
}
