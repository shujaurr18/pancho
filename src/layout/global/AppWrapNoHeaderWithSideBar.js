import React from 'react'
import classNames from "classnames"

function AppWrapNoHeaderWithSideBar({className,...props}) {
  const compClass = classNames({
    "nk-wrap pt-0" : true,
    [`${className}`]: className,
  });
  return (
    <div className={compClass}>
        {props.children}
    </div>
  )
}

export default AppWrapNoHeaderWithSideBar