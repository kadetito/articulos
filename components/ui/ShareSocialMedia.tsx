import { useRouter } from "next/router";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export const ShareSocialMedia = () => {
  const { asPath } = useRouter();
  const shareUrl = `${process.env.NEXT_PUBLIC_API_URL}${asPath}`;

  return (
    <>
      <EmailShareButton
        className="me-2"
        children={<EmailIcon size={32} round={true} />}
        url={shareUrl}
      />
      <FacebookShareButton
        className="me-2"
        children={<FacebookIcon size={32} round={true} />}
        url={shareUrl}
      />

      <TwitterShareButton
        className="me-2"
        children={<TwitterIcon size={32} round={true} />}
        url={shareUrl}
      />
      <LinkedinShareButton
        className="me-2"
        children={<LinkedinIcon size={32} round={true} />}
        url={shareUrl}
      />
      <TelegramShareButton
        className="me-2"
        children={<TelegramIcon size={32} round={true} />}
        url={shareUrl}
      />
      <WhatsappShareButton
        className="me-2"
        children={<WhatsappIcon size={32} round={true} />}
        url={shareUrl}
      />
    </>
  );
};
