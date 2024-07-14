import { useState, useEffect } from "react";
import axios from "axios";

const useChapterData = ({ userId, courseId, chapterId, isProgressChanged }) => {
  const [chapterData, setChapterData] = useState({
    chapter: null,
    course: null,
    muxData: null,
    attachments: [],
    nextChapter: null,
    userProgress: null,
    purchase: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Adjust type as needed
  console.log(userId, courseId, chapterId);
  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        const purchaseResponse = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/purchase/`,
          {
            params: {
              userId,
              courseId,
            },
          }
        );

        const purchase = purchaseResponse?.data?.data;

        const courseResponse = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/course`,
          {
            params: {
              _id: courseId,
              isPublished: true,
            },
          }
        );

        const course = courseResponse?.data?.data;

        const chapterResponse = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/chapter`,
          {
            params: {
              _id: chapterId,
              isPublished: true,
            },
          }
        );
        const chapter = chapterResponse?.data?.data;
        console.log(chapter);
        const muxDataResponse = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/mux`,
          {
            params: {
              chapterId: chapterId,
            },
          }
        );

        const muxData = muxDataResponse?.data?.data;
        let attachments = [];
        if (purchase) {
          const attachmentsResponse = await axios.get(
            `${process.env.REACT_APP_API}/api/v1/attachment`,
            {
              params: {
                courseId: courseId,
              },
            }
          );

          attachments = attachmentsResponse?.data?.data;
        }

        const nextChapterResponse = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/chapter`,
          {
            params: {
              courseId,
              position: chapter?.position + 1,
            },
          }
        );

        const nextChapter = nextChapterResponse?.data?.data;

        const userProgress = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/progress`,
          {
            params: {
              userId,
              chapterId,
            },
          }
        );

        setChapterData({
          chapter,
          course,
          muxData,
          attachments,
          nextChapter,
          purchase,
          userProgress: userProgress?.data?.data,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching chapter data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchChapterData();
  }, [userId, courseId, chapterId, isProgressChanged]);

  return { chapterData, loading, error };
};

export default useChapterData;
