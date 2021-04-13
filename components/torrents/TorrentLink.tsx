import { UnrestrictedLink } from "../../apiClients/realDebrid/unrestrict";
import streaming from "../../apiClients/realDebrid/streaming";

export function TorrentLink({link}: { link: UnrestrictedLink }) {
  return (
    <li>
      <a href={streaming.generateLink(link.id)} target="_blank">
        {link.filename}
      </a>
    </li>
  );
}