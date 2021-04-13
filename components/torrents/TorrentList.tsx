import { Torrent } from "../../apiClients/realDebrid/torrents";
import { TorrentItem } from "./TorrentItem";

export interface TorrentListParams {
  torrents: Torrent[];
}

export function TorrentList({torrents}: TorrentListParams) {
  return <ul>
    {
      torrents.map(torrent => <TorrentItem key={torrent.id} torrent={torrent}/>)
    }
  </ul>;
}
