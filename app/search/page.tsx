import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchContent from "@/components/SearchContent";
import SerarchInput from "@/components/SerarchInput";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg border-e-neutral-900">
      <Header className="from-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl font-semibold text-white">Search</h1>
        </div>
        <SerarchInput />
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
