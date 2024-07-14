

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export const Preview = ({ value }) => {
  return (
    <div className="bg-white dark:bg-slate-700">
      <ReactQuill theme="bubble" value={value} readOnly={true} />
    </div>
  );
};
