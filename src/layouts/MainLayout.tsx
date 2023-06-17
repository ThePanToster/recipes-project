import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <div id="wrapper">
      <header>{t('title')}</header>
      <main>{children}</main>
      <footer>&copy;2023 Albert Ząbkiewicz</footer>
    </div>
  );
};

export default MainLayout;
