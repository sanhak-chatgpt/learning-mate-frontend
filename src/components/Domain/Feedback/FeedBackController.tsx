import React from 'react';
import { useFeedbackController } from '@/components/Domain/Feedback/FeedbackController.hooks';
import { MajorList, SubjectList, TopicList } from '@/components/Domain/Feedback/FeedbackLists';
import FeedbackRecord from '@/components/Domain/Feedback/Feedback.Record';

export const FeedbackController = () => {
  const {
    feedbackConfig,
    currentQueryString,
    handlePickItem,
    majorQuery,
    subjectQuery,
    topicQuery,
  } = useFeedbackController();

  const MajorListRender = () => {
    if (majorQuery.isLoading) {
      return <div>isLoading</div>;
    }
    if (majorQuery.isError) {
      return <div>error</div>;
    }
    if (majorQuery.isSuccess) {
      return <MajorList result={majorQuery.data.pages} handlePickItem={handlePickItem}></MajorList>;
    }
    return <div>error</div>;
  };

  const SubjectListRender = () => {
    if (subjectQuery.isLoading) {
      return <div>isLoading</div>;
    }
    if (subjectQuery.isError) {
      return <div>error</div>;
    }
    if (subjectQuery.isSuccess) {
      return (
        <SubjectList result={subjectQuery.data.pages} handlePickItem={handlePickItem}></SubjectList>
      );
    }
    return <div>error</div>;
  };
  const TopicListRender = () => {
    if (topicQuery.isLoading) {
      return <div>isLoading</div>;
    }
    if (topicQuery.isError) {
      return <div>error</div>;
    }
    if (topicQuery.isSuccess) {
      return (
        <TopicList result={topicQuery.data?.pages} handlePickItem={handlePickItem}></TopicList>
      );
    }
    return <div>error</div>;
  };

  return (
    <>
      {currentQueryString === 'major' && majorQuery.isSuccess ? (
        <MajorListRender />
      ) : currentQueryString === 'subject' && subjectQuery.isSuccess ? (
        <SubjectListRender />
      ) : currentQueryString === 'topic' && topicQuery.isSuccess ? (
        <TopicListRender />
      ) : currentQueryString === 'lecture' ? (
        <FeedbackRecord config={feedbackConfig}></FeedbackRecord>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default FeedbackController;
