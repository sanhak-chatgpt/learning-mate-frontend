import React from 'react';
import {
  Config,
  FeedbackConfigKey,
  FeedbackConfiguration,
  ProcessState,
  useInfiniteMajorList,
  useInfiniteSubjectList,
  useInfiniteTopicList,
} from '@/components/Domain/Feedback/FeedbackController.hooks';
import { getRandomHex } from '@/util/models/Number';
import * as S from './Feedback.styles';
import ListItem from '@/components/UI/ListItem/ListItem';

export type FeedbackConfigurationListProps = {
  handlePickItem: (key: FeedbackConfigKey, config: Config) => void;
  feedbackConfig: FeedbackConfiguration;
  currentProcess: ProcessState;
};

export const MajorList = ({
  handlePickItem,
  feedbackConfig,
  currentProcess,
}: FeedbackConfigurationListProps) => {
  const query = useInfiniteMajorList(currentProcess);

  return (
    <>
      {query.data &&
        query.data.pages.map((page) => {
          return page?.content?.map((res) => {
            return (
              <ListItem
                key={res.id}
                title={res.majorName}
                description={res.description}
                onClick={() => handlePickItem('major', { id: res.id, name: res.majorName })}
              />
            );
          });
        })}
    </>
  );
};

export const SubjectList = ({
  handlePickItem,
  feedbackConfig,
  currentProcess,
}: FeedbackConfigurationListProps) => {
  const query = useInfiniteSubjectList(currentProcess, feedbackConfig.major?.id);

  return (
    <>
      {query.data &&
        query.data.pages.map((page) => {
          return page?.content?.map((res) => {
            return (
              <ListItem
                key={res.id}
                title={res.subjectName}
                description={res.description}
                onClick={() => handlePickItem('subject', { id: res.id, name: res.subjectName })}
              />
            );
          });
        })}
    </>
  );
};

export const TopicList = ({
  handlePickItem,
  feedbackConfig,
  currentProcess,
}: FeedbackConfigurationListProps) => {
  const query = useInfiniteTopicList(currentProcess, feedbackConfig.subject?.id);

  return (
    <>
      {query.data &&
        query.data.pages.map((page) => {
          return page?.content?.map((res) => {
            return (
              <ListItem
                key={res.id}
                title={res.topicName}
                description={res.description}
                onClick={() => handlePickItem('topic', { id: res.id, name: res.topicName })}
              />
            );
          });
        })}
    </>
  );
};

export type ConfigurationListProps = {
  config: FeedbackConfiguration;
};

export const ConfigurationList = ({ config }: ConfigurationListProps) => {
  return (
    <S.ConfigListRoot>
      <S.ConfigListWrapper
        as={'ul'}
        flex={'columnStart'}
        css={'&::-webkit-scrollbar {display: none;}'}>
        <ListItem
          key={config.major?.name + getRandomHex()}
          title={'전공'}
          description={config.major?.name}
          itemSize={{ height: '4.6rem' }}
        />
        <ListItem
          key={config.subject?.name + getRandomHex()}
          title={'과목'}
          description={config.subject?.name}
          itemSize={{ height: '4.6rem' }}
        />
        <ListItem
          key={config.topic?.id + getRandomHex()}
          title={'학습 주제'}
          description={config.topic?.name}
          itemSize={{ height: '4.6rem' }}
        />
      </S.ConfigListWrapper>
    </S.ConfigListRoot>
  );
};
