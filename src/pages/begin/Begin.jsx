import React from 'react'
import * as S from './StyleBegin'

const Begin = React.forwardRef((props, ref) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div ref={ref}>
      <S.Container>
        <S.Content>
          <S.Title>Igor Oliveira</S.Title>
          <S.Subtitle>Full-Stack Developer</S.Subtitle>
          <S.IconsBox>
            <S.Icon src='/gitHubLogo.png' onClick={() => openInNewTab('https://github.com/igorOliveira-dev')} />
            <S.Icon src='/instagramLogo.png' onClick={() => openInNewTab('https://www.instagram.com/dev.igoroliveira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')} />
            <S.Icon src='/linkedinLogo.png' onClick={() => openInNewTab('https://www.linkedin.com/in/igor-ventura-de-oliveira-6a4645293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ')} />
          </S.IconsBox>
        </S.Content>
      </S.Container>
    </div>
  )
})

export default Begin
