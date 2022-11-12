import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import { everNeed } from 'common/data/AppCreative2';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import { Figure, Grid, SectionHeading } from './everNeed.style';

const EverNeed = (props) => {
	const isDesktop = useMediaQuery({
    query: '(min-width: 992px)',
  });
	const isTablet = useMediaQuery({
    query: '(max-width: 991px)',
  });

  let items = [...everNeed];
  let contents = [...Array(Math.ceil(items?.length / 3))]?.map((el, i) => items?.slice(i * 3, (i + 1) * 3));


  return (
    <section {...props}>
			<SectionHeading>
					<Heading content="It’s everything you’ll ever need" />
			</SectionHeading>

			{/* Upper 991 */}
			{isDesktop &&
			<Grid>
				<Fade up>
				{contents?.map((items, index) => {
					return (
						<div className='icon-box-items' key={index}>
						{items?.map((data, index) => {
								return (
									<Box className="icon-box-item" key={index} style={{"--backgroundColor": data?.background}}>
										<Figure>
											<NextImage src={data?.icon} alt={data?.title} />
										</Figure>
										{data?.title}
									</Box>
								)
						})}
						</div>
					)
				})}
				</Fade>
			</Grid>
			}

			{/* Under 991 */}
			{isTablet &&
			<Grid>
				<Fade up>
				{everNeed?.map((item, index) => {
						return (
							<div className='icon-box-items' key={index}>
								<Box className="icon-box-item" style={{"--backgroundColor": item?.background}}>
									<Figure>
										<NextImage src={item?.icon} alt={item?.title} />
									</Figure>
									{item?.title}
								</Box>
							</div>
						)
				})}
				</Fade>
			</Grid>
			}
    </section>
  );
};

export default EverNeed;
