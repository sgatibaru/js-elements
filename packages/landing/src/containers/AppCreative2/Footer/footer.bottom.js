import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { footer } from 'common/data/AppCreative2';
import React from 'react';
import {
	FooterBottom,
	FooterNav, SocialLinks
} from './footer.style';

const Footer_Bottom = (props) => {
  const { copyright, nav, socialLinks } = footer || {}
  return (
		<Container {...props}>
			<FooterBottom>
				<Text content={copyright} />
				<FooterNav>
					{nav?.map((item, index) => (
						<li key={index}>
							<Link href={item?.link}>{item.title}</Link>
						</li>
					))}
				</FooterNav>
				<SocialLinks>
					<span>Social:</span>
					{socialLinks?.length ?
					<ul>
						{socialLinks?.map((item, index) => (
							<li key={index}>
								<Link href={item?.link}>
									<img src={item?.icon?.src} alt={item?.label} />
								</Link>
							</li>
						))}
					</ul>
					:
					""
					}
				</SocialLinks>
			</FooterBottom>
		</Container>
  );
};

export default Footer_Bottom;
