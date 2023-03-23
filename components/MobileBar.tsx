'use client';

import { useState } from 'react';
import { Header, MobileMenu } from '.';
import { FiMenu } from 'react-icons/fi';

const MobileBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between md:hidden">
      <Header />
      <FiMenu onClick={() => setOpenMenu(true)} className="text-3xl" />
      {openMenu && <MobileMenu onClose={() => setOpenMenu(false)} />}
    </div>
  );
};

export default MobileBar;
