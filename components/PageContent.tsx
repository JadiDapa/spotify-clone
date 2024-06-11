"use client";

import { Song } from "@/types";
import SongItem from "./SongItem";
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div>No Song Available</div>;
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id: string) => {
            onPlay(id);
          }}
          song={song}
        />
      ))}
    </div>
  );
};

export default PageContent;
