import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import qs from 'query-string'
const CategoryItem = ({ key, label, icon: Icon, value }) => {
  const pathname = useLocation().pathname;
  const Navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    Navigate(url);
  };
  return (
    <button
      onClick={onClick}
      className={`
        "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
        ${
          isSelected &&
          "border-sky-700 bg-sky-200/20 text-sky-800 dark:bg-sky-100"
        }`}
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

export default CategoryItem;
