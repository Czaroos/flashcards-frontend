import styled from "styled-components";

import GridLayout from "react-grid-layout";

export const StyledGridLayout = styled(GridLayout)`
  overflow: hidden;
    
  & > * {
    overflow: hidden;
  }

  .react-grid-item{
    transition: 0s all;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
    top: 0;
    left: 0;
  }

  .react-grid-item.react-grid-placeholder {
    box-sizing: border-box;
    border: 3px dashed var(--secondary);
  }
`;