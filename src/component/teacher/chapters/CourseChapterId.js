import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import useChapterData from "../../Hooks/get-chapters";
import Banner from "../../Courses/chapters/banner";
import { VideoPlayer } from "../../VideoPlayer";
import { Preview } from "../../preview";
import { File } from "lucide-react";
import { CourseEnrollButton } from "../CourseEnrollButton";
import { CourseProgressButton } from "../../CourseProgressButton";
import { CircularProgress, Box, Typography } from "@mui/material"; // Import CircularProgress and Box from MUI

const CourseChapterId = ({ onProgressCountChange }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { chapterId, courseId } = useParams();
  const [isProgressChanged, SetisProgressChanged] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const { chapterData, loading, error } = useChapterData({
    userId: user?.email,
    chapterId,
    courseId,
    isProgressChanged,
  });

  useEffect(() => {
    if (chapterData?.userProgress?.isCompleted !== undefined) {
      setIsCompleted(chapterData.userProgress.isCompleted);
    }
  }, [chapterData]);

  if (!chapterId || !courseId) {
    return null;
  }

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height={"100%"}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          zIndex: 1000, // Ensure loader is on top
          
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size={80} sx={{ color: "#007bff" }} />{" "}
          {/* Adjust the size and color as needed */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading...
          </Typography>{" "}
          {/* Optional text */}
        </Box>
      </Box>
    );
  }

  const isLocked = !chapterData?.chapter?.isFree && !chapterData?.purchase;
  const completeOnEnd = !!chapterData?.purchase || !isCompleted;

  return (
    <>
      {chapterData && (
        <div>
          {chapterData?.userProgress?.isCompleted && (
            <Banner
              variant="success"
              label="You already completed this chapter."
            />
          )}

          {isLocked && (
            <Banner
              variant="warning"
              label="You need to purchase this course to watch this chapter."
            />
          )}

          <div className="flex flex-col max-w-4xl mx-auto pb-20">
            <div className="p-4">
              <VideoPlayer
                chapterId={chapterId}
                title={chapterData?.chapter?.title}
                courseId={courseId}
                nextChapterId={chapterData?.nextChapter?._id}
                playbackId={chapterData?.muxData?.playbackId}
                isLocked={isLocked}
                completeOnEnd={completeOnEnd}
              />
            </div>
            <div>
              <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-2xl font-semibold mb-2">
                  {chapterData?.chapter?.title}
                </h2>
                {chapterData?.purchase ? (
                  <CourseProgressButton
                    chapterId={chapterId}
                    courseId={courseId}
                    nextChapterId={chapterData?.nextChapter?._id}
                    isCompleted={isCompleted}
                    onProgressCountChange={onProgressCountChange}
                    SetisProgressChanged={SetisProgressChanged}
                  />
                ) : (
                  <CourseEnrollButton
                    courseId={courseId}
                    price={chapterData?.course?.price}
                  />
                )}
              </div>
              <div className="border-b border-gray-200 my-4"></div>
              <div>
                <Preview value={chapterData?.chapter?.description} />
              </div>
              {!!chapterData?.attachments?.length && (
                <>
                  <div className="border-b border-gray-200 my-4"></div>
                  <div className="p-4 flex flex-col items-center gap-2">
                    {chapterData?.attachments?.map((attachment) => (
                      <a
                        href={`${process.env.REACT_APP_API}${attachment?.url}`}
                        target="_blank"
                        key={attachment?._id}
                        className="flex items-center p3 w-full bg-sky-200  text-sky-700 dark:text-sky-300 hover:underline"
                      >
                        <File />
                        <p className="line-clamp-1 mb-0">{attachment?.name}</p>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseChapterId;
