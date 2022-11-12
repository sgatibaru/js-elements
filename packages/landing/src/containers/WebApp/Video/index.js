import { closeModal, openModal } from '@redq/reuse-modal';
import videoBtn from 'common/assets/image/webApp/video-btn.svg';
import videoShape1 from 'common/assets/image/webApp/video-dot-1.svg';
import videoShape2 from 'common/assets/image/webApp/video-shape-1.svg';
import videoShape3 from 'common/assets/image/webApp/video-wave-1.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { VIDEO_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import VideoArea, { VideoWrapper } from './video.style';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src={`https://www.youtube.com/embed/${VIDEO_DATA.videoID}`}
      frameBorder="0"
    />
  </VideoWrapper>
);
const Video = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <VideoArea>
      <Container>
        <Heading as="h2" content={VIDEO_DATA?.title} />
        <Box className="videoBox">
          <div className='videoShape-1 videoShape'>
            <Image src={videoShape1} alt="" />
          </div>
          <div className='videoShape-2 videoShape'>
            <Image src={videoShape2} alt="" />
          </div>
          <div className='videoShape-3 videoShape'>
            <Image src={videoShape3} alt="" />
          </div>
          <div className='video-play-button-wrapper'>
            <Button
              className="videoBtn"
              onClick={handleVideoModal}
              icon={<Image src={videoBtn} alt="" />}
              iconPosition="left"
              title=""
            />
          </div>
        </Box>
      </Container>
    </VideoArea>
  );
};

export default Video;
