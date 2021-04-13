import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import torrentClient, { Torrent } from "../apiClients/realDebrid/torrents";
import { TorrentList } from "../components/torrents/TorrentList";

export default function Home() {
  const [torrents, setTorrents] = useState<Torrent[]>([]);

  useEffect(() => {
    torrentClient.get().then(setTorrents);
  }, []);

  /*
  - Torrent list
    - Torrent
      - Link
        - onClick => stream
      - Link
      - Link
    - Torrent
  - Add torrent
    - Search for torrents
      - Torrent
        - onClick => add to downloads
      - Torrent
   */
  return (
    <div>
      <main>
        <h1 className={styles.title}>Streaming</h1>

        <TorrentList torrents={torrents}/>
      </main>
    </div>
  )
}
