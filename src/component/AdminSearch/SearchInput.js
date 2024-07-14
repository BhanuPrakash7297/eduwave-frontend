import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import qs from "query-string";
import { useDebounce } from "../Hooks/use-debounce";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Navigate = useNavigate();
  const pathname = useLocation().pathname;

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: debouncedValue,
          categoryId: currentCategoryId,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    Navigate(url);
  }, [debouncedValue, currentCategoryId, Navigate, pathname]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 top-3 absolute left-3 text-slate-600 dark:text-slate-200" />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full md:w-[300px] h-10 pl-9 rounded-full bg-slate-100 dark:bg-slate-800 
    focus:outline-none focus:ring-2 focus:ring-slate-200 border border-transparent 
    focus:border-slate-300 text-sm text-slate-900 dark:text-white"
        placeholder="Search for courses"
      />
    </div>
  );
};
