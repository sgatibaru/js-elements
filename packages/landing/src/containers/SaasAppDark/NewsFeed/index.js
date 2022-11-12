import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { posts } from 'common/data/SaasAppDark';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Fade from 'react-reveal/Fade';
import { Article, Grid, Section, SectionHeading } from './newsFeed.style';


const NewsFeed = () => {
  return (
    <Section id="newsfeed">
      <Container width="1300px">
        <SectionHeading>
          <Text as="span" content="Updated Blog Post" />
          <Heading content="What our author post on Newsfeed" />
        </SectionHeading>
        <Grid>
          {posts.map((post) => (
            <Fade key={post.id} up delay={post.id * 100}>
              <Article>
                <NextImage src={post.image} alt="post image" />
                <Text content={post.date} />
                <Heading as="h4" content={post.title} />
                <Link href={post.excerpt.link}>
                  {post.excerpt.label} <Icon icon={arrowRight} />
                </Link>
              </Article>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default NewsFeed;
