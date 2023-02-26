// Icons
import { TbSearch } from "react-icons/tb";

export const Search = () => {
  return (
    <div className="search">
      <TbSearch className="search-icon" />
      <input type="text" name="search" placeholder="Search..." />
    </div>
  );
};
