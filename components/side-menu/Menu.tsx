import Image from 'next/image';
import * as S from './Menu.style';

interface MenuType {
  color: string;
  menuName: string;
}

const Menu = ({ color, menuName }: MenuType) => {
  return (
    <S.Menu>
      <S.MenuContainer>
        <S.Point color={color} />
        <S.MenuItem>{menuName}</S.MenuItem>
      </S.MenuContainer>
      {/* 내가 만든 대시보드에만 달리게 조건 달아줘야 함 */}
      {/* <S.CrownIcon src='/assets/icon/crown_icon.svg' alt='왕관 아이콘' width={18} height={14} /> */}
    </S.Menu>
  );
};

export default Menu;
