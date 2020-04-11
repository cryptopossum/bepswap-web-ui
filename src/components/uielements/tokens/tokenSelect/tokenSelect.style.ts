import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';
import { Icon } from 'antd';
import { transition } from '../../../../settings/style-util';
import { cleanTag } from '../../../../helpers/styleHelper';

export const TokenSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 216px;
  height: 60px;
  border: 1px solid ${palette('gray', 0)};
  border-radius: 2px;
  text-transform: uppercase;
  ${transition()};

  &:hover {
    border-color: ${palette('success', 0)};
  }
`;

const IconBase = cleanTag(Icon, ['open']);
export const DropdownIcon = styled(IconBase)`
  transition: transform 0.2s ease-in-out;
  ${({ open }) =>
    open ? 'transform: rotate(180deg);' : 'transform: rotate(0);'}
  font-size: 18px;

  &.caret-down {
    font-size: 22px;
    color: ${palette('gradient', 0)};
  }
`;

export const DropdownIconHolder = styled.div`
  transition: transform 0.2s ease-in-out;
  padding-top: 5px;
`;

export const TokenDropdownButton = styled.button`
  ${({ disabled }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    > * {
      margin-right: 10px;
    }

    ${!disabled
      ? css`
          &:hover {
            ${DropdownIconHolder} {
              transform: translateY(-1px);
            }
          }
        `
      : ''};
  `}
`;
