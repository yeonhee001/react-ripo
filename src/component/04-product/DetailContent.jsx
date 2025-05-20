import React from 'react'

function DetailContent({sanitizedHTML}) {
  return (
    <div dangerouslySetInnerHTML={{  __html: sanitizedHTML }} />
  )
}

export default React.memo(DetailContent);
