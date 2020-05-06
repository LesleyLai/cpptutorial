import styled from "@emotion/styled";

import { Theme } from "../theme";

const Input = styled.input<{ theme: Theme }>`
  outline: none;
  border: none;
  font-size: 1em;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 2px;
  padding-left: 38px;
  max-width: 600px;

  :focus,
  :visited,
  :hover,
  :focus-within {
    outline: none;
    border: 0;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.searchPlaceholder};
  }
`;

const Form = styled.form<{ theme: Theme }>`
  display: flex;
  align-items: center;
  background-color: transparent;
  position: relative;
  justify-content: right;
  border-bottom: 3px solid ${({ theme }) => theme.colors.search};

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 15px;
  }

  :focus {
    outline: none;
    border: none;
  }
`;

const SearchIcon = styled.svg<{ theme: Theme }>`
  width: 1em;
  pointer-events: none;
  margin-right: -30px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.search};
`;

const SearchWrapper = styled.div`
  padding-left: 0px;
  padding-right: 20px;
  flex: 1;
  display: flex;
  justify-content: right;
  position: relative;

  a {
    font-weight: 500;
  }

  @media (max-width: 767px) {
    padding: 0px 0;
    padding-top: 0px;
    position: absolute;
    bottom: 0px;
    width: calc(100% - 70px);
    position: absolute;
    left: 40px;
    top: 8px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-left: 0px;
  }
`;

const Search = () => (
  <SearchWrapper className="hiddenMobile navBarUL">
    <Form>
      <SearchIcon
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        ></path>
      </SearchIcon>
      <Input type="text" placeholder="Search" aria-label="Search" />
    </Form>
  </SearchWrapper>
);

export default Search;
