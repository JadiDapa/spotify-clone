"use client";

import { Song } from "@/types";
import SongItem from "./SongItem";
import MediaItem from "./MediaItem";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6">No Song Available</div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={() => {}} song={song} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
