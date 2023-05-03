import React from 'react';
import {
  Config,
  FeedbackConfigKey,
  FeedbackConfiguration,
  ProcessState,
} from '@/components/Domain/Feedback/FeedbackController.hooks';
import {
  getRandomHex,
  PageMajorDtoResponse,
  PageSubjectDtoResponse,
  PageTopicDtoResponse,
} from '@/util';
import * as S from './FeedbackForm.styles';
import ListItem from '@/components/UI/ListItem/ListItem';

export type FeedbackConfigurationListProps = {
  handlePickItem: (key: FeedbackConfigKey, config: Config) => void;
};

export type MajorListProps = {
  result: PageMajorDtoResponse[];
} & FeedbackConfigurationListProps;

export type SubjectListProps = {
  result: PageSubjectDtoResponse[];
} & FeedbackConfigurationListProps;

export type TopicListProps = {
  result: PageTopicDtoResponse[];
} & FeedbackConfigurationListProps;

export const MajorList = ({ result, handlePickItem }: MajorListProps) => {
  return (
    <S.Root>
      <S.Wrapper flex={'columnStart'}>
        {result.map((page) => {
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
      </S.Wrapper>
    </S.Root>
  );
};

export const SubjectList = ({ result, handlePickItem }: SubjectListProps) => {
  return (
    <S.Root>
      <S.Wrapper flex={'columnStart'}>
        {result.map((page) => {
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
      </S.Wrapper>
    </S.Root>
  );
};

export const TopicList = ({ result, handlePickItem }: TopicListProps) => {
  return (
    <S.Root>
      <S.Wrapper flex={'columnStart'}>
        {result.map((page) => {
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
      </S.Wrapper>
    </S.Root>
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
