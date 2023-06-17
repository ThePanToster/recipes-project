import { useTranslation } from 'react-i18next';

type Props = {
  statusCode: number;
  message?: string;
};

const Error = ({ statusCode, message }: Props) => {
  const { t } = useTranslation();

  const translatedMessage = t(message || statusCode.toString());

  return (
    <>
      <div>{statusCode}</div>
      <p>
        {translatedMessage === statusCode.toString()
          ? t('unknown error')
          : translatedMessage}
      </p>
      <a href="/">Powrót</a>
    </>
  );
};

export default Error;
