import styled from "styled-components";

// <-- SupSearch.tsx -->

export const Wrap = styled.div`
  flex: 1 0 auto;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(242, 235, 243, 1) 0%,
    rgba(234, 241, 249, 1) 90.1%
  );
`;

export const PagingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const InputWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  transform: translateY(-50%);
`;

export const SortWrapper = styled.div`
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  transform: translateY(-20%);
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border-radius: 8px;
  background: #fff;
`;

export const LsWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  height: 100%;
  padding-left: 28px;
`;

export const Form = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const SearchInp = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  padding-left: 70px;
  background: transparent;
  font-size: 16px;
  font-family: Pretendard;
  &:focus {
    outline: none;
  }
`;

export const VerticalDvd = styled.div`
  width: 2px;
  height: 50%;
  margin-right: 24px;
  background: #e7e7e9;
`;

export const BtnWrapper = styled.div`
  margin-right: 24px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const CardContainer = styled.div`
  flex: 1 1 0%;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// <-- SupCard.tsx -->

export const CardWrap = styled.div`
  padding: 10px 20px;
  margin: 10px 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #14b8a6;
  border-radius: 15px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  z-index: -1;
`;

export const InfoWrapper = styled.div`
  position: relative;
  max-width: 240px;
  height: 90px;
  margin: 5px auto 0;
`;

export const SupName = styled.p`
  margin-bottom: 10px;
  color: #000;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Tag = styled.p`
  overflow: hidden;
  max-height: 40px;
  padding: 0 10px;
  margin-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #999;
`;
