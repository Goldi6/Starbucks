import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  width: 100vw;
  background-color: var(--modal-background-rgb);

  z-index: 5;

  height: calc(100vh - var(--globalNavHeightXs, 0));
  top: var(--globalNavHeightXs, 0);
  &.before-closed {
    background: none;
  }
  &.closed {
    background: none;

    z-index: -5;
    width: 0;
  }

  @media screen and (min-width: 640px) {
    height: calc(100vh - var(--globalNavHeightMobile, 0));
    top: var(--globalNavHeightMobile, 0);
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - var(--globalNavHeightTablet, 0));
    top: var(--globalNavHeightTablet, 0);
  }
  @media screen and (min-width: 1024px) {
    height: calc(100vh - var(--globalNavHeightDesktop, 0));
    top: var(--globalNavHeightDesktop, 0);
  }
`;
