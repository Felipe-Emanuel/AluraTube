import { StyledSearch } from "../../../styles/StyledSearch";

export default function Search({ search, setSearch }) {
  const searchValue = search;
  const setSearchValue = setSearch;

  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={searchValue}
      />
      {}
      <button>🔎</button>
    </StyledSearch>
  );
}
