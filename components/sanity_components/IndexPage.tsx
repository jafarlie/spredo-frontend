import Container from 'components/sanity_components/BlogContainer'
import BlogHeader from 'components/sanity_components/BlogHeader'
import Layout from 'components/sanity_components/BlogLayout'
import HeroPost from 'components/sanity_components/HeroPost'
import IndexPageHead from 'components/sanity_components/IndexPageHead'
import MoreStories from 'components/sanity_components/MoreStories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  console.log('HeroPosts: ', heroPost)

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          {/* <BlogHeader title={title} description={description} level={1} /> */}
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
