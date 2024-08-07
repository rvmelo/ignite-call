import { Box, Text, styled } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$2',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
