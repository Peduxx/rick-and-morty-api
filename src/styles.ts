import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  ul {
    display: grid;
    grid-row-gap: 50px;
    grid-template-columns: auto auto auto;
    align-self: center;
    li {
      flex: 0 0 33.333333%;
      margin-left: 1rem;
    }
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;

  button {
    width: 100%;
    max-width: 280px;
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    transition: 0.2s;
    margin-left: 1.5rem;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  height: 100%;
  max-height: 550px;

  img {
    margin-top: 1.5rem;
    border-radius: 5px;
  }

  .content {
    margin-top: 1.5rem;
    align-self: baseline;
  }
`;
