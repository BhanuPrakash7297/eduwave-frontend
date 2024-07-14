import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Grip, Pencil } from "lucide-react";

const ChapterList = ({ items, onReorder, onEdit }) => {
  const [chapters, setChapters] = useState(items);
  console.log(chapters);
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(chapters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChapters(items);

    const bulkUpdateData = items?.map((chapter, index) => ({
      id: chapter._id,
      position: index,
    }));

    onReorder(bulkUpdateData);
  };

  useEffect(() => {
    setChapters(items);
  }, [items]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {chapters?.map((chapter, index) => (
              <Draggable
                key={chapter._id}
                draggableId={chapter._id}
                index={index}
              >
                {(provided) => (
                  <div
                    className={`flex items-center gap-x-2 bg-gray-200 border-gray-200 border text-gray-700 rounded-md mb-4 text-sm
                                    ${
                                      chapter.isPublished
                                        ? "bg-blue-100 border-blue-200 text-blue-700"
                                        : ""
                                    }
                                    dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300
                                    dark:${
                                      chapter.isPublished
                                        ? "bg-blue-800 border-blue-600 text-blue-300"
                                        : ""
                                    }
                                `}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={`px-2 py-3 border-r border-r-gray-200 hover:bg-gray-300 rounded-l-md transition
                                        ${
                                          chapter.isPublished
                                            ? "border-r-blue-200 hover:bg-blue-200"
                                            : ""
                                        }
                                        dark:border-r-slate-800 dark:hover:bg-slate-700
                                        dark:${
                                          chapter.isPublished
                                            ? "border-r-blue-600 hover:bg-blue-800"
                                            : ""
                                        }
                                    `}
                      {...provided.dragHandleProps}
                    >
                      <Grip className="h-5 w-5" />
                    </div>
                    {chapter.title}
                    <div className="ml-auto pr-2 flex items-center gap-x-2">
                      {chapter.isFree && (
                        <span className="px-2 py-1 rounded bg-green-500 text-white text-xs uppercase">
                          Free
                        </span>
                      )}
                      <span
                        className={`px-2 py-1 rounded ${
                          chapter.isPublished
                            ? "bg-blue-500 text-white"
                            : "bg-gray-500 text-gray-100"
                        } text-xs uppercase`}
                      >
                        {chapter.isPublished ? "Published" : "Draft"}
                      </span>
                      <Pencil
                        onClick={() => onEdit(chapter._id)}
                        className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ChapterList;
