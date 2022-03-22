import { FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import Image from 'next/image';
import Head from 'next/head';

// import { render } from '@testing-library/react';

import { useEffect, useState } from 'react';
import { getPrismicClient } from '../../services/prismic';
import { formatDatePtBR } from '../../helpers/datePtBR';
import Header from '../../components/Header';
import Comments from '../../components/Comments';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Link from 'next/link';

interface PostContent {
  heading: string;
  body: {
    text: string;
  }[];
}
interface Post {
  first_publication_date: string | null;
  last_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: PostContent[];
  };
}

interface PostProps {
  post: Post;
  navigation: {
    prevPost: {
      uid: string;
      data: {
        title: string;
      }
    }[],
    nextPost: {
      uid: string;
      data: {
        title: string;
      }
    }[],
  }
  preview: boolean;
}

export default function Post({ post, navigation, preview }: PostProps): JSX.Element {
  const router = useRouter();
  const [readingTime, setReadingTime] = useState<number>();

  function averageReadingTime(): number {
    const totalWords = post.data.content.reduce((accWords, postContent) => {
      let postHeading = 0;
      let postBody = 0;

      if (postContent.heading) {
        postHeading = postContent.heading.trim().split(/\s+/).length;
      }

      if (RichText.asText(postContent.body)) {
        postBody = RichText.asText(postContent.body).trim().split(/\s+/).length;
      }

      return accWords + postHeading + postBody;
    }, 0);

    const wordsPerMinute = 200;

    return Math.ceil(totalWords / wordsPerMinute);
  }

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const isPostEdited = post.first_publication_date !== post.last_publication_date;

  let editionDate;
  if (isPostEdited) {
    editionDate = format(
      new Date(post.last_publication_date),
      "'* editado em' dd MMM yyyy', às' H':'m",
      {
        locale: ptBR,
      }
    )
  }

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling.</title>
      </Head>

      <main className={styles.postContainer}>
        <Header />

        <div className={styles.postImage}>
          <Image src={post.data.banner.url.split('?')[0]} layout="fill" />
        </div>

        <section className={`${commonStyles.container} ${styles.post}`}>
          <h1>{post.data.title}</h1>

          <span className={styles.postInfo}>
            <p>
              <FiUser />
              <time>
                {formatDatePtBR(new Date(post.first_publication_date))}
              </time>
            </p>
            <p>
              <FiCalendar /> {post.data.author}
            </p>
            <p>
              <FiClock /> {averageReadingTime()} min
            </p>
            <span>{isPostEdited && editionDate}</span>
          </span>

          {post.data.content.map(postContent => {
            return (
              <div className={styles.postContent} key={postContent.heading}>
                <h2>{postContent.heading}</h2>
                <article
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(postContent.body),
                  }}
                />
              </div>
            );
          })}
        </section>

        <section className={`${styles.navigation} ${commonStyles.container}`}>
          {navigation?.prevPost.length > 0 && (
            <div>
              <h3>{navigation.prevPost[0].data.title}</h3>
              <Link href={`/post/${navigation.prevPost[0].uid}`}>
                <a>Post anterior</a>
              </Link>
            </div>
          )}

          {navigation?.nextPost.length > 0 && (
            <div>
              <h3>{navigation.nextPost[0].data.title}</h3>
              <Link href={`/post/${navigation.nextPost[0].uid}`}>
                <a>Next post</a>
              </Link>
            </div>
          )}
        </section>

        <Comments />

        {preview && (
          <aside>
            <Link href="/api/exit-preview">
              <a className={commonStyles.preview}>Sair do modo Preview</a>
            </Link>
          </aside>
        )}
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 100,
    }
  );

  const paths = posts.results.map(post => {
    return {
      params: { slug: post.uid },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData
}) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = (await prismic.getByUID('posts', String(slug), {
    ref: previewData?.ref || null,
  })) as Post;

  const prevPost = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 1,
      after: response.first_publication_date,
      orderings: '[document.first_publication_date]'
    }
  )

  const nextPost = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 1,
      after: response.first_publication_date,
      orderings: '[document.last_publication_date desc]'
    }
  )

  return {
    props: {
      post: {
        ...response,
      },
      navigation: {
        prevPost: prevPost?.results,
        nextPost: nextPost?.results
      },
      preview
    },
    revalidate: 60 * 60 * 24,
  };
};