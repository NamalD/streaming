import { useEffect, useState } from "react";
import unrestrict, { UnrestrictedLink } from "../../apiClients/realDebrid/unrestrict";
import { TorrentLink } from "./TorrentLink";

export function TorrentLinks({links}: { links: string[] }) {
  const [unrestrictedLinks, setUnrestrictedLinks] = useState<UnrestrictedLink[]>([]);

  useEffect(() => {
    const unrestrictLinks = links.map(link => unrestrict.link(link));
    Promise.all(unrestrictLinks)
      .then(unrestricted => {
        unrestricted.sort((a, b) => a.filename.localeCompare(b.filename))
        setUnrestrictedLinks(unrestricted);
      });
  }, [links]);

  return (
    <div>
      <ul>
        {
          unrestrictedLinks.map(link => <TorrentLink key={link.id} link={link} />)
        }
      </ul>
    </div>
  )
}