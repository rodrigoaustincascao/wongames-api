/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://github.com/rodrigoaustincascao"
          target="_blank"
          rel="noopener noreferrer"
        >
          racascao
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
