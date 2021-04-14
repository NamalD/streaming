import { UnrestrictedLink } from "../../apiClients/realDebrid/unrestrict";
import { useState } from "react";
import streaming, { TranscodeLinks } from "../../apiClients/realDebrid/streaming";
import { QualityLink } from "./QualityLink";
import ReactPlayer from "react-player";

export function TorrentLink({link}: { link: UnrestrictedLink }) {
  const [transcodeLinks, setTranscodeLinks] = useState<TranscodeLinks | undefined>(undefined);

  const handleClick = async () => {
    const transcodeLinks = await streaming.transcode(link.id);
    console.log("transcode links", transcodeLinks);
    console.log("unrestricted link", link);
    setTranscodeLinks(transcodeLinks);
    // setDisplayVideo(true);
    // const mediaInfo = await streaming.mediaInfo(link.id);
    // console.log("Media info", mediaInfo);
  };

  return (
    <li>
      <a onClick={handleClick}>
        {link.filename}
      </a>

      {
        transcodeLinks &&
        <ReactPlayer url={transcodeLinks.dash["full"]} controls={true} />
      }
    </li>
  );
}

interface VideoPlayerProps
{
  src: string;
  type: string;
}

export function VideoPlayer(
{
  src, type
}
: VideoPlayerProps)
{
  return (
    <video width={600} height={480} controls>
      <source src={src} type={type}/>
    </video>
  );
}