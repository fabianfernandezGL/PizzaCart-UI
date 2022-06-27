import { Typography, TypographyProps } from '@mui/material'
import styled from 'styled-components'

const TypographyText = styled(Typography)`
  line-height: 21px;
`

const Text = (props: TypographyProps) => {
  return <TypographyText variant="body1" {...props} />
}

const TypographyBigTitle = styled(Typography)`
  line-height: 99px;
`

const BigTitle = (props: TypographyProps) => {
  return <TypographyBigTitle variant="h2" {...props} />
}

const TypographySmallTitle = styled(Typography)`
  line-height: 50px;
`

const SmallTitle = (props: TypographyProps) => {
  return <TypographySmallTitle variant="h3" {...props} />
}

const TypographySubtitle = styled(Typography)`
  line-height: 30px;
`

const Subtitle = (props: TypographyProps) => {
  return <TypographySubtitle variant="h4" {...props} />
}

export { BigTitle, SmallTitle, Text, Subtitle }