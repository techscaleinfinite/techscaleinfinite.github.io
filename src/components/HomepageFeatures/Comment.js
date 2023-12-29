// src/components/GiscusComponent.js
import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
    const { colorMode } = useColorMode();
  return (
    <Giscus
    id="comments"
    repo="techscaleinfinite/techscaleinfinite.github.io"
    repoId="R_kgDOKxkmRw"
    category="Q&A"
    categoryId="DIC_kwDOKxkmR84CcDmm"
    mapping="pathname"
    term="Comments"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="bottom"
    theme="preferred_color_scheme"
    lang="en"
    loading="lazy"
  />
  );
}
