import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChapterTitleForm from "./ChapterTitleForm";
import axios from "axios";
import ChapterDescriptionForm from "./ChapterDescriptionForm";
import ChapterAccessForm from "./ChapterAccessForm";
import ChapterVideoForm from "./ChapterVideoForm";
import Banner from "./banner";
import { ChapterActions } from "./chapterAction";

const ChapterIdPage = () => {
  const { courseId, chapterId } = useParams();

  const [chapter, setChapter] = useState(null);

  const getChapter = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}`
      );
      setChapter(res?.data.chapterData);
      console.log(res);
      console.log(chapter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChapter();
  }, []);

  const requiredFields = [
    chapter && chapter[0]?.title,
    chapter && chapter[0]?.description,
    chapter && chapter[0]?.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {chapter && !chapter[0].isPublished && (
        <Banner label="This course is unpublished. It will not be visible to the students." />
      )}

      <div className="p-6">
        {chapter && (
          <>
            <div className="flex items-center justify-between">
              <div className="w-full">
                <Link
                  to={`/admin/teacher/${courseId}`}
                  className="flex items-center text-sm hover:opacity-75 transition mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 text-black" />
                  Back to course setup
                </Link>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">Chapter Creation</h1>
                  </div>
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300 ">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isComplete}
                courseId={courseId}
                isPublished={chapter[0].isPublished}
                chapterId={chapterId}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-x-2">
                    <LayoutDashboard
                      style={{ color: "blue", width: "25px", height: "25px" }}
                    />
                    <h2 className="text-xl ">Customize your chapter</h2>
                  </div>
                  <ChapterTitleForm
                    initialData={chapter[0]}
                    courseId={courseId}
                    chapterId={chapterId}
                  />
                  <ChapterDescriptionForm
                    initialData={chapter[0]}
                    courseId={courseId}
                    chapterId={chapterId}
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <Eye
                    style={{ color: "blue", width: "25px", height: "25px" }}
                  />
                  <h2 className="text-xl font-medium">Access Settings</h2>
                </div>
                <ChapterAccessForm
                  initialData={chapter[0]}
                  courseId={courseId}
                  chapterId={chapterId}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-x-2">
                  <Video
                    style={{ color: "blue", width: "25px", height: "25px" }}
                  />
                  <h2 className="text-xl font-medium">Add a video</h2>
                </div>
                <ChapterVideoForm
                  initialData={chapter[0]}
                  courseId={courseId}
                  chapterId={chapterId}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChapterIdPage;
