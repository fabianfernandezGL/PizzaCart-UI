import { Col, Row, Space } from 'antd'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import feed1 from '../../../images/feed/feed1.png'
import feed2 from '../../../images/feed/feed2.png'
import feed3 from '../../../images/feed/feed3.png'
import feed4 from '../../../images/feed/feed4.png'
import feed5 from '../../../images/feed/feed5.png'
import feed6 from '../../../images/feed/feed6.png'
import { TypographySubtitle } from 'components/Typography/Typography'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const imgs = [feed1, feed2, feed3, feed4, feed5, feed6]

const OurFeed = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <TypographySubtitle color={theme.colors.white.DEFAULT}>
            Our Feed
          </TypographySubtitle>
        </Col>

        <Col span={24}>
          <Space wrap>
            {imgs.map((img, idx) => {
              return <img key={idx} src={img} width="69" />
            })}
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}

export default OurFeed
