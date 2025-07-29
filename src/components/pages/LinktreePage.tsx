import React, { useState } from 'react';
import { LinktreeTemplate } from '../templates/LinktreeTemplate';
import { LINKTREE_DATA } from '../../constants/data';
import { Link } from '../../types';

export const LinktreePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);

  const handleThreeDotsClick = (link: Link) => {
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