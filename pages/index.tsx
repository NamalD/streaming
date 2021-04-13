import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import unrestrict from "../apis/realDebrid/unrestrict";
import torrents from "../apis/realDebrid/torrents";
import streaming from "../apis/realDebrid/streaming";

export default function Home() {
  useEffect(() => {
    torrents.get().then(async response => {
      const torrentId = response[0].id;
      const unrestricted = await unrestrict.link(response[0].links[0]);

      const transcode = await streaming.transcode(unrestricted.id);
      console.log("transcode", transcode);

      const mediaInfo = await streaming.mediaInfo(unrestricted.id);
      console.log("media info", mediaInfo);

    });
  }, []);

  return (
    <div>
      <main>
        <h1 className={styles.title}>Streaming</h1>
      </main>
    </div>
  )
}
