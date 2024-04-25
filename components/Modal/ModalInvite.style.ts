import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const ModalInviteForm = styled.form`
  width: 54rem;
  min-height: 27.6rem;
  padding: 3.2rem 2.8rem 2.8rem;
  border-radius: 0.8rem;
  background: var(--white_100, #fff);

  @media ${device.mobile} {
    width: 32.7rem;
    min-height: 24.1rem;
    padding: 2.8rem 2rem;
  }
`;

export const ModalInviteFormTitle = styled.legend`
  color: var(--black_050, #333236);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 3.2rem;

  @media ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }
`;

export const ModalInviteFormLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const ModalInviteFormInput = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 1.5rem 1.6rem 1.4rem;
  margin: 1rem 0 2.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);

  ::placeholder {
    color: var(--black_050, #333236);
  }

  @media ${device.mobile} {
    margin: 1rem 0 2.4rem;
  }
`;

export const ModalInviteErrorMessage = styled.div`
  height: 1.7rem;
  margin: -2rem 0 2.8rem;
  color: var(--red_100, #d6173a);
  font-size: 1.4rem;
  font-weight: 400;
`;

export const ModalInviteFormButtonWrapper = styled.div`
  min-height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${device.mobile} {
    min-height: 4.2rem;
    display: flex;
    flex-direction: invite;
    align-items: flex-start;
  }
`;

export const PlaceholderText = styled.div`
  visibility: hidden;
  flex-grow: 1;
  height: 0;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ModalInviteFormDeleteText = styled.span`
  color: var(--gray_020, #9fa6b2);
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration-line: underline;
  margin-right: auto;
  cursor: pointer;

  @media ${device.mobile} {
    margin-bottom: 1.6rem;
  }
`;

export const ModalInviteFormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;