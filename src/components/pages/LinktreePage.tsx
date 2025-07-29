import React, { useState } from 'react';
import { LinktreeTemplate } from '../templates/LinktreeTemplate';
import { LINKTREE_DATA } from '../../constants/data';

export const LinktreePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any>(null);

  const handleThreeDotsClick = (link: any) => {
    setSelectedLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLink(null);
  };

  return (
    <LinktreeTemplate
      profile={LINKTREE_DATA.profile}
      links={LINKTREE_DATA.links}
      socialMediaIcons={LINKTREE_DATA.socialMediaIcons}
      socialShareOptions={LINKTREE_DATA.socialShareOptions}
      showModal={showModal}
      selectedLink={selectedLink}
      onThreeDotsClick={handleThreeDotsClick}
      onCloseModal={handleCloseModal}
    />
  );
};